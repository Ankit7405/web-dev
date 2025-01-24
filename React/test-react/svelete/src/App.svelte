<script>
  import Table from "./Table.svelte";

  let colum = [
      { label: "Entity", prop: "entity" },
      { label: "GBGF", prop: "gbgf" }
  ];

  let dataObj = [
      {
          tenentInfo: {
              entity: "BH_BBME",
              gbgf: "WPB"
          }
      },
      {
          tenentInfo: {
              entity: "AE_BBME",
              gbgf: "WPB"
          }
      }
  ];
</script>

<Table {dataObj} {colum} />