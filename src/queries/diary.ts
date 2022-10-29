import { gql } from '@apollo/client';

export const FETCH_DIARY_LIST = gql`
query FetchBoards($page: Int!) {
    fetchBoards(page: $page) {
        number
        title
        createdAt
    }
}`;

export const FETCH_DIARY = gql`
query FetchBoards(number: Int!) {
    fetchBoard(number: $page) {
        number
        title
        contents
        createdAt
    }
}`;