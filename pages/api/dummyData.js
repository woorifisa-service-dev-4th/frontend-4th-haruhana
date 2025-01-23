let dummyData = [
    { category: "1", time: "30", questionCount: 10 },
    { category: "2", time: "60", questionCount: 15 },
];

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(dummyData);
    } else if (req.method === "POST") {
        const newEntry = req.body;
        if (!newEntry.category || !newEntry.time || !newEntry.questionCount) {
            res.status(400).json({ message: "모든 필드를 입력해야 합니다." });
            return;
        }
        dummyData.push(newEntry); // 새로운 데이터를 dummyData 배열에 추가
        res.status(201).json({ message: "데이터가 성공적으로 저장되었습니다!", data: newEntry });
    } else {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
