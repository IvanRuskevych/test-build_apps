import { Skeleton, TableCell, TableRow } from '@mui/material'
import { columns } from '~/components/UserTable/columns.ts'

export const LoadingSkeletonRows = ({ rowsPerPage }: { rowsPerPage: number }) => (
  <>
    {Array.from({ length: rowsPerPage }).map((_, rowIdx: number) => (
      <TableRow key={rowIdx}>
        {columns.map((col) => (
          <TableCell key={col.id}
                     sx={{ width: col.width }}>
            <Skeleton
              variant={'text'}
              width={`${parseInt(col.width) * 0.95}%`}
              height={'auto'}
            />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
)