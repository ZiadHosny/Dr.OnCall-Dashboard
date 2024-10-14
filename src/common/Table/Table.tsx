import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import Button from '../Button'
import Buttons from '../Buttons'
import { PaginationInfo } from '../../interfaces'
import { generatePagination } from '../../utils/pagination'

type Props = {
  tableHeads: string[]
  tableBody: ReactNode
  page: number
  setPage: Dispatch<SetStateAction<number>>
  paginationInfo: PaginationInfo
}

const ZTable = ({ tableHeads, tableBody, page, setPage, paginationInfo }: Props) => {
  const pagesList = generatePagination({
    currentPage: paginationInfo?.page,
    totalPages: paginationInfo?.totalPages,
  })

  useEffect(() => {
    if (page > paginationInfo?.totalPages) {
      setPage(paginationInfo?.totalPages ?? page)
    }
  }, [paginationInfo, page, setPage])

  const handleNextPage = () => {
    setPage((prevPage) =>
      prevPage < paginationInfo.totalPages ? prevPage + 1 : paginationInfo.totalPages
    )
  }

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1))
  }

  return (
    <>
      <div className="overflow-auto max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {tableHeads?.map((tableHead) => <th key={tableHead}>{tableHead}</th>)}
              <th />
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>

      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <Buttons>
            <Button
              icon={mdiArrowLeft}
              color={'contrast'}
              small
              onClick={handlePreviousPage}
            ></Button>
            {pagesList.map((page, i) => (
              <Button
                key={`${page}-${i}`}
                active={page === paginationInfo?.page}
                label={page?.toString()}
                color={page === paginationInfo?.page ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => {
                  if (typeof page === 'number') {
                    setPage(page)
                  }
                }}
              />
            ))}
            <Button icon={mdiArrowRight} color={'contrast'} small onClick={handleNextPage}></Button>
          </Buttons>
          <small className="mt-6 md:mt-0">
            Page {paginationInfo?.page} of {paginationInfo?.totalPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default ZTable
