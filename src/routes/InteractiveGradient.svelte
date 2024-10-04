<!-- https://codepen.io/Podgro/details/oNOKYqr -->

<script>
  import { onMount } from 'svelte';

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  onMount(() => {
    const move = () => {
      currentX += (targetX - currentX) / 20;
      currentY += (targetY - currentY) / 20;
      document.querySelector('.interactive').style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
      requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    });

    move();

    onDestroy(() => {
      window.removeEventListener('mousemove', handleMouseMove);
    });
  });
</script>

<style>
  :root {
    --color-bgright: rgba(142, 130, 254, 0);
    --color-bgleft: rgba(255, 0, 0, 0);
    --color1: 107, 74, 255;
    --color2: 100, 100, 255;
    --color3: 50, 160, 220;
    --color4: 18, 113, 255;
    --color5: 80, 47, 122;
    --color-interactive: 140, 100, 255;
    --circle-size: 80%;
    --blending: hard-light;
  }


  @keyframes moveInCircle {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes moveVertical {
    0% { transform: translateY(-50%); }
    50% { transform: translateY(50%); }
    100% { transform: translateY(-50%); }
  }

  @keyframes moveHorizontal {
    0% { transform: translateX(-50%) translateY(-10%); }
    50% { transform: translateX(50%) translateY(10%); }
    100% { transform: translateXX(-50%) translateY(-10%); }
  }

  .gradient-bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    background: linear-gradient(to left, var(--color-bgright), var(--color-bgleft));
    top: 0;
    left: 0;
    z-index: -1;
  }

  .svgBlur {
    display: none;
  }
  
  .noiseBg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    mix-blend-mode: soft-light;
    opacity: 0.8;
  }

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending); 
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);
    transform-origin: center center;
    animation: moveVertical 30s ease infinite;
    opacity: 1;
  }

  .g2 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);
    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;
    opacity: 1;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);
    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;
    opacity: 1;
  }
  
  .g4 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);
    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;
    opacity: 0.7;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);
    width: calc(var(--circle-size) * 2);
    height: calc(var(--circle-size) * 2);
    top: calc(50% - var(--circle-size));
    left: calc(50% - var(--circle-size));
    transform-origin: calc(50% + 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;
    opacity: 1;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color-interactive), 1) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    opacity: 1;
  }
</style>


<div class="gradient-bg">
  <svg viewBox="0 0 100vw 100vw"
        xmlns='http://www.w3.org/2000/svg'
        class="noiseBg">
    <filter id='noiseFilterBg'>
      <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' />
    </filter>
    <rect width='100%' height='100%' preserveAspectRatio="xMidYMid meet" filter='url(#noiseFilterBg)' />
  </svg>
  <svg xmlns='http://www.w3.org/2000/svg' class="svgBlur">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
  <div class="gradients-container">
    <div class="g1"></div>
    <div class="g2"></div>
    <div class="g3"></div>
    <div class="g4"></div>
    <div class="g5"></div>
    <div class="interactive"></div>
  </div>
</div>
