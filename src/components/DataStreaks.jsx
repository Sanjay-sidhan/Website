import React, { useEffect, useRef } from 'react';

const DataStreaks = () => {
    const canvasRef = useRef(null);
    const scrollVelocity = useRef(0);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let animationId;
        const streaks = [];
        const streakCount = 200;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Streak {
            constructor() {
                this.init();
            }

            init() {
                this.x = (Math.random() - 0.5) * width * 2;
                this.y = (Math.random() - 0.5) * height * 2;
                this.z = Math.random() * width;
                this.pz = this.z;
                this.speed = Math.random() * 5 + 2;
                this.color = Math.random() > 0.5 ? 'rgba(255, 77, 0, 0.4)' : 'rgba(255, 255, 255, 0.2)';
            }

            update(velocity) {
                this.pz = this.z;
                this.z -= (this.speed + velocity * 15);

                if (this.z <= 1) {
                    this.init();
                }
            }

            draw() {
                // Perspective projection
                const sx = (this.x / this.z) * (width / 2) + (width / 2);
                const sy = (this.y / this.z) * (height / 2) + (height / 2);

                const px = (this.x / this.pz) * (width / 2) + (width / 2);
                const py = (this.y / this.pz) * (height / 2) + (height / 2);

                // Skip if off-screen
                if (sx < 0 || sx > width || sy < 0 || sy > height) return;

                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1 + (1 - this.z / width) * 2;
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.stroke();
            }
        }

        const setup = () => {
            for (let i = 0; i < streakCount; i++) {
                streaks.push(new Streak());
            }
        };

        const animate = () => {
            // Dark trails instead of clearRect for more velocity feel
            ctx.fillStyle = 'rgba(5, 5, 5, 0.3)';
            ctx.fillRect(0, 0, width, height);

            // Fetch current scroll velocity
            const currentScrollY = window.scrollY;
            const diff = Math.abs(currentScrollY - lastScrollY.current);
            scrollVelocity.current = scrollVelocity.current * 0.95 + diff * 0.05;
            lastScrollY.current = currentScrollY;

            const velocity = Math.min(scrollVelocity.current * 0.5, 40);

            for (let streak of streaks) {
                streak.update(velocity);
                streak.draw();
            }

            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        setup();
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                background: '#050505'
            }}
        />
    );
};

export default DataStreaks;
