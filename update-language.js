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
        partnership_inquiry_title: "제휴 문의",
        partnership_inquiry_description: "저희 서비스와의 제휴를 원하시면 아래 양식을 작성해주세요.",
        form_name_label: "이름",
        form_email_label: "이메일",
        form_message_label: "문의 내용",
        form_submit_button: "문의하기",
        qna_title: "자주 묻는 질문",
        qna_question_1: "이 서비스는 어떻게 작동하나요?",
        qna_answer_1: "AI 얼굴 인식 기술을 사용하여 사용자가 업로드한 사진과 역대 대통령들의 얼굴 데이터를 비교 분석합니다. 얼굴의 주요 특징점을 추출하여 가장 높은 유사도를 보이는 인물을 찾아 결과를 알려드립니다.",
        qna_question_2: "제 사진은 안전하게 관리되나요?",
        qna_answer_2: "네, 그럼요. 사용자가 업로드한 사진은 서버에 저장되지 않으며, 분석이 끝나면 즉시 폐기됩니다. 저희는 사용자의 개인정보를 매우 중요하게 생각합니다.",
        qna_question_3: "결과는 얼마나 정확한가요?",
        qna_answer_3: "이 서비스는 오직 재미를 위해 만들어졌습니다. 결과는 과학적인 근거가 없으며, 실제 관상학적 의미를 갖지 않습니다. 가벼운 마음으로 즐겨주세요!",
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
        partnership_inquiry_title: "Partnership Inquiry",
        partnership_inquiry_description: "If you wish to partner with our service, please fill out the form below.",
        form_name_label: "Name",
        form_email_label: "Email",
        form_message_label: "Inquiry Details",
        form_submit_button: "Submit Inquiry",
        qna_title: "Frequently Asked Questions",
        qna_question_1: "How does this service work?",
        qna_answer_1: "We use AI facial recognition technology to compare your uploaded photo with the facial data of past presidents. The AI extracts key facial features to find the person with the highest similarity and presents the result.",
        qna_question_2: "Is my photo handled securely?",
        qna_answer_2: "Yes, absolutely. Your uploaded photos are not stored on our servers and are immediately discarded after analysis. We take your privacy very seriously.",
        qna_question_3: "How accurate are the results?",
        qna_answer_3: "This service is for entertainment purposes only. The results have no scientific basis and do not hold any real physiognomic meaning. Please enjoy it with a light heart!",
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
