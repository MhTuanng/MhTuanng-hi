module.exports.config = {
    name: "thayboi",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "CatalizCS",
    description: "Bói tình yêu, sự ngiệp, cuộc đời",
    commandCategory: "other",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = ["Con bốc được lá 2 ♥ Để Thầy xem...Uhmm, một quân bài rất tốt. Nó báo hiệu rằng con sẽ được người yêu hoặc một người mến mộ ủng hộ và giúp đỡ. Thế nên là an tâm con nhá, có khó khăn gì thì người ấy cũng thông cảm và giúp con mà.",

        "Con bốc được lá 2 ♦ Để Thầy xem...Hmm, quân này nó có khá nhiều ý nghĩa đấy. Có thể là điềm báo về đối tác làm ăn, cũng có khi là thay đổi trong quan hệ. Thầy nghĩ con nên nói chuyện với bạn bè và đồng nghiệp để hiểu rõ hơn chuyện gì đang xảy ra con ạ.",

        "Con bốc được lá 2 ♣ Để Thầy xem...Hmm, quân này báo hiệu trở ngại con ạ. Con sẽ có vài khó khăn trước khi thành công, và phải đề phòng có kẻ tung tin đồn xấu xa. Thầy nghĩ là con phải kín đáo hơn, làm mọi việc một cách cẩn thận và chu đáo.",

        "Con bốc được lá 2 ♠ Để Thầy xem...Chậc…. Quân này nó ứng với dối lừa, đổ vỡ quan hệ. Sắp tới con có thể sẽ phải tạm dừng một việc quan trọng, một mối quan hệ quan trọng nào đó. Điều đó có thể làm con buồn nhưng là nó cần thiết. Nếu con đang băn khoăn về một mối tình, thì quân này nó là điềm báo con sắp phải chia ly hoặc người ấy làm con thất vọng. Thầy nghĩ con nên thu xếp để được nghỉ ngơi và thư giãn một thời gian, rồi con sẽ ổn.",

        "Con bốc được lá 3 ♥ Để Thầy xem...Chà, quân này à, khó đây. Nó thường báo hiệu chuyện tình tay ba con ạ. Con sẽ thấy khó chọn lựa tình yêu đích thực của mình. Tình cảm không gượng ép được, thế nên con hãy thư giãn và để cho chuyện gì đến sẽ đến.",

        "Con bốc được lá 3 ♦ Để Thầy xem...Chà… Quân này nó liên quan đến pháp luật con ạ. Thời gian này thì con phải cẩn thận, tránh cãi vã, xung đột nhé. Nếu con cư xử khéo léo, biết trước biết sau thì Thầy nghĩ cũng sẽ không có vấn đề gì đâu..",

        "Con bốc được lá 3 ♣ Để Thầy xem...Oh, một quân bài báo hiệu tình yêu và hạnh phúc. Nếu con muốn cầu hôn ai thì đây là thời điểm thích hợp đấy. Ngoài ra, nó còn mang ý nghĩa là cơ hội thứ hai nữa. Vậy nên nếu có việc gì trước đây chưa thành, mà con muốn thử lại thì hãy tiến lên nhé.",

        "Con bốc được lá 3 ♠ Để Thầy xem...Uhmm, quân này không được tốt, nó tượng trưng cho quan hệ đổ vỡ con ạ. Thầy nghĩ là có thể có đứa định chen ngang vào mối quan hệ của con. Trong thời gian này con nên cẩn thận, tránh va chạm hay cãi cọ làm đổ vỡ tỉnh cảm.",

        "Con bốc được lá 4 ♥ Để Thầy xem...Hmmm, quân này báo hiệu thay đổi trong công tác, nhà cửa con ạ. Có thể sắp tới con sẽ có thuyên chuyển nơi công tác hoặc là chuyển nhà. Thầy nghĩ là con cứ nên dự tính trước không nó lại cập rập.. ",

        "Con bốc được lá 4 ♦ Để Thầy xem...Ấy, quân bài tốt con ạ, nó báo điềm tài chính con sắp phất đến nơi rồi. Theo Thầy tính thì con thấy ưng vụ làm ăn nào là chiến luôn con ạ. Thêm nữa là con sẽ nhận được lời khuyên tốt từ người một người đứng tuổi. Nếu con chú ý lắng nghe thì sẽ rất có lợi đấy.",

        "Con bốc được lá 4 ♣ Để Thầy xem...Đây là một quân bài cảnh báo. Theo Thầy tính thì thời gian này con phải cẩn thận không có đứa gian dối, phản bội đấy. Nếu con mà kí cọt gì cũng phải đọc lại, không chủ quan nghe chưa. Chúc con may mắn!",

        "Con bốc được lá 4 ♠ Để Thầy xem...Con à, quân này nó hay đi liền với cả muộn phiền, rắc rối. Thầy nghĩ con nên cẩn thận trong chi tiêu, với cả đề phòng mất của. Nói chung thì cũng không có gì nguy hiểm lắm, con cứ an tâm đừng lo nghĩ nhiều, mấy hôm nữa vận chuyển sao dời mọi thứ sẽ đâu vào đấy thôi.",

        "Con bốc được lá 5 ♥ Để Thầy xem...Hmmm, quân này báo con biết là có đứa đang ghen với con đấy. Cũng phải, người đáng yêu thì bao giờ chả có đứa ghen tức hả con. Thầy nghĩ là con cứ đề phòng một tí, cũng chả hại gì.",

        "Con bốc được lá 5 ♦ Để Thầy xem...À, quân bài báo hiệu thành công và hạnh phúc đấy con ạ. Theo Thầy tính thì sắp tới con sẽ có vài thay đổi theo hướng tốt. Thầy nghĩ là thời gian này rất thích hợp để có em bé hoặc là làm dự án mới.",

        "Con bốc được lá 5 ♣ Để Thầy xem...Quân này báo điềm lành con ạ. Sắp tới con sẽ có nhiều bạn mới, nhiều người giúp đõ, nhiều bằng hữu tốt bụng. Thầy tính thì con nên bỏ nhiều thời gian giao lưu bạn bè, mở rộng quan hệ và thiết chặt tình bạn cũ. Điều đó sẽ làm con vui vẻ và thoải mái.",

        "Con bốc được lá 5 ♠ Để Thầy xem...À, con này cũng khá được con ạ. Theo Thầy nghĩ thì con hơi bi quan với tình hình thôi. Chuyên đâu nó có đấy, khó khăn bây giờ chỉ là tạm thời thôi con ạ. Con cứ lạc quan mà vui sống nhé!",

        "Con bốc được lá 6 ♥ Để Thầy xem...Ái chà, quân này báo hiệu may mắn con ạ. May mắn này tiếp may mắn kia. Có người muốn chăm sóc cho con. Có người yêu mến con. Con sẽ thấy ấm áp và tràn đầy hạnh phúc. Mỗi tội là con đừng nên đánh bạc lúc này, đỏ tình thì đen bạc mà.",

        "Con bốc được lá 6 ♦ Để Thầy xem...Uhmm… quân này à, báo điềm trục trặc, cãi vã, chia ly con ạ. Thời gian này chuyện tình cảm dễ xảy ra mâu thuẫn, thế nên Thầy nghĩ là con cứ phải bình tĩnh, điềm đạm vào. Có chuyện gì xảy ra cũng đừng nổi giận mà tổn hại sức khỏe, nhan sắc nhé.",

        "Con bốc được lá 6 ♣ Để Thầy xem...Hmm, quân này nó báo rằng con sắp có thành công trong tài chính. Thầy tính thì con sắp được ai đó cho tiền, tài trợ hoặc giúp đỡ tài chính rồi. Cố gắng làm việc và học hành chăm chỉ nhé!",

        "Con bốc được lá 6 ♠ Để Thầy xem...Uhmm... Thầy nghĩ là sắp tới con có vài thay đổi nhỏ mang tính tích cực. Tuy nhiên cũng không lớn lắm con ạ. Thầy tính sắp tới mọi chuyện sẽ ổn định và an lành, con an tâm nhé!",

        "Con bốc được lá 7 ♥ Để Thầy xem...Chậc, quân này tượng trưng cho người không chung thủy, tình cảm hay thay đổi. Có thể sắp tới con sẽ thấy hơi bị *thất tình* một tí, nhớ nhung người ta nhiều một tí mà nhận lại chả được bao nhiêu... Nhưng không sao, bôi cao sẽ khỏi, Thầy nghĩ là chuyện đó qua cũng nhanh thôi con ạ. Lúc này tâm trạng người ta cũng không ổn định, nhưng rồi dần dà thì tỉnh cảm cũng sẽ chắc chắn hơn...",

        "Con bốc được lá 7 ♦ Để Thầy xem...Chậc chậc…. Quân này nó báo điềm là sắp tới con sẽ phải cãi nhau về chuyện tiền bạc hoặc công việc. Thầy nghĩ là con nên chuẩn bị trước tinh thần với cả lý lẽ một chút. Thường là chuyện này cũng sẽ êm thắm đâu ra đấy thôi con ạ, không cần lo lắng lắm đâu.",

        "Con bốc được lá 7 ♣ Để Thầy xem...Ấy, quân này báo hiệu công việc làm ăn, học hành thuận lợi con ạ. Thầy tính là chẳng mấy chốc mà con sẽ thăng chức hoặc tăng lương. Tuy nhiên con có thể có vài rắc rối nho nhỏ với người khác giới.",

        "Con bốc được lá 7 ♠ Để Thầy xem...Chà chà, để Thầy nghĩ đã... Con bảy bích này nó là điềm báo rằng con sắp có chút khó khăn. Có thể là con không nghe lời người khác khuyên nên mất đi cơ hội. Khó khăn xảy ra cũng chỉ do con chuốc lấy thôi. Thế nên Thầy nghĩ chỉ cần cẩn thận và chịu lắng nghe thì sẽ ổn con ạ.",

        "Con bốc được lá 8 ♥ Để Thầy xem...Hehe, quân này báo rằng con sắp được tặng quà hoặc được r đi chơi. Vui lên con nhá, Thầy nghĩ là con sắm sửa quần áo, chỉnh trang đầu tóc đi, sắp được đi chơi rồi mà.",

        "Con bốc được lá 8 ♦ Để Thầy xem...Uhmm… Quân này nó là điềm báo thay đổi trong công việc con ạ. Có thể là con sẽ tìm thấy một công việc mới, hoặc là tình hình công việc bây giờ sẽ khác. Nếu con đi du lịch hay công tác trong thời gian này thì rất có thể sẽ tìm thấy một người khác giới hấp dẫn. Nói chung Thầy nghĩ là con sẽ thấy một vài thay đổi nho nhỏ và dễ chịu đấy.",

        "Con bốc được lá 8 ♣ Để Thầy xem...Chà, quân này không được tốt con ạ. Con phải cẩn thận có kẻ ghen ghét trong công việc. Công việc của con có thể sẽ không được thuận lợi lắm, nhưng đừng lo lắng quá vì chỉ cần con tỉnh táo thì sẽ ổn.",

        "Con bốc được lá 8 ♠ Để Thầy xem...Chẹc, tám bích à, để Thầy nghĩ... Con này nó nghĩa là sự tham lam, không may, nguy hiểm, buồn rầu. Nếu con đang suy tính chuyện gì thì cũng nên ghi nhớ mình phải cẩn thận hơn nha. Thầy nghĩ là có gì cản trở thì cũng sẽ qua, miễn là con suy nghĩ thấu đáo và chấp nhận khó khăn.",

        "Con bốc được lá 9 ♥ Để Thầy xem...Quân bài của mơ mộng, ước mong, niềm hy vọng. Gặp quân 9 cơ là điềm báo ước mơ thành hiện thực con ạ. Thầy tính rồi, con chỉ cần cố gắng hết sức rồi chuyện gì cũng sẽ đạt được. Ước mong đau đáu trong lòng, Chỉ cần tiến tới thì không sợ gì.",

        "Con bốc được lá 9 ♦ Để Thầy xem...Để Thầy xem… Quân này nó mang điềm báo là con sắp có thương vụ mới, có thể sẽ phải đi công tác xa nhà. Thời gian này chắc con sẽ khá bận rộn, luôn chân luôn tay và có thể phải chuyển nơi ở một thời gian.",

        "Con bốc được lá 9 ♣ Để Thầy xem...Uhmm, quân này mang điềm báo thành công. Nếu mà con chưa kết hôn thì Thầy nghĩ rất có thể là con sắp cưới con nhà đại gia con ạ, không thì người yêu con cũng sắp trúng số lớn đấy. Ngoài ra thì nó cũng báo rằng con sắp gặp của trời cho, tiền bạc từ đâu rơi xuống.",

        "Con bốc được lá 9 ♠ Để Thầy xem...Uhmm, chín bích không phải là quân bài tốt lành cho lắm con ạ. Thời điểm này có thể nói là vận hạn của con đang đến, thế nên Thầy khuyên con nên giữ gìn sức khỏe, cẩn thận đường xá, không tiêu nhiều tiền. Rồi mấy hôm nữa điềm dữ nó bơn bớt đi thì con sẽ lại vô tư thôi con ạ. Thầy chúc con may mắn nhiều hơn.",

        "Con bốc được lá 10 ♥ Để Thầy xem...Ấy, quân bài này tượng trưng cho may mắn và thành công con ạ. Gặp quân 10 cơ thì đích thị là hoạn nạn sẽ vượt qua, phong ba là con muỗi. Nếu vừa gặp khó khăn việc gì thì con cứ yên tâm là sẽ ổn. Làm ăn, học hành, công danh sự nghiệp sẽ tấn tới. Mười cơ là dấu điềm lành, Khó khăn đến mấy cũng giành vẻ vang. Dẫu cho cơ sự tan tành, Vượt lên phút chốc trở thành đại gia.",

        "Con bốc được lá 10 ♦ Để Thầy xem...À, quân bài tốt đây. Chất rô vốn tượng trưng cho tiền tài danh vọng, điểm mười thường báo tin tốt đẹp. Gặp quân này thì Thầy nghĩ là con sắp có thay đổi chuyện tiền bạc, thường là tốt con ạ. Theo Thầy tính thì túi tiền rủng rỉnh đến nơi rồi. Nhớ chăm chỉ làm ăn và tính toán chi tiêu một chút nhé, cơ hội đang đến đấy.",

        "Con bốc được lá 10 ♣ Để Thầy xem...Quân bài tốt con ạ. Báo hiệu làm ăn may mắn thành đạt. Nếu con đi du lịch hay làm ăn xa nhà bây giờ thì rất có thể sẽ gặp được bạn mới, nếu chưa có người yêu thì có khi tìm được người yêu đấy.",

        "Con bốc được lá 10 ♠ Để Thầy xem...Chẹp, con mười bích này không được tốt lắm con ạ. Con có điều ưu tư, có thể sẽ nhận được tin không tốt lắm. Thầy nghĩ là thời gian này con nên nghỉ ngơi, thư giãn, đừng quá lo lắng rồi sẽ ổn thôi con ạ.",

        "Con bốc được lá A ♥ Để Thầy xem...Quân này nó báo điềm lành về tình yêu đó con. Vốn dĩ nó là tượng trưng cho gia đình mới cả thư tình. Bắt được quân này thì kiểu gì thì rắc rối muộn phiền cũng đều tan biến, tin vui tới tấp đưa về con ạ. Nếu mà chưa có ai yêu, gặp ngay người ấy buổi chiều hôm sau. Nếu mà tình ái u sầu, việc may sẽ đến rơi đầu con ngay.",

        "Con bốc được lá A ♦ Để Thầy xem...À, quân này thường báo tin tốt con ạ. Nó tượng trung cho sự thay đổi, một thông điệp tốt, thường là về tiền bạc. Thầy tính thì có thể con sắp được tăng lương đấy. Cứ cố gắng học hành làm việc chăm chỉ nhé, rồi con sẽ nhận được tin vui sớm thôi.",

        "Con bốc được lá A ♣ Để Thầy xem...Ái chà, con này hên lắm con ạ. Bốc được quân này Thầy nghĩ con nên đánh xổ số đi. Nó báo hiệu giàu sang, quyền quý, của cải kiếm được bất ngờ. Nhưng mà cùng phải nhớ, cái gì đến nhanh thì có thể đi cũng nhanh lắm, con phải biết tiêu pha cẩn thận đấy.",

        "Con bốc được lá A ♠ Để Thầy xem...Chậc, quân này xui lắm con ạ. Thời gian này, con phải đề phòng vấn đề sức khỏe của bản thân, gia đình và người thân. Chuyện làm ăn, học hành cũng nên cẩn trọng. Nói chung không nên đi đâu xa. Cần phải chú ý mọi lúc mọi nơi từ khi đi đường đến khi lên giường con ạ.",

        "Con bốc được lá J ♥ Để Thầy xem...Quân bài mang hình người bạn tốt, đôi khi ám chỉ một người mến mộ trẻ tuổi. Gặp quân bài này, Thầy nghĩ con sắp gặp được một người có tính cách rất hay ho, vui tính và thân thiện. Người này có vẻ mến mộ con. Nếu con là nữ giới đang muốn có người yêu, rất có thể đây là cơ hội tốt. Nếu là nam giới, con sắp gặp một người bạn chơi được. Người ái mộ trẻ tuổi, Mang bông hồng và cả trái tim, Gặp con một ngày không đợi, Là tri kỉ và có thể tình yêu.",

        "Con bốc được lá J ♦ Để Thầy xem...Để Thầy coi… J Rô à, một chàng trai trẻ chỉnh tề nhưng cũng có thể là một con người đố kỵ không đáng tin tưởng. Thầy tính thì con sắp có người báo tin không được tốt lành, nhưng mà cũng không có gì quan trọng to tát lắm. Con nên tỉnh táo khi nghe lời người khác vào thời gian này nhé.",

        "Con bốc được lá J ♣ Để Thầy xem...J nhép, một người bạn ngang tuổi tính tình sốc nổi nhưng vui vẻ và tốt bụng. Thầy tính là con sắp có dịp đi chơi vui vẻ rồi, nếu chưa có người yêu thì đây cũng là cơ hội tốt đấy.",

        "Con bốc được lá J ♠ Để Thầy xem...Quân bài mang hình tượng của một kẻ thù địch và hay ghen tị. Thầy nghĩ là thời gian này con nên cảnh giác hơn trong chuyện tiền nong cũng như tình cảm, đề phòng những kẻ tiểu nhân ghen ghét, thù địch.",

        "Con bốc được lá K ♥ Để Thầy xem...A, quân này nó mang hình ông già tốt bụng, nghĩa hiệp, thông thái, hiểu biết. Gặp quân bài này báo điềm lành rằng con có quý nhân phù trợ, giúp đỡ con ngay cả khi con chưa cần nhờ vả gì. Chờ tin tốt nha con! Ông già mang đến tin vui, khó khăn giúp đỡ vận xui sẻ cùng. Dẫu khó khăn đến muôn trùng, có ông già béo đỡ cùng với con.",

        "Con bốc được lá K ♦ Để Thầy xem...Uhmm, Thầy xem nào…. Quân này nó mang hình một người đàn ông thống trị quyền lực của Đất, một người đầy quyền lực, địa vị và ảnh hưởng. Bốc được quân bài này, con sẽ sớm có tin tốt lành, thường là được thăng chức con ạ. Thời gian này con nên đối tốt với các sếp trên cũng như đồng nghiệp, sẽ dễ có cơ hội lắm đấy.",

        "Con bốc được lá K ♣ Để Thầy xem...Oh, quân này mang hình một ông già tốt bụng, hào sảng, nhiệt tình. Con sẽ gặp được giúp đỡ từ cấp trên, Thầy cô, bố mẹ hay họ hàng chú bác đấy. Thầy nghĩ có thể là con sắp được việc làm mới có lương cao hơn, thăng chức hay người khác cho tiền.",

        "Con bốc được lá K ♠ Để Thầy xem...Uhm, Thầy xem nào.... Quân bài này tượng trưng cho người giàu tham vọng và có thể ích kỷ. Nó là điềm báo cho con biết phải đề phòng kẻ tiểu nhân tránh sự ghen ghét, bon chen. Con nên nhường nhịn chuyện nhỏ, nhưng đừng để ai động đến quyền lợi của mình.",

        "Con bốc được lá Q ♥ Để Thầy xem...Quân này nó mang hình người đàn bà hiền lành, tốt bụng đó con ạ. Thầy nghĩ là con sắp nhận được những lời khuyên tốt từ một người phụ nữ ấm áp và tình cảm. Đôi lúc thì con bài này ám chỉ hình mẫu của người mẹ, người chị hoặc người bạn tâm giao nữ giới. Gặp người phụ nữ tốt tâm, lắng nghe lời nói sẽ làm con vui. Nếu mà đang gặp chuyện xui, có người phụ nữ biến xui hóa lành. P/s: Nghe Thầy nói này, nếu mà con đang muốn cưa ai ý, thì phải cưa mẹ, chị gái, em gái hay bạn gái thân của người ta trước nghe không, sẽ lợi đủ đường đấy con ạ.",

        "Con bốc được lá Q ♦ Để Thầy xem...À, quân này nó mang hình một người phụ nữ thống trị quyền lực của Đất, mang ý nghĩa là có chuyện đang xảy ra con ạ. Tin đồn thì hay thất thiệt, nhưng mà cũng phải nói rằng có lửa thì mới có khói. Thầy nghĩ là con nên trò chuyện nhiều hơn với bạn bè, đồng nghiệp mà biết người ta đang bàn tán cái gì, sẽ có lợi cho con.",

        "Con bốc được lá Q ♣ Để Thầy xem...Oh, quân này mang hình một phụ nữ tốt bụng, nhiệt tình và cởi mở. Con sẽ gặp được giúp đỡ từ một người phụ nữ đấy. Thầy nghĩ có thể là con sẽ nhận được một lời khuyên bổ ích từ người ấy, nhớ lắng nghe con nhé.",

        "Con bốc được lá Q ♠ Để Thầy xem...Quân bài tượng trưng cho một góa phụ áo đen. Một quân bài nguy hiểm. Con phải tránh bẫy tình và đề phòng những kẻ chen ngang. Trong chuyện tình cảm, cần phải mềm mỏng nhưng tỉnh táo. Trong công việc, con phải sáng suốt không quyết định theo tình cảm riêng.",

        "Con bốc được lá JOKER Để Thầy xem...Phăng teo. Quân bài của số mệnh. Nó không phải là một điềm gở cũng như điềm lành con ạ. Ý nghĩa của nó là chuyện gì đến sẽ đến, nếu con mong chờ một điều gì đó thì cũng không phải sổt ruột. Thầy nghĩ là con hãy để mọi thứ tự nhiên, đừng gượng ép."
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}