import React, { useCallback } from 'react';
import { PaginationProps } from '../../models/props';
import styled from 'styled-components';
import { BorderRadius, Color, TextSpacing } from '../../Theme';

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.div<{ $current?: boolean }>`
    cursor: ${props => (props.$current ? 'default' : 'pointer')};
    padding: ${TextSpacing.medium};
    border-radius: ${BorderRadius.small};
    background-color: ${props => (props.$current ? Color.purple : Color.white)};
    color: ${props => (props.$current ? Color.white : Color.black)};
`;

const getPageRange = (n: number, count: number, max: number): number[] => {
    const pageRange = [n];

    let offset = 1;
    while (pageRange.length < count) {
        const next = n + offset;
        const prev = n - offset;

        if (next > max && prev < 1) {
            break;
        }

        if (next <= max) pageRange.push(next);
        if (prev >= 1 && prev != next) pageRange.unshift(prev);

        offset += 1;
    }

    return pageRange;
};

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

    const pageRange = getPageRange(page, 5, pages);

    return (
        <PaginationWrapper>
            <PageNumber onClick={onFirst}>First</PageNumber>
            <PageNumber onClick={onPrev}>Previous</PageNumber>
            {pageRange.map(p => (
                <PageNumber $current={page == p} key={p} onClick={() => onSetPage(p)}>
                    {p}
                </PageNumber>
            ))}
            <PageNumber onClick={onNext}>Next</PageNumber>
            <PageNumber onClick={onLast}>Last</PageNumber>
        </PaginationWrapper>
    );
};
