// CanvasComponent.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CanvasComponent = ({ theme }) => {
  const canvasRef = useRef(null);
  const frameCount = 110;
  const images = useRef([]);
  const imageSeq = useRef({ frame: 0 });

  useEffect(() => {
    console.log("Theme in CanvasComponent useEffect:", theme);

    const loadImages = () => {
      images.current = [];
      const promises = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = theme === 'bright'
          ? `${process.env.PUBLIC_URL}/imagesbright/male${String(i + 1).padStart(4, '0')}.png`
          : `${process.env.PUBLIC_URL}/imagesdark/dark${i + 1}.png`;

        promises.push(
          new Promise((resolve, reject) => {
            img.onload = () => {
              images.current.push(img);
              resolve();
            };
            img.onerror = () => {
              reject(new Error(`Image load error: ${img.src}`));
            };
          })
        );
      }

      return Promise.all(promises);
    };

    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const img = images.current[imageSeq.current.frame];

      if (img && img.complete) {
        const scaleFactor = theme === 'dark' ? 0.9 : 1;

        const hRatio = (canvas.width / img.width) * scaleFactor;
        const vRatio = (canvas.height / img.height) * scaleFactor;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    loadImages().then(() => {
      gsap.to(imageSeq.current, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: '#main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: () => render(),
        },
      });
      render();
    });

    const handleResize = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [theme]);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default CanvasComponent;
