// 1
function printMovieReview({ title, releaseYear, reviewers }) {
    const [firstReviewer = "리뷰어 미정"] = reviewers;

    console.log(`제목 : ${title}`);
    console.log(`개봉 : ${releaseYear}`);
    console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}

printMovieReview({
    title: "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
});

// 출력 결과 :
// 제목 : 하얼빈
// 개봉 : 2024
// 첫 번째 리뷰어 : 박정민

printMovieReview({
    title: "위키드",
    releaseYear: 2024,
    reviewers: [],
});

// 출력 결과 :
// 제목 : 위키드
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정

//2
function printAvgScore(students) {
    for (const [name, { scores }] of Object.entries(students)) {
        const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        console.log(`${name}: ${Math.round(avg)}`);
    }
}

printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
