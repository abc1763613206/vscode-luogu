import * as axois from 'axios';
import { Problem } from '../data/Problem';

export async function getProblem(id: string, callback: (data: Problem) => void, fail?: (message: string) => void): Promise<void> {
    axois.default.get(`https://www.luogu.org/api/problem/detail/${id}`).then(res => {
        if (res.data.status === 200) {
            console.log(`得到题目：${id}`);
            callback(new Problem(res.data.data));
        } else {
            const err = '找不到题目';
            fail ? fail(err) : console.error(err);
        }
    });
}

export async function login(id: string, password: string, callback: (data: string) => void): Promise<void> {

}
