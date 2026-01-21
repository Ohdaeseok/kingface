// Add JS here

const presidents = [
    {
        name_ko: "에이브러햄 링컨",
        name_en: "Abraham Lincoln",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_November_1863.jpg",
        description_ko: "인내심이 강하고 포용력이 넓은 리더형입니다. 수염을 기르면 운수대통할 관상이로군요.",
        description_en: "A leader type with strong patience and broad tolerance. Growing a beard would bring great fortune."
    },
    {
        name_ko: "조지 워싱턴",
        name_en: "George Washington",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/George-Washington.jpg",
        description_ko: "강직하고 원칙을 중시하는 지도자입니다. 항상 옳은 길을 추구하는군요.",
        description_en: "An upright leader who values principles. Always seeking the right path."
    },
    {
        name_ko: "시어도어 루스벨트",
        name_en: "Theodore Roosevelt",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Theodore_Roosevelt%2C_1904.jpg",
        description_ko: "활기차고 진취적인 개혁가입니다. 끊임없이 새로운 도전을 찾아 나서는군요.",
        description_en: "An energetic and progressive reformer. Constantly seeking new challenges."
    },
    {
        name_ko: "도널드 트럼프",
        name_en: "Donald Trump",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Donald_Trump_official_portrait_%28cropped%29.jpg",
        description_ko: "강력한 추진력과 사업가적 기질을 가졌습니다. 목표를 향해 거침없이 나아가는군요.",
        description_en: "Possesses strong drive and entrepreneurial spirit. Moves boldly towards goals."
    },
    {
        name_ko: "조 바이든",
        name_en: "Joe Biden",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
        description_ko: "온화하고 안정감을 주는 리더입니다. 경험에서 우러나오는 지혜가 돋보입니다.",
        description_en: "A gentle and reassuring leader. Wisdom born of experience stands out."
    }
];

function getRandomPresident() {
    const randomIndex = Math.floor(Math.random() * presidents.length);
    return presidents[randomIndex];
}

// DOM 요소 가져오기
const uploadSection = document.getElementById('upload-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');
const userImgPreview = document.getElementById('user-image-preview');

// 이미지 업로드 처리 함수
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // 1. 사용자 이미지 미리보기 설정
    const reader = new FileReader();
    reader.onload = function(e) {
        userImgPreview.src = e.target.result;
    }
    reader.readAsDataURL(file);

    // 2. 화면 전환 (업로드 -> 로딩)
    uploadSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    loadingSection.classList.add('flex');

    // 3. (가짜) AI 분석 시뮬레이션 - 2.5초 뒤 결과 표시
    setTimeout(() => {
        loadingSection.classList.add('hidden');
        loadingSection.classList.remove('flex');
        
        resultSection.classList.remove('hidden');
        resultSection.classList.add('flex');
        
        const randomPresident = getRandomPresident();
        const similarityScore = Math.floor(Math.random() * 50) + 50; // 50% to 99%
        
        document.getElementById('result-name').innerText = randomPresident.name_ko;
        document.getElementById('president-image').src = randomPresident.image;
        document.getElementById('result-label').innerText = randomPresident.name_ko;
        document.getElementById('similarity-score').innerText = similarityScore;
        document.getElementById('result-description').innerText = randomPresident.description_ko;
    }, 2500); 
}

// 다시 하기 버튼 기능
function reset() {
    resultSection.classList.add('hidden');
    resultSection.classList.remove('flex');
    
    uploadSection.classList.remove('hidden');
    
    // 파일 인풋 초기화
    document.getElementById('file-input').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ko');
});
