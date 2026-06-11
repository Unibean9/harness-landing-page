# Harness Engineering là gì?

> Khoảng 1-2 năm trước ta có Prompt Engineering, vừa master xong thì thế giới AI đã chuyển sang Context Engineering, đang lọ mọ lần mò Context Engineering thì lại nghe tới: Harness Engineering...

Mọi thứ đang thay đổi rất nhanh: 1-2 năm trước chúng ta có Prompt Engineering, khi bạn vừa master xong thì thế giới AI đã chuyển sang Context Engineering, khi bạn vừa lọ mọ chưa thành thạo Context Engineering thì bây giờ đã có Harness Engineering...

![](https://substack-post-media.s3.amazonaws.com/public/images/e10ae097-4473-4734-936d-2845c45bad73_1484x1317.png)

Đừng lo lắng, như mình đã từng nói trong các bài trước, tất cả chỉ là những cái tên gọi mỹ miều `ngầu lòi` người ta đặt ra mà thôi, nếu như hiểu được bản chất là gì thì sẽ ổn thôi (thật ra mình cũng mới biết thuật ngữ này gần đây).

**Trong bài viết này, chúng ta sẽ cùng tìm hiểu về Harness Engineering** nhé - đương nhiên là… theo cách hiểu của mình! 🤣

---

1/ Harness Engineering là gì?
-----------------------------

**Harness Engineering là kỹ thuật xây dựng toàn bộ “môi trường” xung quanh một AI model** - bao gồm tools, quyền truy cập, bộ nhớ, feedback loops, guardrails, cách quản lý context, cách handoff giữa các sessions - tất cả mọi thứ **trừ** cái model.

Thuật ngữ này được Mitchell Hashimoto - ông trùm HashiCorp, cha đẻ Terraform - đặt tên vào đầu tháng 2/2026. Ổng định nghĩa rất đơn giản:

> *“Anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again.”*

Dịch nôm na: **Mỗi khi agent mắc lỗi, bạn không cầu nguyện nó làm tốt hơn lần sau - bạn xây dựng một giải pháp để nó KHÔNG BAO GIỜ mắc lỗi đó nữa.**

Nghe đơn giản hỉ?

Nhưng 90% anh em đang dùng AI vẫn chỉ tập trung vào việc viết prompt tốt hơn, chọn model xịn hơn, mà quên mất cái quan trọng nhất: **thiết kế môi trường** cho nó hoạt động tốt hơn.

![](https://substack-post-media.s3.amazonaws.com/public/images/11b49657-f4d2-467b-8df3-cbd88e026260_1419x657.png)

Hình dung thế này cho dễ - ba giai đoạn tiến hoá:

* **Prompt Engineering (2022-2024)**: “Hỏi AI thế nào cho đúng?” - tập trung vào câu hỏi
* **Context Engineering (2025)**: “Đưa thông tin gì cho AI để nó trả lời tốt?” - tập trung vào dữ liệu đầu vào
* **Harness Engineering (2026)**: “Toàn bộ hệ thống xung quanh AI vận hành ra sao?” - tập trung vào **cả cái hệ sinh thái** quanh model

**Prompt engineering** là viết email.

**Context engineering** là đính kèm đúng file vào email.

**Harness engineering** là **thiết kế cả cái văn phòng** - quy trình, con người, công cụ, kiểm soát chất lượng - để công việc thật sự được hoàn thành.

---

2/ Tại sao model AI không phải thứ quan trọng nhất?
---------------------------------------------------

Đây là điểm mấu chốt mà nhiều anh em vẫn chưa “ngấm” được.

Tui biết - nghe hơi ngược đời. Mấy ông AI labs đang chạy đua xem ai có model xịn hơn, benchmark cao hơn, context window dài hơn. Nhưng thực tế từ nghiên cứu cho thấy một điều khác hẳn:

**Cùng một model, cùng một task, cùng compute budget - chỉ thay đổi cách thiết kế “môi trường” thôi - hiệu suất tăng 64%.**

Đây không phải con số tui bịa ra. Đây là kết quả từ [paper SWE-agent của nhóm Princeton NLP](https://arxiv.org/abs/2405.15793), published tại NeurIPS 2024 - một trong những conference uy tín nhất thế giới AI.

**64% cải thiện.**

Đó là sự khác biệt giữa một công cụ hoạt động được và một công cụ vô dụng.

Và nó đến HOÀN TOÀN từ environment design, không phải từ bất kỳ cải tiến nào của model.

![](https://substack-post-media.s3.amazonaws.com/public/images/761a9fd0-c495-4b2b-ac11-1487e4036119_1090x1154.png)

Rohit Verma - một AI engineer khá nổi trên X - đã viết một [bài thread cực kỳ chi tiết](https://x.com/rohit4verse/status/2033945654377283643) về chủ đề này (hơn 1 triệu views). Ổng tóm gọn bằng một câu tui rất thích:

> “The model is what thinks. The harness is what it thinks about. Getting that distinction right is the entire game.”

Tạm dịch: Model là thứ suy nghĩ. Harness là thứ mà nó suy nghĩ VỀ. Hiểu đúng sự khác biệt này - bạn thắng.

---

3/ Bài học từ SWE-agent: +64% hiệu suất chỉ nhờ thiết kế interface
------------------------------------------------------------------

Paper SWE-agent giới thiệu một khái niệm cực hay: **Agent-Computer Interface (ACI)** - tức là interface giữa AI agent và máy tính. Giống như HCI (Human-Computer Interface) thiết kế giao diện cho con người, ACI thiết kế giao diện cho AI agent.

Và đây là insight quan trọng: **AI agent không suy nghĩ như con người**. Nó xử lý token tuần tự, nhạy cảm với thứ tự thông tin, working memory giới hạn, và rất dễ bị “nhiễu” bởi thông tin không liên quan trong context window. Thiết kế interface tốt nghĩa là hiểu được những hạn chế này và build XUNG QUANH chúng, chứ không phải CHỐNG LẠI chúng.

![](https://substack-post-media.s3.amazonaws.com/public/images/bd013103-8f4f-48d8-a711-c39988443467_1267x766.png)

Nhóm [Princeton NLP](https://arxiv.org/abs/2405.15793) đã build 4 component chính trong ACI của họ:

**a) Search có giới hạn kết quả**

Khi bạn chạy `grep` trên một codebase lớn và trả về 10,000 dòng kết quả - bạn không phải đang đưa cho agent thêm thông tin. Bạn đang **ngập lụt** working memory của nó bằng rác. Agent sẽ thash - chạy thêm grep, tạo thêm noise, dần dần fill hết context window, rồi hoặc sai hoặc kẹt.

Giải pháp? **Giới hạn kết quả tối đa 50 items.** Vượt 50 thì tool báo “kết quả quá nhiều, hãy refine query đê”. Nghe đơn giản đến mức “xúc phạm” đúng không? Nhưng đây là một trong những quyết định có đòn bẫy cao nhất trong toàn bộ paper. **Nó ép agent phải cụ thể hơn, thay vì mơ hồ và lan man.**

**b) File viewer có dòng số**

Hiển thị 100 dòng mỗi lần - con số “Goldilocks” - có tên gọi hẳn hoi.

Ít hơn (30 dòng) thì agent mất context xung quanh. Nhiều hơn thì agent quên mất đang ở đâu. Và quan trọng: **prepend dòng số** vào mỗi dòng. Nghe đơn giản, nhưng thật ra cực kỳ hữu ích - khi agent cần edit dòng 47-52, nó đọc trực tiếp số dòng thay vì phải đếm. Tiết kiệm working memory cho việc quan trọng hơn.

**c) Editor có tích hợp linter**

Sau mỗi lần edit, tool tự động chạy linter. Nếu edit tạo ra syntax error - **reject ngay lập tức** trước khi apply, kèm error message rõ ràng. Cái này ngăn failures dây chuyền - kiểu như agent tạo lỗi cú pháp, chạy test, thấy fail ở chỗ khác, dành 10 bước đuổi theo con bug “ma”, cuối cùng hết mie context mà vẫn chưa fix được.

**d) Context management**

Lịch sử cũ hơn 5 turns được nén thành summary 1 dòng. Agent vẫn biết mình đã làm gì, nhưng không bị chôn vùi trong full history của mọi command từng chạy.

---

4/ Anthropic dạy chúng ta cách build app dài hơi
------------------------------------------------

OK, SWE-agent giải quyết bài toán “làm sao thiết kế interface cho một session”. Nhưng thực tế thì sao? Đa số project phần mềm thật sự **quá lớn** để hoàn thành trong một context window.

Team engineering của Anthropic (cụ thể là Prithvi Rajasekaran từ Anthropic Labs) đã publish hai bài blog cực kỳ hay về cách họ giải quyết bài toán này. Và trong bài mới nhất (publish 24/3/2026), họ đã push ranh giới xa hơn nữa với kiến trúc 3-agent.

### Hai failure modes phổ biến

Trong thí nghiệm nội bộ, team Anthropic phát hiện hai pattern thất bại lặp đi lặp lại:

* **Pattern 1: “Làm quá nhiều một lúc”** - Agent nhận prompt “build clone của claude.ai”, liền cố implement tất cả mọi thứ cùng lúc. Feature này chưa xong đã nhảy sang feature kia, hết context window giữa chừng, session tiếp theo nhận được một đống code dở dang, không tài liệu, không biết cái gì đang ở trạng thái nào.
* **Pattern 2: “Tuyên bố chiến thắng quá sớm”** - Sau khi một số features đã được build, agent instance mới nhìn quanh, thấy có code rồi, kết luận “xong rồi!”, rồi dừng. Đây không phải ngu - đây là suy luận hợp lý từ thông tin không đầy đủ. Agent không có cách nào biết “xong” nghĩa là gì cho project này.

Ngoài ra còn có vấn đề **self-evaluation**: khi được yêu cầu đánh giá chất lượng công việc của chính mình, agent gần như luôn luôn khen ngợi - kể cả khi output rõ ràng là tệ. Đặc biệt với những task chủ quan như design, nơi không có binary pass/fail.

### Giải pháp: kiến trúc multi-agent

**Version 1 (2025)**: Hai agent - Initializer + Coding Agent

* **Initializer agent**: Session đầu tiên chuyên biệt, mục đích duy nhất là setup môi trường - tạo `init.sh`, tạo feature list (200+ features cụ thể, mỗi cái ban đầu đều `"passes": false`), tạo `claude-progress.txt`, commit git đầu tiên
* **Coding agent**: Mỗi session sau đó - làm 1 feature, test, commit, update progress file, clean state

Chi tiết đáng chú ý: feature list được lưu dưới dạng **JSON thay vì Markdown**. Lý do rất thú vị - empirically, model ít có xu hướng tự ý sửa/overwrite file JSON hơn so với Markdown. JSON có cấu trúc cứng, chống lại việc edit bừa bãi. Detail nhỏ nhưng hệ quả lớn.

![](https://substack-post-media.s3.amazonaws.com/public/images/6c6bcb69-436b-49ae-9264-257b35c7268c_1452x1223.png)

**Version 2 (3/2026 - mới nhất)**: Ba agent - Planner + Generator + Evaluator

Lấy cảm hứng từ GAN (Generative Adversarial Networks), team Anthropic thêm agent thứ 3:

* **Planner**: Nhận prompt 1-4 câu → expand thành full product spec. Được instruct phải ambitious về scope nhưng tập trung vào product context, không đi sâu vào chi tiết kỹ thuật (vì nếu planner sai chi tiết kỹ thuật → lỗi cascade xuống implementation)
* **Generator**: Build theo sprint, từng feature một. Dùng React + Vite + FastAPI + SQLite/PostgreSQL
* **Evaluator**: Dùng Playwright MCP để thật sự click vào app đang chạy, test như user thật, cho điểm theo 4 tiêu chí (design quality, originality, craft, functionality)

Kết quả? Prompt 1 câu “Create a 2D retro game maker” → solo agent chạy 20 phút, $9, game KHÔNG CHẠY ĐƯỢC. Full harness chạy 6 giờ, $200, game chạy được, có cả AI-powered features, design coherent.

Với bản rút gọn hơn dùng Opus 4.6, prompt “Build a fully featured DAW in the browser” → 4 giờ, $124.70 → ra được một chương trình DAW hoàn chỉnh có arrangement view, mixer, transport, và AI agent có thể tự compose nhạc.

Tui chấm harness engineering approach của Anthropic: **9/10**. Thiệt sự rất solid về mặt methodology.

---

5/ Vụ leak source code Claude Code - và những phát hiện kinh khủng
------------------------------------------------------------------

Ngày 31/3/2026, Anthropic vô tình ship một file source map 59.8 MB trong package `@anthropic-ai/claude-code` version 2.1.88 trên npm. Trong vòng vài giờ, khoảng 512,000 dòng TypeScript đã bị mirror khắp GitHub và hàng ngàn developer bắt đầu phân tích.

Hú hồn. Anthropic xác nhận đây là “lỗi đóng gói do sai sót con người, không phải vi phạm bảo mật.” Không có customer data hay credentials bị lộ.

Nhưng mà... cái leak này lại vô tình CHỨNG MINH luận điểm harness engineering mạnh mẽ hơn bao giờ hết. Vì cái bị leak **không phải model weights** - mà là **agentic harness** - cái lớp vỏ bọc xung quanh model. Và nhìn vào nó, anh em sẽ hiểu tại sao Claude Code tốt đến vậy.

![](https://substack-post-media.s3.amazonaws.com/public/images/d1573777-2ca9-47e9-b646-85af2e07a7f7_1479x921.png)

### Những findings đáng chú ý:

**a) 5 chiến lược quản lý context:**

MicroCompact → AutoCompact → Full Compact → Session Memory → Truncation. Đây là cách Claude Code giải quyết bài toán “context rot” - khi context window đầy dần, chất lượng suy giảm. Họ có 5 cấp độ nén khác nhau, áp dụng tuỳ tình huống.

**b) Memory 3 tầng - thiết kế cực kỳ thông minh:**

* Tầng 1: `MEMORY.md` - chỉ ~200 tokens, luôn được load. Đây là “index” trỏ đến các knowledge khác
* Tầng 2: Topic files - load on-demand khi cần
* Tầng 3: Full session transcripts - có thể search

Còn có mode `autoDream` - kiểu “ngủ để củng cố trí nhớ”. Khi user idle, một forked subagent chạy ngầm để merge observations, loại bỏ mâu thuẫn logic, và nén insights thành facts rõ ràng hơn. Giống hệt cơ chế memory consolidation trong giấc ngủ của con người - nhưng implement cho AI agent!

**c) 3 mô hình subagent:**

* **Fork**: Chia sẻ KV cache với parent (parallel gần như free!)
* **Teammate**: Giao tiếp qua mailbox
* **Worktree**: Git branch riêng biệt

**d) 40+ tools được permission-gate riêng biệt:**

Model quyết định muốn làm gì, nhưng tool system quyết định được phép làm gì. Hai thứ này tách biệt hoàn toàn về mặt kiến trúc. 23 lớp validation cho bash commands. Mỗi tool có explicit permission requirements được check trước khi thực thi.

**e) Frustration detection bằng regex:**

