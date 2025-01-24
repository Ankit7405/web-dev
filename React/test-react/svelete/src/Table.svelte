<script lang="ts">
    export let colum: any[] = []; // Array of column definitions
    export let dataObj: any[] = []; // Array of data objects
</script>

<table>
    <thead>
        <tr>
            {#each colum as { label }}
                <th>{label}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each dataObj as item}
            <tr>
                {#each colum as { prop }}
                    <td>{item.tenentInfo[prop]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
