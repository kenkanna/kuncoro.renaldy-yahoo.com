import http from "../../../../src/http-common";

class ViewDeskReviewService {

    getViewDeskReview(jenis,bagian) {
        return http.get("/deskreview");
    }

}