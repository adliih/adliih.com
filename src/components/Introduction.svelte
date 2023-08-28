<script lang="ts">
	import type { UserProfile } from '$lib/types';

	export let userProfile: UserProfile;
</script>

<div class="hero">
	<div class="p-0 hero-content">
		<div class="flex flex-col gap-6">
			<h1 class="text-5xl font-bold text-primary">{userProfile.title}</h1>
			<h2 class="text-3xl font-thin text-secondary">{userProfile.subtitle}</h2>
			{#each userProfile.descriptions as description}
				<p>{@html description.html}</p>
			{/each}
			<p />
		</div>
	</div>
</div>
