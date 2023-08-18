<script>
	import '../app.css';
	import Sidebar from '$components/Sidebar.svelte';
</script>

<div class="flex min-h-screen gap-4 p-12">
	<div class="w-1/2 md:w-1/4 bg-secondary">
		<Sidebar />
	</div>
	<div class="bg-secondary">
		<slot />
	</div>
</div>
