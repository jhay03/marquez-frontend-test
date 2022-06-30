export const moviesColumns = [
  {
    field: "title",
    headerName: "Top 5 Movies this month",
    minWidth: 250,
    renderCell: ({ row }) => {
      return (
        <span>
          {row.title} ({row.year})
        </span>
      );
    },
  },
  {
    field: "views",
    headerName: "Views",
    minWidth: 250,
  },
  {
    field: "ratings",
    headerName: "Ratings",
    flex: 1,
  },
];
