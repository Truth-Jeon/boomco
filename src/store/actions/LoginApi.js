import api from 'lib/api';

// 메인 슬라이드 이미지
export const getAddressList = (item) => {
    return api.post('/company/main_slider_images', item);
}
