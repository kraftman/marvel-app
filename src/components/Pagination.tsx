'use client';
import { useRouter } from 'next/navigation';
import { Pagination as MUIPagination } from '@mui/material';

export const Pagination = ({ numPages, currentPage }) => {
  const router = useRouter();
  const handlePageChange = (event, value) => {
    router.push(`/?page=${value}`);
  };

  return (
    <MUIPagination
      count={numPages}
      page={currentPage}
      onChange={handlePageChange}
      showFirstButton
      showLastButton
    />
  );
};
