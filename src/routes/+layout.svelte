<script>
	import '../app.css';
	import BlobBackground from '$lib/BlobBackground.svelte';
	import { onNavigate } from '$app/navigation';

	let menuShown = false;

	function toggleMenu() {
		menuShown = !menuShown;
	}

	onNavigate((navigation) => {
		menuShown = false;
	});
</script>

<div class="navbar bg-transparent fixed top-0 z-20">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">
			<img src="alchemy-gold.svg" alt="The Alchemical Symbol for Gold" width="45" height="45" />
			Heart & Soul Alchemy
		</a>
	</div>
	<div class="relative flex-col">
		<button on:click={toggleMenu} class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</button>
		{#if menuShown}
			<ul class="absolute right-0 top-14 menu bg-base-200 rounded-box w-56">
				<li>
					<a href="https://squareup.com/appointments/book/u2z3dozuxo2f05/LE17XJDRXB57J/start"
						>Readings</a
					>
				</li>
				<li><a href="/blog">Beth's Blog</a></li>
				<li><a href="/about">About HASA</a></li>
			</ul>
		{/if}
	</div>
</div>

<BlobBackground />

<slot />

<footer class="footer footer-center p-4 bg-transparent absolute text-base-content">
	<aside>
		<p>Copyright © 2024 - All rights reserved by Beth Parker</p>
	</aside>
</footer>
