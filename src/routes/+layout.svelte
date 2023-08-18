<script>
	import '../app.css';
	import Sidebar from '$components/Sidebar.svelte';
</script>

<div class="flex min-h-screen gap-4">
	<div class="sticky top-0 w-1/2 h-screen p-4 flex-0 md:w-1/4">
		<Sidebar />
	</div>
	<div class="py-4 -mx-4 divider divider-horizontal" />
	<div class="flex-1 px-4 py-12 overflow-y-auto">
		<slot />
	</div>
</div>
