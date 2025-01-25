let dummyData = [
    { category: "1", time: "7", questionCount: 1 },
    { category: "2", time: "8", questionCount: 5 },
];

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(dummyData);
    } else if (req.method === "POST") {
        const newEntry = req.body;

        // 필수 필드 유효성 검사
        if (!newEntry.categories || !newEntry.time || !newEntry.questionCount) {
            res.status(400).json({ message: "모든 필드를 입력해야 합니다." });
            return;
        }

        // 새로운 데이터를 dummyData 배열에 추가
        dummyData.push(newEntry);
        res.status(201).json({ message: "데이터가 성공적으로 저장되었습니다!", data: newEntry });
    } else {
        // 허용되지 않은 메소드 처리
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
