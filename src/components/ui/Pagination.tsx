import React, { useCallback } from 'react';
import { PaginationProps } from '../../models/props';
import styled from 'styled-components';
import { BorderRadius, Color, TextSpacing } from '../../Theme';

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.div<{ $current?: boolean; }>`
  cursor: ${props => props.$current ? 'default' : 'pointer'};;
  padding: ${TextSpacing.medium};
  border-radius: ${BorderRadius.small};
  background-color: ${props => props.$current ? Color.purple : Color.white};
  color: ${props => props.$current ? Color.white : Color.black};
`;

export const Pagination: React.FC<PaginationProps> = ({ pages, page, onSetPage }) => {

  const onFirst = useCallback(() => {
    onSetPage(1);
  }, []);

  const onLast = useCallback(() => {
    onSetPage(pages);
  }, [pages]);

  const onPrev = useCallback(() => {
    if (page > 1) {
      onSetPage(page - 1);
    }
  }, [page]);

  const onNext = useCallback(() => {
    if (page < pages) {
      onSetPage(page + 1);
    }
  }, [page]);

  return (
    <PaginationWrapper>
      <PageNumber onClick={onFirst}>First</PageNumber>
      <PageNumber onClick={onPrev}>Previous</PageNumber>
      {Array.from({ length: pages }, (_, i) => (
        <PageNumber $current={page == i + 1} key={i} onClick={() => onSetPage(i + 1)}>
          {i + 1}
        </PageNumber>
      ))}
      <PageNumber onClick={onNext}>Next</PageNumber>
      <PageNumber onClick={onLast}>Last</PageNumber>
    </PaginationWrapper>
  );
}
