import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { BorderRadius, Color, TextSpacing } from '../../Theme';
import { PaginationProps } from './models';
import { StateContext } from '../../Store';

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.div<{ $current?: boolean }>`
    cursor: ${props => (props.$current ? 'default' : 'pointer')};
    padding: ${TextSpacing.medium};
    border-radius: ${BorderRadius.light};
    background-color: ${props => (props.$current ? Color.blue : Color.white)};
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
    const state = useContext(StateContext);
    const { query } = state;

    const onFirst = useCallback(() => {
        onSetPage(1, query);
    }, [query]);

    const onLast = useCallback(() => {
        onSetPage(pages, query);
    }, [pages, query]);

    const onPrev = useCallback(() => {
        if (page > 1) {
            onSetPage(page - 1, query);
        }
    }, [page, query]);

    const onNext = useCallback(() => {
        if (page < pages) {
            onSetPage(page + 1, query);
        }
    }, [page, query]);

    const pageRange = getPageRange(page, 5, pages);

    return (
        <PaginationWrapper>
            <PageNumber onClick={onFirst}>First</PageNumber>
            <PageNumber onClick={onPrev}>Previous</PageNumber>
            {pageRange.map(p => (
                <PageNumber $current={page == p} key={p} onClick={() => onSetPage(p, query)}>
                    {p}
                </PageNumber>
            ))}
            <PageNumber onClick={onNext}>Next</PageNumber>
            <PageNumber onClick={onLast}>Last</PageNumber>
        </PaginationWrapper>
    );
};