Claude Code phát hiện user frustrated bằng regex pattern matching - “wtf”, “so frustrating”, “this is broken” - và điều chỉnh tone phản hồi. Không cần gọi LLM. $0 regex thắng $0.01 model call khi accuracy tương đương. Đây là nguyên tắc harness engineering cốt lõi: **dùng tool rẻ nhất, nhanh nhất mà giải quyết được vấn đề.**

**f) Claude Code tạo ra $2.5 tỷ ARR:**

Và phần lớn giá trị đó đến từ harness, không phải model.

> *Phải công nhận là engineering team của Anthropic build cái harness này rất xịn. Và vụ leak này, dù là sự cố đáng tiếc, lại trở thành bài học thực tế tốt nhất về harness engineering mà ngành AI từng có.*

---

6/ ClaudeKit & GoClaw: “harness in harness” - harness²
------------------------------------------------------

OK, nói về người ta hoài, giờ nói về “nhà mình” chút 😁

![](https://substack-post-media.s3.amazonaws.com/public/images/962645fd-ef90-422b-bb7e-75e7f07245e6_1419x801.png)

### ClaudeKit - harness² cho coding

Claude Code bản thân nó đã là một harness rất tốt (Layer 7 trong taxonomy). Vậy ClaudeKit làm gì? ClaudeKit thêm **một lớp harness nữa lên trên** Claude Code - tạo thành cái tui gọi là “harness in harness” hay harness².

Nó giống kiểu: Claude Code đã mặc áo giáp rồi, ClaudeKit mặc thêm một bộ áo giáp nữa bên ngoài. Hiệu quả? Cộng dồn kinh khủng.

ClaudeKit có 5 lớp harness:

1/ **Structured workflows** - `/cook` 7 bước, `/fix` 6-8 bước. Thay vì để agent tự do bay nhảy, ép nó đi theo quy trình đã được kiểm chứng.

2/ **Persistent state** - Plan files + Native Tasks + Hydration Pattern. State sống sót qua context window boundary - chính xác bài toán mà Anthropic đã chỉ ra ở trên.

3/ **Quality gates** - DAG enforcement. Không cho agent skip bước, không cho “declare victory early.”

4/ **Multi-agent coordination** - `/scout` cho parallel research, `/team` cho Agent Teams. Sub-agents như “context firewall” - giữ cho parent thread sạch sẽ.

5/ **Progressive disclosure** - 200 tokens metadata → 3K instructions → dynamic resources. Token-efficient hơn MCP rất nhiều vì không load tất cả tools lên front.

Mapping theo taxonomy 7 tầng:

| Layer | Ai nắm? | Làm gì? |
| --- | --- | --- |
| L1 | Builder (bạn) | Approve, review, steer |
| L2 | ClaudeKit | /plan skill |
| L3 | ClaudeKit | /cook + hydration pattern |
| L4 | ClaudeKit | Native Tasks integration |
| L5 | ClaudeKit | /team + /scout parallel agents |
| L6 | ClaudeKit | Skills architecture |
| L7 | Claude Code | Context mgmt + Tools + Sessions |

---

### GoClaw - harness cho production agents

![](https://substack-post-media.s3.amazonaws.com/public/images/7b33597f-7399-4993-90f2-2f3c6ae9018d_1443x608.png)

Còn GoClaw thì sao? GoClaw là hệ thống AI agents dành cho doanh nghiệp, được rebuild bằng Go với multi-tenant isolation, 5-layer security, và native concurrency. Nó cũng có harness khá chất lượng:

* **Agent Teams** - nhiều agents cộng tác, shared task board với `blocked_by` dependencies
* **5-layer security** - security-first architecture
* **Hooks system** - 25+ lifecycle events
* **7 channels** - multi-channel communication (Telegram, Messenger, Web, API,...)
* **20+ LLM providers** - không bị lock-in vào một model nào
* **Skills/MCP** - extensible tool system
* **Context pruning** - tự động quản lý context
* **SOUL.md/AGENTS.md** - persistent instructions

Nếu Claude Code + ClaudeKit là harness² cho coding, thì GoClaw là harness cho production AI agents ở quy mô enterprise.

Hai bài toán khác nhau, nhưng cùng chung triết lý: **model là commodity, harness mới là sản phẩm**.

---

[Góc lạm bàn] Harness Engineering vs. Context Engineering - khác nhau chỗ nào?
------------------------------------------------------------------------------

Đây là câu hỏi tui nhận được nhiều nhất. Nói thật, ranh giới khá mờ, và cộng đồng cũng chưa thống nhất 100%.

Theo cách hiểu của tui:

**Context Engineering** là tập con của Harness Engineering.   
Context Engineering tập trung vào “đưa đúng thông tin, đúng thời điểm, đúng format vào context window.” Nó trả lời câu hỏi: **“Agent cần thấy gì?”**

**Harness Engineering** bao gồm context engineering, nhưng rộng hơn nhiều.

Nó còn bao gồm:

* Tool design (agent dùng tools gì, permission ra sao?)
* Feedback loops (lỗi được bắt ở đâu, phản hồi như thế nào?)
* State management (state sống sót qua sessions như thế nào?)
* Multi-agent coordination (agents phối hợp ra sao?)
* Security & permissions (ai được làm gì?)
* Verification & testing (output được kiểm chứng thế nào?)
* Architecture enforcement (kiến trúc được maintain ra sao?)

Nó trả lời câu hỏi: **“Toàn bộ hệ thống vận hành ra sao?”**

Team HumanLayer (tác giả 12-Factor Agents) nói rất hay: context engineering do Dex - cofounder của họ - đặt tên, và harness engineering là tập con của context engineering chuyên tập trung vào coding agent harness.

> *Nhưng mà tui thì lại nghĩ ngược lại - context engineering là tập con của harness engineering 😄*

Dù sao thì cái này cũng là suy đoán thôi. Quan trọng hơn hết là hiểu bản chất: **khi model đủ giỏi, bottleneck chuyển từ “model có thể làm gì” sang “hệ thống cho phép model làm gì.”** Gọi tên gì cũng được, miễn hiểu đúng bản chất.

![A Simple Guide to the Versions of the Inception Network](https://substack-post-media.s3.amazonaws.com/public/images/c7302b25-5218-47a6-8d72-85121b424098_512x265.jpeg)

Nói thêm là Stanford cũng vừa publish paper về **[Meta-Harness](https://arxiv.org/abs/2603.28052)** [(arxiv 2603.28052, tháng 4/2026)](https://arxiv.org/abs/2603.28052) - tức là dùng AI để tự optimize harness cho AI. Harness optimize harness. Harness-ception (quá mệch mỏi) 🤯

---

8/ Tạm kết
----------

Nếu bạn chỉ nhớ được một thứ từ bài viết này, hãy nhớ câu này:

**Model là thứ suy nghĩ.   
Harness là thứ mà nó suy nghĩ VỀ.   
Và harness mới là thứ quyết định kết quả cuối cùng.**

Harness engineering nói cho cùng thì nó cũng chỉ là **systems thinking** áp dụng cho AI agent environments.

Là kỹ năng thiết kế hệ thống, API design, error handling, testing strategy - những thứ mà good software engineers / solution architects đã biết.

Chỉ khác ở domain: thiết kế môi trường cho LLM agents thay vì interface cho con người.

Quan trọng là:

Nếu bạn muốn xây dựng hệ thống AI Agents cho riêng mình,   
bạn cần hiểu về Harness Engineering.

Hết rồi, dễ hiểu mà, đúng ko? 😁

