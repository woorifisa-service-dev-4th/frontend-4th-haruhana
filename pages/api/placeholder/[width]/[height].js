export default function handler(req, res) {
    const { width, height } = req.query;

    // 예시: 단순히 JSON 응답을 반환
    res.status(200).json({ message: `Placeholder image with width ${width} and height ${height}` });

    // 실제 이미지 생성 로직을 추가할 수 있습니다.
    // 예를 들어, Canvas를 사용하여 동적으로 이미지를 생성할 수 있습니다.
}