<script>
	export let post;
</script>

<div class="card glass bg-base-100 shadow-xl m-10">
	<figure>
		<img src={post.feature_image} alt={post.feature_image_alt} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{post.title}</h2>
		<p>{post.excerpt}</p>
	</div>
</div>
