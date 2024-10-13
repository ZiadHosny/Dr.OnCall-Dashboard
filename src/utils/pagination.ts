type Props = {
    totalPages: number,
    currentPage: number,
}

export const generatePagination = ({ currentPage, totalPages }: Props): Array<number | string> => {
    const pagination: Array<number | string> = [];


    if (totalPages <= 5) {
        // Show all pages if there are 5 or fewer
        for (let i = 1; i <= totalPages; i++) {
            pagination.push(i);
        }
    } else {
        // Always show the first page
        if (currentPage !== 1) {
            pagination.push(1);
        }

        // Show dots if necessary (when current page is beyond page 3)
        if (currentPage > 3) {
            pagination.push('...');
        }

        // Show the page before the current page if it's greater than 2
        if (currentPage > 2) {
            pagination.push(currentPage - 1);
        }

        // Show the current page
        pagination.push(currentPage);

        // Show the page after the current page if it's less than the last page
        if (currentPage < totalPages - 1) {
            pagination.push(currentPage + 1);
        }

        // Show dots if necessary (when current page is before the last 2 pages)
        if (currentPage < totalPages - 2) {
            pagination.push('...');
        }

        // Always show the last page
        if (currentPage !== totalPages) {
            pagination.push(totalPages);
        }
    }

    return pagination;
}
