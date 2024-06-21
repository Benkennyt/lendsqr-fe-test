import { useEffect, useState } from 'react';
import './Pagination.scss';
import PgRightIcon from '../assets/svg/pgright.svg';
import PgLeftIcon from '../assets/svg/pgleft.svg';
import ShowingDownIcon from '../assets/svg/showingDownIcon.svg';

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (index: number) => void;
  currentPage: number;
}

const Pagination = (props: PaginationProps) => {
  const { postsPerPage, totalPosts, setCurrentPage, currentPage } = props;
  const [hovered, setHovered] = useState(false);
  const [allPagesHovered, setAllPagesHovered] = useState(false);
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const [pages, setPages] = useState<(number | string)[]>([]);

  useEffect(() => {
    const generatePages = () => {
      if (totalPages <= 6) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      if (currentPage === 1) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
      }
      if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
      }
      if (currentPage >= 2 && currentPage < 10) {
        return [currentPage - 1, currentPage, currentPage + 1, '...', totalPages - 1, totalPages];
      }
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    setPages(generatePages());
  }, [currentPage, totalPages]);

  const handleActivePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowPages = () => {
    const allPages = []
    for (let i = 1; i <= totalPages; i++) {
      allPages.push(i);
    }

    return (
      <div>
        {allPages.map((page) => {
          return (

            <button onClick={() => { handleActivePage(page), setAllPagesHovered(false) }} key={page}>{page}</button>

          )
        })}
      </div>
    )
  }




  return (
    <div className="pagination-cont">
      <div className="all-pages"
        style={{ display: hovered || allPagesHovered ? 'block' : 'none' }}
        onMouseEnter={() => setAllPagesHovered(true)}
        onMouseLeave={() => setAllPagesHovered(false)} >
        {handleShowPages()}
      </div>

      <div className="showing">
        <p>Showing</p>
        <button onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} className='cpbtn'>{currentPage} <ShowingDownIcon /></button>
        <p>out of {totalPages}</p>
      </div>

      <div className="pg-buttons">
        <button disabled={currentPage === 1} className={currentPage > 1 ? 'prev active' : 'prev'} onClick={() => handleActivePage(currentPage - 1)}>
          <PgLeftIcon />
        </button>
        {pages.map((page, index) => {
          if (typeof page === 'string') {
            return (
              <span key={index} className="ellipsis">
                ...
              </span>
            );
          } else {
            return (
              <button
                key={index}
                className={page === currentPage ? 'active' : ''}
                onClick={() => handleActivePage(page)}
              >
                {page}
              </button>
            );
          }
        })}
        <button disabled={currentPage === totalPages} className={currentPage < totalPages ? 'prev active' : 'prev'} onClick={() => handleActivePage(currentPage + 1)}>
          <PgRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
