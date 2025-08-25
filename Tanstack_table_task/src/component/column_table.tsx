import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';

// Sample data type
type TableData = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
};

const generateSampleData = (): TableData[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    col1: `Row ${i + 1} Col 1`,
    col2: `Row ${i + 1} Col 2`,
    col3: `Row ${i + 1} Col 3`,
    col4: `Row ${i + 1} Col 4`,
    col5: `Row ${i + 1} Col 5`,
    col6: `Row ${i + 1} Col 6`,
    col7: `Row ${i + 1} Col 7`,
    col8: `Row ${i + 1} Col 8`,
    col9: `Row ${i + 1} Col 9`,
    col10: `Row ${i + 1} Col 10`,
  }));
};

const columns: ColumnDef<TableData, any>[] = [
  {
    accessorKey: 'col1',
    header: 'Column 1',
    size: 100, // 10% width
  },
  {
    accessorKey: 'col2',
    header: 'Column 2',
    size: 100, // 10% width
  },
  {
    accessorKey: 'col3',
    header: 'Column 3',
    size: 100, // 10% width
  },
  {
    accessorKey: 'col4',
    header: 'Column 4',
    size: 80, // 8% width
  },
  {
    accessorKey: 'col5',
    header: 'Column 5',
    size: 80, // 8% width
  },
  {
    accessorKey: 'col6',
    header: 'Column 6',
    size: 80, // 8% width
  },
  {
    accessorKey: 'col7',
    header: 'Column 7',
    size: 80, // 8% width
  },
  {
    accessorKey: 'col8',
    header: 'Column 8',
    size: 80, // 8% width
  },
  {
    accessorKey: 'col9',
    header: 'Column 9',
    size: 150, // 15% width
  },
  {
    accessorKey: 'col10',
    header: 'Column 10',
    size: 150, // 15% width
  },
];

export const ColumnTable = () => {
  const data = generateSampleData();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  });

  return (
    <div className='w-full h-screen p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        TanStack React Table - Full Width
      </h1>

      <div className='w-full overflow-hidden  border-[2px] rounded-lg'>
        <table className='w-full table-fixed'>
          <thead className=''>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='px-4 py-3 text-left font-semibold text-foreground border border-border'
                    style={{
                      width: `${
                        header.column.id === 'col1' ||
                        header.column.id === 'col2' ||
                        header.column.id === 'col3'
                          ? '10%'
                          : header.column.id === 'col9' ||
                            header.column.id === 'col10'
                          ? '15%'
                          : '8%'
                      }`,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/50'
                } hover:bg-accent/50 transition-colors`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='px-4 py-3 text-sm text-foreground border border-border truncate'
                    style={{
                      width: `${
                        cell.column.id === 'col1' ||
                        cell.column.id === 'col2' ||
                        cell.column.id === 'col3'
                          ? '10%'
                          : cell.column.id === 'col9' ||
                            cell.column.id === 'col10'
                          ? '15%'
                          : '8%'
                      }`,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
