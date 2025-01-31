import { users } from '@/data/user';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
    }

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ message: '이메일 또는 비밀번호가 일치하지 않습니다.' });
    }

    res.status(200).json({ message: '로그인 성공', user });
}