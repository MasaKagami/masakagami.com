import React, { useRef, useEffect, useState } from 'react';

class Particle {
  constructor(x, y, targetX, targetY, radius, color) {
    // Initial position is random across the canvas for entry animation
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.targetX = targetX;
    this.targetY = targetY;
    this.originalX = targetX;
    this.originalY = targetY;
    this.radius = radius;
    this.color = color;
    this.friction = 0.93;
    this.ease = 0.10; // Fixed ease value for consistent animation speed
    this.distanceFromMouse = 40;
    this.vx = 0;
    this.vy = 0;
    this.newTargetX = null;
    this.newTargetY = null;
  }

  update(mouseX, mouseY, hasNewTarget = false) {
    // If we have new target positions, gradually move towards them
    if (hasNewTarget && this.newTargetX !== null && this.newTargetY !== null) {
      this.targetX = this.newTargetX;
      this.targetY = this.newTargetY;
      this.originalX = this.newTargetX;
      this.originalY = this.newTargetY;
    }
    
    // Distance from current position to target position
    let dx = this.targetX - this.x;
    let dy = this.targetY - this.y;
    
    // Mouse effect calculation
    if (mouseX !== null && mouseY !== null) {
      const mouseDistance = Math.sqrt(
        Math.pow(mouseX - this.x, 2) + 
        Math.pow(mouseY - this.y, 2)
      );
      
      // If mouse is close, push particles away
      if (mouseDistance < this.distanceFromMouse) {
        const angle = Math.atan2(mouseY - this.y, mouseX - this.x);
        const force = (this.distanceFromMouse - mouseDistance) / this.distanceFromMouse;
        
        // Push away from mouse
        this.targetX = this.originalX - Math.cos(angle) * force * 100;
        this.targetY = this.originalY - Math.sin(angle) * force * 100;
      } else {
        // Return to original position
        this.targetX = this.originalX;
        this.targetY = this.originalY;
      }
    }
    
    // Calculate new velocity
    this.vx += dx * this.ease;
    this.vy += dy * this.ease;
    
    // Apply friction
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    // Update position
    this.x += this.vx;
    this.y += this.vy;
  }

