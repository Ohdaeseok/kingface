const translations = {
    ko: {
        title: "내가 왕이 될 상인가?",
        subtitle: "인공지능이 분석하는 나의 대통령 관상",
        upload_instruction: "사진을 올려주시오",
        upload_disclaimer: "사진은 어디에도 저장되지 않습니다",
        upload_button: "사진 업로드 / 촬영",
        loading_title: "관상을 살피는 중...",
        loading_subtitle: "AI가 눈, 코, 입을 분석하고 있습니다.",
        result_title: '자네는... <span id="result-name" class="text-yellow-600">링컨</span> 상이구만!',
        my_photo: "나",
        president_name_label: "에이브러햄 링컨",
        similarity_score_label: '싱크로율 <span id="similarity-score">87</span>%',
        result_description: '"인내심이 강하고 포용력이 넓은 리더형입니다. 수염을 기르면 운수대통할 관상이로군요."',
        share_button: "카카오톡 공유",
        retry_button: "다시 하기",
    },
    en: {
        title: "Do I have the face of a king?",
        subtitle: "My presidential face reading by AI",
        upload_instruction: "Please upload a photo",
        upload_disclaimer: "Photos are not saved anywhere",
        upload_button: "Upload / Take a photo",
        loading_title: "Analyzing face...",
        loading_subtitle: "AI is analyzing eyes, nose, and mouth.",
        result_title: 'You have the face of... <span id="result-name" class="text-yellow-600">Lincoln</span>!',
        my_photo: "Me",
        president_name_label: "Abraham Lincoln",
        similarity_score_label: 'Similarity <span id="similarity-score">87</span>%',
        result_description: '"You are a patient and inclusive leader. Growing a beard will bring you great fortune."',
        share_button: "Share on KakaoTalk",
        retry_button: "Retry",
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}
