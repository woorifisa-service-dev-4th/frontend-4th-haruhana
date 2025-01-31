import { users } from '@/data/user';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { name, email, password } = req.body;

    console.log(req.body); // 콘솔 로그 추가

    if (!name || !email || !password) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: '이미 존재하는 이메일입니다.' });
    }

    users.push({ name, email, password });

    res.status(201).json({ message: '회원가입 성공' });
}