  setNewTarget(x, y) {
    this.newTargetX = x;
    this.newTargetY = y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const TextParticleSystem = ({ 
  textOptions = [
    { mainText: 'MASA KAGAMI', subText: 'FRONTEND DEV' },
    { mainText: 'LOOKING FOR A', subText: 'JUNIOR FRONTEND JOB' }
  ],
  color = '#ffffff', 
  particleSize = 2,
  density = 10,
  transitionInterval = 6000
}) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [textIndex, setTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const animationFrameId = useRef(null);
  const particlesRef = useRef([]);
  const textLayerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Set initial mobile state and update on resize
  useEffect(() => {
    const checkMobile = () => {
      const mobileWidth = 768;
      const isMobileView = window.innerWidth < mobileWidth;
      setIsMobile(isMobileView);
      console.log(`Screen width: ${window.innerWidth}, isMobile: ${isMobileView}`);
      return isMobileView;
    };
    
    // Initial check
    checkMobile();
    
    // Update on resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      setDimensions({
        width: newWidth,
        height: newHeight,
      });
      
      checkMobile();
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle text transitions
  useEffect(() => {
    const textRotationTimer = setInterval(() => {
      setIsTransitioning(true);
      
      // Generate particles for the next text
      const nextTextIndex = (textIndex + 1) % textOptions.length;
      const nextPositions = generateParticlePositions(
        textOptions[nextTextIndex].mainText,
        textOptions[nextTextIndex].subText,
        dimensions.width,
        dimensions.height,
        density
      );
      
      // If we already have particles, update them with new targets
      if (particlesRef.current.length > 0 && nextPositions.length > 0) {
        // If next text has fewer particles, only update what we can
        const minLength = Math.min(particlesRef.current.length, nextPositions.length);
        
        for (let i = 0; i < minLength; i++) {
          particlesRef.current[i].setNewTarget(nextPositions[i].x, nextPositions[i].y);
        }
        
        // If next text has more particles, create new ones
        if (nextPositions.length > particlesRef.current.length) {
          const newParticles = [];
          for (let i = particlesRef.current.length; i < nextPositions.length; i++) {
            const radius = isMobile ? particleSize * 0.75 : particleSize; // Fixed radius for consistent appearance
            const particle = new Particle(
              Math.random() * dimensions.width,
              Math.random() * dimensions.height,
              nextPositions[i].x,
              nextPositions[i].y,
              radius,
              color
            );
            newParticles.push(particle);
          }
          particlesRef.current = [...particlesRef.current, ...newParticles];
        }
        
        // If next text has fewer particles, remove excess
        if (nextPositions.length < particlesRef.current.length) {
          particlesRef.current = particlesRef.current.slice(0, nextPositions.length);
        }
      }
      
      // After a delay to allow particles to move, update the text index
      setTimeout(() => {
        setTextIndex(nextTextIndex);
        setIsTransitioning(false);
      }, 1500); // Animation time
      
    }, transitionInterval);
    
    return () => clearInterval(textRotationTimer);
  }, [textIndex, textOptions, dimensions, density, particleSize, color, transitionInterval, isMobile]);
  
  // Generate particle positions from text
  const generateParticlePositions = (text, secondaryText, width, height, density) => {
    if (!width || !height) return [];
    
    // Create an offscreen canvas for text rendering
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    const offCtx = offscreenCanvas.getContext('2d');
    
    // Clear context
    offCtx.clearRect(0, 0, width, height);
    
    // Set text properties
    offCtx.fillStyle = 'white';
    offCtx.textBaseline = 'middle';
    offCtx.textAlign = 'center'; // Center text horizontally for consistency
    
    // Calculate font size based on canvas width (responsive)
    const fontSize = Math.min(width / 15, 180); // Smaller font to fit "MASA KAGAMI" on one line
    offCtx.font = `bold ${fontSize}px geologica, sans-serif`;
    
    // Center point of the canvas
    const centerX = width / 2;
    let centerY = height / 2 - fontSize; // Move main text up slightly
    
    // Draw main text (always single line)
    offCtx.fillText(text, centerX, centerY);
    
    // Draw secondary text if provided
    if (secondaryText) {
      const secondaryFontSize = fontSize * 0.7;
      offCtx.font = `medium ${secondaryFontSize}px geologica, sans-serif`;
      offCtx.fillText(secondaryText, centerX, centerY + fontSize * 1.5); // Position below main text
    }
    
    // Get image data to analyze pixel positions
    const imageData = offCtx.getImageData(0, 0, width, height).data;
    
    // Create positions array based on text pixels
    const positions = [];
    const adjustedDensity = Math.max(density, 1); // Ensure we don't divide by zero
    
    for (let y = 0; y < height; y += adjustedDensity) {
      for (let x = 0; x < width; x += adjustedDensity) {
        const index = (y * width + x) * 4;
        // If pixel is not transparent (text)
        if (imageData[index + 3] > 128) {
          positions.push({ x, y });
        }
      }
    }
    
    return positions;
  };

  // Create particles from text
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const positions = generateParticlePositions(
      textOptions[textIndex].mainText,
      textOptions[textIndex].subText,
      dimensions.width, 
      dimensions.height,
      density
    );
    
    // Create particles at these positions with consistent size
    const particles = positions.map(pos => {
      return new Particle(
        Math.random() * dimensions.width,
        Math.random() * dimensions.height,
        pos.x,
        pos.y,
        particleSize, // Fixed size for consistency
        color
      );
    });
    
    particlesRef.current = particles;
    
  }, [dimensions, textOptions, textIndex, color, particleSize, density]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    const handleMouseLeave = () => {
      setMousePosition({ x: null, y: null });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation loop effect
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0 || particlesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update(mousePosition.x, mousePosition.y, isTransitioning);
        particle.draw(ctx);
      });
      
      // Connect nearby particles with lines
      connectParticles(ctx);
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    const connectParticles = (ctx) => {
      const maxDistance = 30; // Maximum distance for connecting particles
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.strokeStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [dimensions, mousePosition, color, isTransitioning]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default TextParticleSystem;