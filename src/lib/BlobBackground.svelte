<div class="gradient-bg">
	<svg viewBox="0 0 100vw 100vw" xmlns="http://www.w3.org/2000/svg" class="noiseBg">
		<filter id="noiseFilterBg">
			<feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
		</filter>
		<rect
			width="100%"
			height="100%"
			preserveAspectRatio="xMidYMid meet"
			filter="url(#noiseFilterBg)"
		/>
	</svg>
	<svg xmlns="http://www.w3.org/2000/svg" class="svgBlur">
		<defs>
			<filter id="goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
					result="goo"
				/>
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
	</div>
</div>

<!-- from https://codepen.io/Podgro/details/oNOKYqr -->

<style>
	:root {
		--color-bgright: rgba(142, 130, 254, 0);
		--color-bgleft: rgba(255, 0, 0, 0);
		--color1: 107, 74, 255;
		--color2: 100, 100, 255;
		--color3: 50, 160, 220;
		--color4: 18, 113, 255;
		--color5: 80, 47, 122;
		--circle-size: 80%;
		--blending: luminosity;
		--circle-opacity-at-center: 0.3;
	}

	@keyframes moveInCircle {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes moveVertical {
		0% {
			transform: translateY(-50%);
		}
		50% {
			transform: translateY(50%);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	@keyframes moveHorizontal {
		0% {
			transform: translateX(-50%) translateY(-10%);
		}
		50% {
			transform: translateX(50%) translateY(10%);
		}
		100% {
			transform: translateX(-50%) translateY(-10%);
		}
	}

	.g1,
	.g2,
	.g3,
	.g4,
	.g5 {
		will-change: transform;
	}

	.gradient-bg {
		width: 100vw;
		height: 100vh;
		position: fixed;
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
		filter: url(#goo) blur(10px);
		width: 100%;
		height: 100%;
	}

	.g1 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(var(--color1), var(--circle-opacity-at-center)) 0,
				rgba(var(--color1), 0) 50%
			)
			no-repeat;
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
		background: radial-gradient(
				circle at center,
				rgba(var(--color2), var(--circle-opacity-at-center)) 0,
				rgba(var(--color2), 0) 50%
			)
			no-repeat;
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
		background: radial-gradient(
				circle at center,
				rgba(var(--color3), var(--circle-opacity-at-center)) 0,
				rgba(var(--color3), 0) 50%
			)
			no-repeat;
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
		background: radial-gradient(
				circle at center,
				rgba(var(--color4), var(--circle-opacity-at-center)) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);
		width: var(--circle-size);
		height: var(--circle-size);
		top: calc(50% - var(--circle-size) / 2);
		left: calc(50% - var(--circle-size) / 2);
		transform-origin: calc(50% - 200px);
		animation: moveHorizontal 40s ease infinite;
		opacity: 0.7;
	}

	.g5 {
		position: absolute;
		background: radial-gradient(
				circle at center,
				rgba(var(--color5), var(--circle-opacity-at-center)) 0,
				rgba(var(--color5), 0) 50%
			)
			no-repeat;
		mix-blend-mode: var(--blending);
		width: calc(var(--circle-size) * 2);
		height: calc(var(--circle-size) * 2);
		top: calc(50% - var(--circle-size));
		left: calc(50% - var(--circle-size));
		transform-origin: calc(50% + 800px) calc(50% + 200px);
		animation: moveInCircle 20s ease infinite;
		opacity: 1;
	}
</style>
