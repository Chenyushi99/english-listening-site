const rawExpressions = `
What's going on?	发生什么事了？	Stranger Things	A2	突然进入状况时常用，注意 going 的弱读。
I have no idea.	我完全不知道。	Wednesday	A2	比 I don't know 更强调毫无头绪。
Are you kidding me?	你是在开玩笑吗？	Barbie	A2	可表示惊讶、无语或不敢相信。
I'll be right back.	我马上回来。	The Last of Us	A2	离开片刻前的自然说法。
No worries.	没关系，别担心。	Ted Lasso	A2	回应感谢或道歉时语气友好。
Take your time.	别着急，慢慢来。	Abbott Elementary	A2	安慰别人不用赶时间。
I'm on it.	我来处理。	The Bear	B1	团队协作场景很高频，on it 会连读。
That makes sense.	有道理，我明白了。	Only Murders in the Building	B1	用于表示理解对方解释。
What do you mean?	你是什么意思？	Dune: Part Two	B1	do you 常弱读成近似 d'you。
Let's figure it out.	我们一起想办法搞清楚。	Spider-Man: Across the Spider-Verse	B1	figure it out 是高频短语动词组合。
You got this.	你可以的。	Top Gun: Maverick	B1	鼓励别人时非常自然。
I need a minute.	我需要缓一下。	Everything Everywhere All at Once	B1	情绪或信息量太大时使用。
It's not that simple.	事情没那么简单。	Oppenheimer	B1	that 在这里表示“那么”。
That's not the point.	重点不是这个。	Succession	B1	讨论偏题时用于拉回重点。
I messed up.	我搞砸了。	The Bear	B1	承认错误，比 made a mistake 更口语。
It depends.	看情况。	Past Lives	B1	回答复杂问题时的万能开头。
Let's get out of here.	我们离开这里吧。	Mission: Impossible - Dead Reckoning	B1	get out of 连读明显。
We're running out of time.	我们快没时间了。	Dune: Part Two	B2	running out of 是听力高频难点。
Don't overthink it.	别想太多。	Inside Out 2	B2	overthink 常用于劝别人别过度分析。
Long story short.	长话短说。	Glass Onion	B2	准备总结复杂事情前使用。
I owe you one.	我欠你个人情。	The Fall Guy	B2	感谢别人帮忙后的常见表达。
We're good.	没事了；我们没问题。	Beef	B2	语气不同，含义可能是关系缓和或事情解决。
Keep an eye on it.	盯着点，留意一下。	Severance	B2	工作中让别人持续关注某事。
I can't deal with this right now.	我现在处理不了这个。	The Bear	B2	压力大时的真实口语。
Don't take it personally.	别往心里去。	Ted Lasso	B2	personally 的弱读音节容易漏听。
That's beside the point.	那不是重点。	Succession	B2	比 that's not the point 更正式一点。
Let's not jump to conclusions.	我们先别急着下结论。	Only Murders in the Building	B2	jump to conclusions 是完整句块。
You're missing the point.	你没抓住重点。	Succession	B2	missing the 会连读。
I didn't see that coming.	我没想到会这样。	Knives Out	B2	剧情反转、突发消息后常用。
That came out wrong.	我刚才表达错了。	Ted Lasso	B2	用于修正自己说话造成的误会。
I'm not following.	我没听懂；我跟不上。	Oppenheimer	B2	用于复杂解释中请求澄清。
Let's take a step back.	我们退一步看。	The Morning Show	B2	会议、争论里常用于重新梳理。
We need to talk this through.	我们得把这事谈清楚。	Past Lives	B2	talk through 表示仔细讨论。
It's getting out of hand.	局面快失控了。	The Last of Us	B2	out of hand 是习语。
I wouldn't put it that way.	我不会这么说。	Succession	B2	委婉不同意对方表述。
That's a bit of a stretch.	这有点牵强。	Glass Onion	B2	stretch 表示不太站得住脚的说法。
I'm trying to wrap my head around it.	我正在努力理解这件事。	Oppenheimer	C1	wrap my head around 是高阶听力句块。
That doesn't add up.	这说不通。	Only Murders in the Building	B2	调查、推理、争论场景很常见。
Let's not make this about me.	别把这事扯到我身上。	Beef	B2	make this about 常出现在争吵中。
You're overreacting.	你反应过度了。	Beef	B2	情绪冲突场景常见。
I'm not in the mood.	我现在没心情。	Wednesday	B1	in the mood 常连读。
Can we just drop it?	我们能别说这个了吗？	The Bear	B2	drop it 表示停止谈论。
I need you to be honest with me.	我需要你跟我说实话。	The Last of Us	B2	need you to 常弱读。
That was uncalled for.	那话太过分了。	Succession	C1	uncalled for 表示不合适、没必要。
Let's call it a day.	今天就到这吧。	Abbott Elementary	B2	工作结束时常用。
I'm not buying it.	我不信这一套。	Glass Onion	B2	buy it 在这里不是“买”。
You don't get to decide that.	这不是你能决定的。	Dune: Part Two	B2	get to 表示有资格或权利。
I can live with that.	我可以接受。	Ted Lasso	B2	表示勉强但可接受。
That's not how this works.	事情不是这么运作的。	Succession	B2	纠正别人误解规则时常用。
You're making it worse.	你让事情更糟了。	The Bear	B1	making it worse 连读明显。
I should have seen it coming.	我早该料到的。	Only Murders in the Building	B2	should have 常弱读成 should've。
Let's keep this between us.	这事别告诉别人。	The Morning Show	B2	私下保密场景常用。
I don't want to get into it.	我不想细说这个。	Past Lives	B2	get into it 表示展开谈论。
There's more to it than that.	事情不止这么简单。	Oppenheimer	C1	than that 常弱读，整体要按句块听。
You're taking this too far.	你这有点过了。	Beef	B2	take too far 表示做得过头。
I didn't mean it like that.	我不是那个意思。	Ted Lasso	B2	解释误会时非常高频。
We're not out of the woods yet.	我们还没脱离危险。	The Last of Us	C1	out of the woods 是习语。
Let's cut to the chase.	我们直入正题吧。	The Fall Guy	C1	商务和影视对白都常见。
I don't want to make a scene.	我不想闹得难看。	Barbie	B2	make a scene 是固定表达。
You caught me off guard.	你让我有点措手不及。	Past Lives	C1	catch off guard 是高阶短语。
I'm just thinking out loud.	我只是把想法说出来。	Oppenheimer	B2	用于试探性表达观点。
That sounds like a you problem.	那听起来是你的问题。	Wednesday	C1	带讽刺语气，注意语用场景。
Let's not get carried away.	我们别太激动；别过头。	Top Gun: Maverick	C1	get carried away 是常见习语。
I don't have the bandwidth for this.	我现在没精力处理这个。	Severance	C1	bandwidth 在口语里指精力或处理能力。
We're going in circles.	我们一直在兜圈子。	Succession	B2	争论没有进展时常用。
I need to clear my head.	我需要理清思路。	The Bear	B2	clear my head 是自然口语。
That's easier said than done.	说起来容易做起来难。	Mission: Impossible - Dead Reckoning	C1	完整习语，需要整块识别。
I'm trying to hold it together.	我在努力撑住。	The Last of Us	C1	情绪崩溃边缘时使用。
Let's put a pin in that.	这个先搁一下。	The Morning Show	C1	会议里常用，表示稍后再谈。
I don't want to get ahead of myself.	我不想操之过急。	Oppenheimer	C1	get ahead of myself 是高阶句块。
That changes everything.	那就完全不一样了。	Dune: Part Two	B1	剧情转折和讨论中都常见。
You made your point.	你的意思我明白了。	Succession	B2	常带“别再说了”的语气。
I can't shake the feeling.	我总有种感觉挥之不去。	Only Murders in the Building	C1	shake the feeling 是较难听懂的搭配。
We're on the same page.	我们想法一致。	Ted Lasso	B2	团队沟通高频表达。
I don't want to overstep.	我不想越界。	Past Lives	C1	overstep 表示超过分寸。
That's a whole different story.	那就是另一回事了。	Glass Onion	B2	用于转换对比。
It slipped my mind.	我忘到脑后了。	Abbott Elementary	B2	比 I forgot 更地道。
Don't beat yourself up.	别太责怪自己。	Ted Lasso	C1	beat oneself up 是习语。
I need to get this off my chest.	我得把这事说出来。	The Bear	C1	表示吐露心事。
Let's not dwell on it.	别一直纠结这个。	Inside Out 2	C1	dwell on 表示反复想着不放。
I can't make any promises.	我不能保证。	Mission: Impossible - Dead Reckoning	B2	promises 结尾易弱化。
That's not what I signed up for.	这不是我当初答应要做的。	Severance	C1	sign up for 可引申为接受某种处境。
You're reading too much into it.	你想太多了。	Only Murders in the Building	C1	read into 表示过度解读。
I have a lot on my plate.	我手头事情很多。	The Bear	C1	on my plate 是工作生活高频习语。
Let's take it from the top.	我们从头再来一遍。	The Fall Guy	B2	排练、工作、复盘场景常用。
I don't know what to make of it.	我不知道该怎么看这事。	Oppenheimer	C1	make of it 是听力难点。
That doesn't sit right with me.	我觉得这事不太对劲。	Only Murders in the Building	C1	sit right with me 表示心理上不舒服。
I'm not trying to be difficult.	我不是故意刁难。	The Morning Show	C1	争论中软化语气。
Let's agree to disagree.	我们保留各自意见吧。	Ted Lasso	C1	成熟结束争论的表达。
I don't want to put you on the spot.	我不想让你当场难堪。	Abbott Elementary	C1	put someone on the spot 是习语。
That was a close call.	刚才好险。	Mission: Impossible - Dead Reckoning	B2	危险刚过去时使用。
You're not thinking straight.	你现在脑子不清醒。	Beef	B2	情绪冲突中常见。
I need to run this by someone.	我得先找人确认一下。	The Morning Show	C1	run this by someone 表示征求意见。
Let's not rule anything out.	我们先别排除任何可能。	Only Murders in the Building	C1	rule out 是重要短语动词。
I don't want to drag you into this.	我不想把你牵扯进来。	The Last of Us	C1	drag into 表示卷入麻烦。
That came out of nowhere.	那来得太突然了。	Stranger Things	B2	out of nowhere 是高频习语。
I can't keep pretending.	我不能继续假装下去了。	Beef	B2	情绪摊牌场景常见。
We're getting sidetracked.	我们跑题了。	Abbott Elementary	C1	sidetracked 表示偏离主题。
I should have handled it better.	我本该处理得更好。	The Bear	B2	反思错误时常用。
It's starting to get to me.	这开始影响到我了。	Past Lives	C1	get to me 表示心理上受影响。
Let's not make assumptions.	我们别先入为主。	Oppenheimer	C1	正式讨论里很实用。
You're not giving me much to work with.	你给的信息不够我判断。	Succession	C1	work with 在这里表示可用依据。
I can't tell if you're serious.	我分不清你是不是认真的。	Wednesday	B2	tell if 表示判断是否。
That took a turn.	事情突然变了味。	Glass Onion	C1	剧情、谈话突然转向时常用。
I'm not sure where I stand.	我不确定自己的立场。	The Morning Show	C1	where I stand 表示立场位置。
Let's see how this plays out.	看看事情会怎么发展。	Succession	C1	play out 表示展开、发展。
I don't want to jinx it.	我不想把好运说没了。	Top Gun: Maverick	C1	jinx it 是地道口语。
You have to let it go.	你得放下这事。	Frozen II	B1	let it go 是常见短语，不限歌曲语境。
That's not up to me.	这不是我能决定的。	The Bear	B2	up to me 表示由我决定。
I'm trying to keep an open mind.	我在努力保持开放态度。	Past Lives	C1	open mind 是观点讨论常用搭配。
It doesn't have to be this way.	事情不一定非得这样。	Dune: Part Two	B2	情绪劝说场景常用。
I know how this looks.	我知道这看起来像什么。	Only Murders in the Building	B2	解释误会前常用。
We're not making any progress.	我们没有任何进展。	Oppenheimer	B2	progress 结尾弱读要听清。
I can't put my finger on it.	我说不上来哪里不对。	Glass Onion	C1	put my finger on it 是高阶习语。
Let's not lose sight of the goal.	别忘了我们的目标。	Ted Lasso	C1	lose sight of 表示忽视。
I don't want to sound dramatic.	我不想听起来太夸张。	The Bear	C1	表达强烈感受前的缓冲。
You're making a big deal out of it.	你把事情看得太严重了。	Beef	C1	make a big deal out of 是长句块。
That was the last straw.	那是压垮我的最后一根稻草。	Succession	C1	last straw 是常见习语。
I'm not at liberty to say.	我不方便透露。	Oppenheimer	C1	正式、保密语境中的高阶表达。
Let's keep our options open.	我们先保留选择。	The Morning Show	C1	options open 是决策表达。
It all comes down to trust.	归根结底是信任问题。	Past Lives	C1	come down to 表示归结为。
I don't want to burn any bridges.	我不想把关系搞僵。	Succession	C1	burn bridges 是职场和关系习语。
We're cutting it close.	时间很赶；差点来不及。	Mission: Impossible - Dead Reckoning	C1	cut it close 是高阶口语。
I need to sleep on it.	我需要考虑一晚。	Ted Lasso	B2	sleep on it 表示隔天再决定。
That's a deal breaker.	那是无法接受的条件。	Barbie	C1	deal breaker 常用于关系和谈判。
I don't want to get your hopes up.	我不想让你空欢喜。	The Last of Us	C1	get hopes up 是地道表达。
Let's not split hairs.	我们别抠字眼了。	Succession	C1	split hairs 表示过度纠结细节。
I'm barely holding on.	我快撑不住了。	The Bear	C1	barely 和 holding on 都容易弱读。
That puts things in perspective.	那让我重新看待这件事。	Past Lives	C1	put in perspective 是高阶表达。
I don't want to leave anything to chance.	我不想让任何事听天由命。	Oppenheimer	C1	leave to chance 表示冒险不控制。
Let's make the most of it.	我们好好利用这个机会。	Ted Lasso	B2	make the most of 是实用句块。
It's not worth the risk.	这不值得冒险。	The Last of Us	B2	risk 前的 the 常弱读。
I can't take that at face value.	我不能只看表面就相信。	Glass Onion	C1	face value 是推理类对白常见表达。
We're on thin ice.	我们处境很危险。	Succession	C1	thin ice 是习语，比 danger 更地道。
I don't mean to pry.	我不是想打听隐私。	Only Murders in the Building	C1	pry 表示窥探、打听。
Let's not make a habit of it.	别养成这个习惯。	The Bear	C1	make a habit of 是固定搭配。
I'm trying to stay out of it.	我想置身事外。	Beef	B2	stay out of it 表示不卷入。
That explains a lot.	那就解释得通了。	Only Murders in the Building	B2	推理和日常都高频。
I don't want this hanging over me.	我不想这事一直压在心上。	Past Lives	C1	hang over me 是情绪负担表达。
Let's circle back to that.	我们稍后再回到这个。	The Morning Show	C1	会议中非常常见。
It never crossed my mind.	我从没想过这个。	Stranger Things	C1	crossed my mind 是完整句块。
I can't afford to mess this up.	我不能把这事搞砸。	The Bear	C1	afford to 在这里表示承担得起后果。
That's where I draw the line.	这是我的底线。	Succession	C1	draw the line 表示划定界限。
I don't want to leave you hanging.	我不想让你一直等着没结果。	Ted Lasso	C1	leave someone hanging 是习语。
Let's get this over with.	我们赶紧把这事做完吧。	Wednesday	B2	get over with 表示尽快结束不愉快的事。
I'm not ruling it out.	我不排除这种可能。	Only Murders in the Building	C1	rule out 的否定形式很常见。
That would defeat the purpose.	那就违背初衷了。	Oppenheimer	C1	defeat the purpose 是高阶表达。
I don't want to be caught off guard.	我不想措手不及。	Mission: Impossible - Dead Reckoning	C1	被动形式更难听懂。
Let's get one thing straight.	我们先把一件事说清楚。	Succession	C1	常用于强势澄清。
It's not as straightforward as it sounds.	这不像听起来那么简单。	Oppenheimer	C1	straightforward 音节较长，适合听写。
I can't keep up with this.	我跟不上这个节奏。	The Bear	B2	keep up with 是核心短语动词。
That sounds like a stretch.	那听起来有点牵强。	Glass Onion	B2	stretch 作名词表示牵强解释。
I'm trying to make sense of it.	我在试着弄明白。	Only Murders in the Building	C1	make sense of 是高级理解句块。
Let's not take this for granted.	我们别把这事当理所当然。	Ted Lasso	C1	take for granted 是重要习语。
Even if we manage to talk our way out of this, it doesn't mean the problem goes away.	即使我们设法靠沟通摆脱眼前局面，也不代表问题会消失。	Succession	C2	长句里有 even if 从句、talk our way out of 和主句转折。	US
What worries me is not what happened, but what everyone is pretending not to notice.	让我担心的不是发生了什么，而是大家都假装没看见什么。	The Morning Show	C2	what 引导的名词性从句连续出现，听写时容易断错。	US
If we're going to do this properly, we need to stop reacting and start thinking three steps ahead.	如果我们要把这件事做好，就不能再被动反应，而要提前想三步。	Oppenheimer	C2	going to、reacting and start thinking 连读密集。	UK
I don't think you realize how much pressure you've been putting on people who are already stretched thin.	我觉得你没意识到，你给那些本来已经很吃力的人施加了多大压力。	The Bear	C2	stretched thin 是高阶搭配，整句信息量大。	US
The fact that nobody said anything doesn't mean everybody agreed with you.	没人说话这个事实，并不代表所有人都同意你。	Succession	C2	the fact that 结构和否定转折适合长句听写。	US
I would rather deal with an uncomfortable truth than keep building decisions around a convenient lie.	我宁愿面对令人不舒服的真相，也不愿继续围绕一个方便的谎言做决定。	Oppenheimer	C2	would rather than 结构较长，truth 和 lie 形成对照。	UK
By the time we figure out who dropped the ball, it may already be too late to fix it.	等我们弄清是谁出了纰漏，可能已经太晚无法补救。	Only Murders in the Building	C2	by the time、drop the ball、too late to fix it 连续出现。	US
I'm not saying we should ignore the risk; I'm saying we should understand what risk we're actually taking.	我不是说我们该忽视风险，而是说我们该弄清自己到底在承担什么风险。	Dune: Part Two	C2	not saying...I'm saying... 是高频辩论句型。	UK
Before we make this personal, can we agree that the situation is more complicated than either of us expected?	在把这事变成人身问题前，我们能否先承认情况比你我预想的都复杂？	Beef	C2	before 从句加 can we agree that 长宾语从句。	US
You keep acting as if having doubts is the same thing as giving up.	你一直表现得好像有疑虑就等于放弃。	Ted Lasso	C2	as if 和 the same thing as 组合，语气自然但结构较难。	UK
What I'm trying to say is that loyalty shouldn't require people to stop asking reasonable questions.	我想说的是，忠诚不应该要求人们停止提出合理问题。	Succession	C2	What I'm trying to say is that 是典型长铺垫。	US
If this falls apart, it won't be because we didn't work hard enough; it'll be because we refused to listen.	如果这事失败，不会是因为我们不够努力，而是因为我们拒绝倾听。	The Bear	C2	falls apart、because 从句对照，适合练弱读。	US
I understand why you'd rather keep things vague, but vague answers are exactly what got us here.	我理解你为什么宁愿含糊其辞，但含糊回答正是让我们走到这一步的原因。	The Morning Show	C2	vague answers are exactly what... 是高阶强调结构。	US
There is a difference between being careful and being so afraid of failure that you never move.	谨慎和害怕失败到不敢行动，是两回事。	Dune: Part Two	C2	There is a difference between A and B 结构较长。	UK
I don't want an apology that sounds rehearsed; I want you to understand why it mattered.	我不想要听起来排练过的道歉，我想让你明白它为什么重要。	Past Lives	C2	rehearsed、mattered 的尾音听写有难度。	US
The longer we avoid the conversation, the harder it becomes to pretend everything is fine.	我们越回避这场谈话，就越难假装一切都没事。	Beef	C2	the longer...the harder... 比较结构。	US
It's one thing to say you trust me; it's another thing to act like it when the stakes are high.	说你信任我是一回事，利害攸关时表现得像信任我又是另一回事。	Mission: Impossible - Dead Reckoning	C2	It's one thing...it's another thing... 是高阶对比句。	UK
I'm not asking you to agree with every decision, but I need you to stop undermining them in public.	我不是要求你同意每个决定，但我需要你停止公开拆台。	Succession	C2	undermining them in public 是商务冲突高频表达。	US
If you had brought this up earlier, we might not be standing here pretending there are still good options.	如果你早点提出来，我们可能就不用站在这儿假装还有好选择。	The Bear	C2	虚拟条件句加长现在分词结构。	US
What makes this difficult is that the right thing to do and the easy thing to do are not the same.	这件事难就难在，正确的事和容易的事不是同一件事。	Oppenheimer	C2	What makes this difficult is that 是高阶主语结构。	UK
I can hear what you're saying, but I can't ignore what you're leaving out.	我听得到你说了什么，但我不能忽视你没说的部分。	Glass Onion	C2	hear what...ignore what... 两个宾语从句对照。	UK
The problem isn't that we made a mistake; the problem is that we built a story around it.	问题不在于我们犯了错，而在于我们围绕错误编了个故事。	Only Murders in the Building	C2	The problem isn't...the problem is... 很适合听写。	US
I don't think this is about who is right; I think it's about who is willing to be honest first.	我觉得这不是谁对的问题，而是谁愿意先诚实的问题。	Past Lives	C2	about who is... 两个并列结构连续出现。	US
When people say they want transparency, they usually mean they want it until it becomes inconvenient.	人们说想要透明时，通常是指在它变得不方便之前想要透明。	Succession	C2	until it becomes inconvenient 是听力难点。	US
I'm trying to separate what actually happened from what I wish had happened.	我在努力区分真正发生的事和我希望发生过的事。	Only Murders in the Building	C2	separate A from B 加虚拟语气。	US
It would be easier to walk away, but easier is not always the same as better.	转身离开会更容易，但更容易不总等于更好。	Ted Lasso	C2	easier 和 better 对照，语气自然。	UK
You can't keep asking for trust while treating every honest answer like a threat.	你不能一边要求信任，一边把每个诚实回答都当作威胁。	The Morning Show	C2	while treating... 是长句听力常见压缩。	US
The reason I'm pushing back is not because I want to win, but because the plan doesn't hold up.	我反对不是因为我想赢，而是因为这个计划站不住脚。	Succession	C2	push back 和 hold up 都是高阶短语动词。	US
If we keep lowering the bar just to make ourselves feel better, we won't recognize failure when it happens.	如果我们不断降低标准只为让自己好受点，失败发生时我们会认不出来。	Oppenheimer	C2	lowering the bar 是习语，后半句较长。	UK
I know this sounds dramatic, but pretending it doesn't matter is what made it dramatic in the first place.	我知道这听起来夸张，但假装它不重要，才是一开始让它变夸张的原因。	The Bear	C2	in the first place 常弱读，适合听写。	US
With all due respect, I don't think that's a realistic way to look at the situation.	恕我直言，我不认为那是看待这个局面的现实方式。	The Crown	C2	英式礼貌反驳句型，with all due respect 要整体听。	UK
I'm afraid we may have underestimated how quickly this could get out of hand.	恐怕我们低估了这件事会多快失控。	The Crown	C2	may have underestimated 是较难的完成结构。	UK
That might work on paper, but in practice it leaves too many people out of the conversation.	纸面上也许可行，但实际操作会把太多人排除在讨论之外。	The Morning Show	C2	on paper 和 in practice 形成对比。	US
I don't mean to be difficult, but I can't sign off on something I don't fully understand.	我不是想为难，但我不能批准一个我没有完全理解的东西。	Severance	C2	sign off on 是职场高阶短语动词。	US
If we are being honest, nobody in this room is completely comfortable with where this is heading.	说实话，这个房间里没人完全放心事情正朝哪个方向发展。	Oppenheimer	C2	where this is heading 是抽象方向表达。	UK
I appreciate the confidence, but confidence doesn't change the fact that the numbers don't add up.	我感谢你的信心，但信心改变不了数字对不上的事实。	Succession	C2	the fact that 和 add up 连续出现。	US
I'm not dismissing your concern; I'm asking whether it belongs in this decision.	我不是否定你的担忧，我是在问它是否应该纳入这个决定。	The Morning Show	C2	dismissing your concern 和 belongs in this decision 很难。	US
The moment we start confusing silence with agreement, we lose the only chance we have to fix this.	一旦我们开始把沉默误认为同意，就会失去修正这件事的唯一机会。	Succession	C2	The moment 引导时间状语，后半句信息密集。	US
I was under the impression that we had already ruled that option out.	我原以为我们已经排除了那个选项。	The Crown	C2	under the impression that 是英式正式口语常见表达。	UK
I see where you're coming from, but I don't think the conclusion follows from the evidence.	我理解你的出发点，但我不认为这个结论能从证据中推出。	Oppenheimer	C2	where you're coming from 和 follows from the evidence 都较难。	UK
We don't have to settle this tonight, but we do have to stop pretending it will settle itself.	我们不必今晚解决这件事，但必须停止假装它会自己解决。	Past Lives	C2	settle this 和 settle itself 形成重复变体。	US
I need a version of the truth that doesn't fall apart the second someone asks a follow-up question.	我需要一个不会在别人追问一句后就崩掉的真相版本。	Glass Onion	C2	the second 表示“一……就……”，句子较长。	UK
This may sound counterintuitive, but slowing down is probably the fastest way to stop making mistakes.	这听起来可能违反直觉，但放慢速度也许是停止犯错最快的方法。	The Bear	C2	counterintuitive 是高阶词，后半句结构自然。	US
If you want people to take ownership, you can't punish them every time they tell you something went wrong.	如果你想让人有主人翁意识，就不能每次他们告诉你出问题时惩罚他们。	Ted Lasso	C2	take ownership 是职场高阶表达。	UK
I'm not convinced that moving faster helps if nobody understands what we're moving toward.	如果没人明白我们正朝什么方向走，我不认为加快速度有帮助。	Severance	C2	moving faster 和 moving toward 形成听力干扰。	US
The question isn't whether we can survive the fallout; it's whether we deserve to.	问题不是我们能否挺过后果，而是我们是否配得上。	Succession	C2	fallout 表示后果，it's whether 结构压缩。	US
I'm hearing a lot of certainty and not a lot of evidence.	我听到了很多确定口吻，却没听到多少证据。	Oppenheimer	C2	certainty 和 evidence 对比，适合辩论听力。	UK
That explanation would be easier to accept if it didn't leave out the part that matters most.	如果这个解释没有漏掉最关键的部分，它会更容易让人接受。	Glass Onion	C2	would be easier if it didn't 是虚拟结构。	UK
I don't think we're disagreeing about the goal; I think we're disagreeing about what it costs.	我觉得我们分歧不在目标，而在代价。	The Morning Show	C2	disagreeing about 连续重复，注意 what it costs。	US
I understand the deadline, but rushing the review will only create a different kind of problem.	我理解截止日期，但仓促审查只会制造另一种问题。	Never Have I Ever	C1	印度英语口音训练，deadline 和 rushing 的重音要听清。	IN
With respect, I don't think we should assume the quietest person in the room has nothing to add.	恕我直言，我不认为我们该假设房间里最安静的人没有意见。	The White Tiger	C2	印度英语节奏较清晰但重音位置不同。	IN
If the numbers do not match the story, perhaps it is the story that needs to change.	如果数字和叙事对不上，也许需要改变的是叙事。	The White Tiger	C2	印度英语常把每个音节说得更完整，适合听长句。	IN
I am not objecting to the idea; I am objecting to the way it is being presented.	我不是反对这个想法，而是反对它被呈现的方式。	Never Have I Ever	C2	objecting to 连续出现，适合练印度英语语调。	IN
Before we escalate this, can we make sure we are not solving the wrong problem?	在升级处理前，我们能不能确认自己不是在解决错误的问题？	The Big Sick	C1	escalate 和 solving the wrong problem 是职场听力句块。	IN
It is not a question of whether we can afford it, but whether we can justify it.	问题不在于我们是否负担得起，而在于是否能证明它合理。	The White Tiger	C2	whether we can 连续出现，印度英语下节奏更明显。	IN
If you want my honest opinion, the proposal is polished, but it avoids the hardest question.	如果你要我说实话，这份方案很漂亮，但回避了最难的问题。	The Big Sick	C2	polished 和 avoids 的发音容易漏听。	IN
The more we try to explain it away, the more suspicious it starts to sound.	我们越试图把它解释过去，它听起来就越可疑。	Never Have I Ever	C2	the more...the more... 结构，适合口音适应。	IN
I do not mind changing direction, but I need to understand what changed first.	我不介意改变方向，但我得先明白到底发生了什么变化。	Delhi Crime	C1	印度英语里 do not 常比 don't 更清晰。	IN
There is no point in defending a decision nobody is willing to take responsibility for.	维护一个没人愿意负责的决定没有意义。	Delhi Crime	C2	no point in 和 take responsibility for 是高阶组合。	IN
I may be missing something, but that explanation leaves one very important detail unanswered.	也许我漏掉了什么，但那个解释留下了一个非常重要的细节没回答。	Tokyo Vice	C2	日式英语模拟，辅音群和句尾音需要适应。	JP
If we cannot confirm the source, we should not treat the information as reliable.	如果无法确认来源，我们就不该把这个信息当作可靠信息。	Tokyo Vice	C2	confirm the source 和 treat as reliable 是新闻调查句块。	JP
I am trying to be precise because a small misunderstanding here could change everything.	我想说得精确，因为这里一个小误解就可能改变一切。	Shogun	C2	日式英语模拟下 precise、misunderstanding 较难。	JP
The difficult part is not making the decision; it is accepting what the decision will cost.	困难的不是做决定，而是接受这个决定的代价。	Pachinko	C2	not...it is... 对比结构，适合长句听写。	JP
Please do not mistake my hesitation for a lack of commitment.	请不要把我的犹豫误解为缺乏承诺。	Shogun	C1	日式英语模拟，hesitation 和 commitment 音节多。	JP
I would rather ask one uncomfortable question now than apologize for ten avoidable mistakes later.	我宁愿现在问一个不舒服的问题，也不愿之后为十个本可避免的错误道歉。	Tokyo Vice	C2	would rather than 长结构，日式口音下更有挑战。	JP
From my point of view, the safest answer is not always the most honest one.	在我看来，最安全的回答不总是最诚实的回答。	Pachinko	C1	point of view 和 honest one 连读要注意。	JP
If we keep pretending there is no tension, the tension will end up making the decision for us.	如果我们一直假装没有紧张关系，最后紧张关系会替我们做决定。	Shogun	C2	tension 重复出现，适合练语调和重音。	JP
I cannot approve a plan that depends on everyone staying silent when something goes wrong.	我不能批准一个依赖所有人在出问题时保持沉默的计划。	Tokyo Vice	C2	depends on everyone staying silent 是长句难点。	JP
This is not about saving face; it is about making sure the same mistake does not happen twice.	这不是为了保全面子，而是为了确保同样的错误不会发生两次。	Pachinko	C2	saving face 是亚洲语境常见高阶表达。	JP
I can accept a bad outcome, but I cannot accept pretending we had no choice when we clearly did.	我可以接受糟糕结果，但不能接受明明有选择却假装别无选择。	Succession	C2	accept 重复和 when 从句让句子更接近真实辩论。
The hardest part is admitting that the version of events we defended is not the one that actually happened.	最难的是承认我们一直维护的版本并不是实际发生的版本。	Glass Onion	C2	the version of events 和 actually happened 信息密集。
If the only way the plan works is by ignoring the people affected by it, then the plan does not work.	如果这个计划只有通过忽视受影响的人才能运作，那它就不算可行。	The Morning Show	C2	If 从句很长，主句短促，适合长短节奏训练。
I am less worried about the mistake itself than about how quickly everyone tried to explain it away.	比起错误本身，我更担心大家多快就试图把它解释过去。	Oppenheimer	C2	less worried about...than about... 是高阶比较结构。
You keep asking for a simple answer to a question that was never simple to begin with.	你一直想要一个简单答案，但这个问题从一开始就不简单。	Past Lives	C2	to begin with 常弱读，整句逻辑转折明显。
The longer we wait for perfect information, the more likely we are to miss the moment to act.	我们越等待完美信息，就越可能错过行动时机。	Dune: Part Two	C2	the longer...the more likely... 是长比较结构。
I would take your concern more seriously if it did not disappear every time it became inconvenient.	如果你的担忧不是每次变得不方便时就消失，我会更认真看待它。	Succession	C2	would...if it did not... 虚拟语气较难。
What bothers me is not that you changed your mind, but that you acted as if nothing had changed.	让我不舒服的不是你改变主意，而是你表现得好像什么都没变。	Beef	C2	What bothers me is not...but... 结构。
We cannot keep calling this a misunderstanding when everybody understands exactly what happened.	当所有人都清楚发生了什么时，我们不能继续把它称作误会。	The Bear	C2	calling this a misunderstanding 和 exactly what happened 较难。
I need you to explain the part of the plan that everyone else seems too polite to question.	我需要你解释计划里其他人似乎太客气而没有质疑的部分。	The Morning Show	C2	too polite to question 是常用压缩结构。
It is possible to be technically correct and still completely miss the point.	技术上正确和完全没抓住重点可以同时存在。	Oppenheimer	C2	technically correct 与 miss the point 对照。
If we are going to rebuild trust, we have to start by being specific about what broke it.	如果要重建信任，就得先具体说明是什么破坏了信任。	Ted Lasso	C2	rebuild trust 和 what broke it 是抽象表达。
I do not want another explanation that sounds reasonable until you look at the details.	我不想再听一个乍听合理、细看就不成立的解释。	Only Murders in the Building	C2	until you look at the details 是尾部信息。
The decision may be defensible, but the way you communicated it made it much harder to defend.	这个决定也许说得过去，但你的沟通方式让它更难被辩护。	The Morning Show	C2	defensible 和 defend 词形变化干扰听写。
I am trying to understand whether we are solving the actual problem or just the most visible symptom.	我想弄清我们是在解决真正的问题，还是只是在处理最明显的症状。	Severance	C2	whether...or just... 是测试理解的长结构。
The fact that we survived the last crisis does not mean we learned the right lesson from it.	我们挺过上一次危机，并不意味着我们从中学到了正确教训。	Succession	C2	The fact that...does not mean... 结构。
I would rather slow down now than spend the next month cleaning up avoidable damage.	我宁愿现在慢下来，也不愿接下来一个月收拾本可避免的烂摊子。	The Bear	C2	cleaning up avoidable damage 是高阶搭配。
If nobody is willing to say where the plan fails, the plan is already failing.	如果没人愿意说出计划失败在哪里，那计划已经在失败了。	Oppenheimer	C2	where the plan fails 和 already failing 呼应。
This is exactly the kind of problem that looks small until someone finally measures the cost.	这正是那种看起来很小、直到有人真正计算代价才显现的问题。	The Big Short	C2	exactly the kind of problem that... 是长定语结构。
I do not need everyone to agree with me; I need someone to tell me what I am not seeing.	我不需要所有人同意我，我需要有人告诉我我没看到什么。	The Morning Show	C2	what I am not seeing 是抽象宾语从句。
There is a difference between keeping the peace and avoiding the truth.	维持表面和平和回避真相是两回事。	Past Lives	C1	keeping the peace 与 avoiding the truth 对照。
If we keep treating every objection as disloyalty, nobody will tell us when we are wrong.	如果我们继续把每个反对意见都当成不忠，就没人会告诉我们错了。	Succession	C2	treating every objection as disloyalty 很难。
I am not trying to slow the team down; I am trying to keep us from running in the wrong direction.	我不是想拖慢团队，而是想避免我们朝错误方向狂奔。	Ted Lasso	C2	not trying...I am trying... 对照结构。
The problem with your argument is that it assumes the thing we most need to prove.	你的论证问题在于，它假设了我们最需要证明的东西。	Oppenheimer	C2	The problem with your argument is that...。
I cannot tell whether you are being careful or simply avoiding a decision that needs to be made.	我分不清你是在谨慎，还是只是在回避一个必须做出的决定。	The Crown	C2	whether...or simply... 长选择结构。
When the same excuse keeps appearing in different forms, it stops sounding like an excuse and starts sounding like a pattern.	当同一个借口不断以不同形式出现，它就不再像借口，而像一种模式。	Glass Onion	C2	keeps appearing、stops sounding、starts sounding 三连动词结构。
If we do not define what success looks like, we will keep mistaking activity for progress.	如果不定义成功是什么样子，我们会继续把忙碌误认为进展。	Severance	C2	mistaking activity for progress 是职场高阶表达。
I respect the intention, but intention does not erase impact.	我尊重你的意图，但意图不能抹去影响。	The Morning Show	C1	intention 与 impact 对照，适合短高阶听写。
The question is not whether you meant well; it is whether people can trust the result.	问题不是你是否出于好意，而是大家能否信任结果。	Succession	C2	meant well 和 trust the result 搭配自然。
I am willing to revisit the decision, but not if revisiting it becomes an excuse to avoid responsibility.	我愿意重新讨论这个决定，但不能让重新讨论变成逃避责任的借口。	The Bear	C2	revisit/revisiting 重复，句子很长。
`.trim();

function inferAccent(source, explicitAccent) {
  if (explicitAccent) return explicitAccent;
  if (["The Crown", "Dune: Part Two", "Oppenheimer", "Ted Lasso", "Glass Onion"].includes(source)) return "UK";
  if (["Past Lives", "Everything Everywhere All at Once"].includes(source)) return "Mixed";
  return "US";
}

const expressions = rawExpressions.split("\n").map((line, index) => {
  const [phrase, meaning, source, level, note, accent] = line.split("\t");
  return {
    phrase,
    meaning,
    source,
    level,
    note,
    accent: inferAccent(source, accent),
    day: Math.floor(index / 5) + 1
  };
});

let filteredExpressions = [...expressions];
let itemIndex = 0;
let activeUser = "";
let completed = 0;
let attempts = 0;
let correct = 0;
let reviewItems = [];
let learnedItems = [];
let testScore = 0;
let testItem = null;

const $ = (selector) => document.querySelector(selector);
const appShell = $(".app-shell");

appShell.classList.add("locked");

const accentLabels = {
  US: "美音",
  UK: "英音",
  IN: "印度英语",
  JP: "日式英语",
  Mixed: "混合/国际"
};

const accentLangs = {
  US: "en-US",
  UK: "en-GB",
  IN: "en-IN",
  JP: "ja-JP",
  Mixed: "en-US"
};

function sanitizeUserName(name) {
  return name.trim().replace(/\s+/g, " ").slice(0, 32);
}

function getUsers() {
  return JSON.parse(localStorage.getItem("listening-room-users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("listening-room-users", JSON.stringify([...new Set(users)]));
}

function userKey(key) {
  return `listening-room:user:${activeUser}:${key}`;
}

function loadUserState(userName) {
  activeUser = userName;
  completed = Number(localStorage.getItem(userKey("completed")) || 0);
  attempts = Number(localStorage.getItem(userKey("attempts")) || 0);
  correct = Number(localStorage.getItem(userKey("correct")) || 0);
  reviewItems = JSON.parse(localStorage.getItem(userKey("review")) || "[]");
  learnedItems = JSON.parse(localStorage.getItem(userKey("learned")) || "[]");
  testScore = Number(localStorage.getItem(userKey("test-score")) || 0);
}

function saveUserStats() {
  if (!activeUser) return;
  localStorage.setItem(userKey("completed"), String(completed));
  localStorage.setItem(userKey("attempts"), String(attempts));
  localStorage.setItem(userKey("correct"), String(correct));
  localStorage.setItem(userKey("test-score"), String(testScore));
}

function renderUserOptions() {
  const users = getUsers();
  $("#user-select").innerHTML = '<option value="">选择已有用户</option>';
  users.forEach((userName) => {
    const option = document.createElement("option");
    option.value = userName;
    option.textContent = userName;
    $("#user-select").appendChild(option);
  });
}

function startSession(userName) {
  const cleanName = sanitizeUserName(userName);
  if (!cleanName) return;
  const users = getUsers();
  saveUsers([cleanName, ...users.filter((name) => name !== cleanName)]);
  localStorage.setItem("listening-room-active-user", cleanName);
  loadUserState(cleanName);
  $("#active-user-name").textContent = cleanName;
  $("#test-score").textContent = testScore;
  $("#login-screen").classList.add("hidden");
  appShell.classList.remove("locked");
  renderUserOptions();
  renderPractice();
  renderLibrary();
  renderReview();
  renderTest();
  updateStats();
}

function showLogin() {
  window.speechSynthesis?.cancel();
  appShell.classList.add("locked");
  $("#login-screen").classList.remove("hidden");
  $("#username-input").value = "";
  $("#user-select").value = "";
  $("#username-input").focus();
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pickVoice(lang) {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === lang) ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith(lang.toLowerCase().slice(0, 2))) ||
    null;
}

function speak(text, rate = 0.88, accentItem = currentItem()) {
  if (!("speechSynthesis" in window)) {
    $("#feedback").textContent = "当前浏览器不支持语音朗读，可以换 Chrome 或 Safari 试试。";
    return;
  }
  const item = accentItem;
  const lang = accentLangs[item.accent] || "en-US";
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  const voice = pickVoice(lang);
  if (voice) utterance.voice = voice;
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

function currentItem() {
  return filteredExpressions[itemIndex] || expressions[0];
}

function updateStats() {
  completed = Math.min(completed, 12);
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
  $("#completed-count").textContent = completed;
  $("#progress-fill").style.width = `${(completed / 12) * 100}%`;
  $("#accuracy-count").textContent = `${accuracy}%`;
  saveUserStats();
}

function renderPractice() {
  const item = currentItem();
  $("#item-level").textContent = item.level;
  $("#item-source").textContent = `Day ${item.day} · ${accentLabels[item.accent]} · 参考：${item.source}`;
  $("#item-meaning").textContent = item.meaning;
  $("#item-phrase").textContent = item.phrase;
  $("#item-note").textContent = item.note;
  $("#dictation-input").value = "";
  $("#feedback").textContent = "先播放声音，再把听到的英文拼出来。";
  $("#meaning-box").hidden = true;
  $("#answer-box").hidden = true;
}

function renderLibrary() {
  $("#library-count").textContent = filteredExpressions.length;
  $("#library-list").innerHTML = "";

  filteredExpressions.forEach((item, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "library-item";
    row.innerHTML = `
      <span>${item.level}</span>
      <strong>${item.phrase}</strong>
      <small>Day ${item.day} · ${accentLabels[item.accent]} · ${item.meaning} · ${item.source}</small>
    `;
    row.addEventListener("click", () => {
      itemIndex = index;
      switchTab("practice");
      renderPractice();
    });
    $("#library-list").appendChild(row);
  });
}

function renderReview() {
  $("#review-list").innerHTML = "";
  if (!reviewItems.length) {
    $("#review-list").innerHTML = '<p class="empty-state">还没有难句。遇到卡住的表达，可以在听写页标记。</p>';
    return;
  }

  reviewItems.forEach((phrase) => {
    const item = expressions.find((entry) => entry.phrase === phrase);
    if (!item) return;
    const row = document.createElement("button");
    row.type = "button";
    row.className = "library-item";
    row.innerHTML = `
      <span>${item.level}</span>
      <strong>${item.phrase}</strong>
      <small>Day ${item.day} · ${accentLabels[item.accent]} · ${item.meaning} · ${item.source}</small>
    `;
    row.addEventListener("click", () => {
      const filteredIndex = filteredExpressions.findIndex((entry) => entry.phrase === item.phrase);
      itemIndex = Math.max(filteredIndex, 0);
      switchTab("practice");
      renderPractice();
    });
    $("#review-list").appendChild(row);
  });
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-button").forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabName);
  });
}

function moveItem(step) {
  if (!filteredExpressions.length) return;
  itemIndex = (itemIndex + step + filteredExpressions.length) % filteredExpressions.length;
  renderPractice();
}

function checkAnswer() {
  const item = currentItem();
  const typed = $("#dictation-input").value;
  const isCorrect = normalize(typed) === normalize(item.phrase);
  attempts += 1;

  if (isCorrect) {
    correct += 1;
    completed += 1;
    addLearnedItem(item.phrase);
    $("#feedback").textContent = "正确！这句已经稳稳拿下。";
    $("#answer-box").hidden = false;
    renderTest();
    setTimeout(() => moveItem(1), 850);
  } else {
    $("#feedback").textContent = "还差一点。可以慢速再听一遍，注意缩写和介词。";
    addReviewItem(item.phrase);
  }

  updateStats();
}

function addReviewItem(phrase) {
  if (!reviewItems.includes(phrase)) {
    reviewItems.unshift(phrase);
    reviewItems = reviewItems.slice(0, 20);
    localStorage.setItem(userKey("review"), JSON.stringify(reviewItems));
    renderReview();
  }
}

function addLearnedItem(phrase) {
  if (!learnedItems.includes(phrase)) {
    learnedItems.unshift(phrase);
    learnedItems = learnedItems.slice(0, 80);
    localStorage.setItem(userKey("learned"), JSON.stringify(learnedItems));
  }
}

function getTestPool() {
  const learnedPool = learnedItems
    .map((phrase) => expressions.find((entry) => entry.phrase === phrase))
    .filter(Boolean);
  return learnedPool.length ? learnedPool : expressions.filter((item) => ["B2", "C1", "C2"].includes(item.level)).slice(-40);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderTest() {
  const pool = getTestPool();
  testItem = pool[Math.floor(Math.random() * pool.length)] || expressions[0];
  const distractors = shuffle(expressions.filter((item) => item.phrase !== testItem.phrase)).slice(0, 3);
  const choices = shuffle([testItem, ...distractors]);

  $("#test-empty").textContent = learnedItems.length
    ? `已从 ${learnedItems.length} 条已学表达中抽题。`
    : "答对听写后会优先抽已学内容；当前先用高阶推荐题热身。";
  $("#test-meaning").textContent = testItem.meaning;
  $("#test-feedback").textContent = "根据中文选择你学过的英文表达。";
  $("#test-answers").innerHTML = "";

  choices.forEach((item) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = item.phrase;
    button.addEventListener("click", () => {
      const isCorrect = item.phrase === testItem.phrase;
      button.classList.add(isCorrect ? "correct" : "wrong");
      if (isCorrect) {
        testScore += 1;
        $("#test-score").textContent = testScore;
        $("#test-feedback").textContent = "正确。这个表达已经能从中文反应到英文了。";
        saveUserStats();
      } else {
        $("#test-feedback").textContent = `不对，正确答案是：${testItem.phrase}`;
        addReviewItem(testItem.phrase);
      }
      [...document.querySelectorAll("#test-answers .answer-button")].forEach((answerButton) => {
        answerButton.disabled = true;
        if (answerButton.textContent === testItem.phrase) {
          answerButton.classList.add("correct");
        }
      });
    });
    $("#test-answers").appendChild(button);
  });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

function applyFilters() {
  const level = $("#level-filter").value;
  const accent = $("#accent-filter").value;
  filteredExpressions = expressions.filter((item) => {
    const levelMatch = level === "all" || item.level === level;
    const accentMatch = accent === "all" || item.accent === accent;
    return levelMatch && accentMatch;
  });
  itemIndex = 0;
  renderPractice();
  renderLibrary();
}

$("#level-filter").addEventListener("change", applyFilters);
$("#accent-filter").addEventListener("change", applyFilters);

$("#prev-item").addEventListener("click", () => moveItem(-1));
$("#next-item").addEventListener("click", () => moveItem(1));
$("#play-normal").addEventListener("click", () => speak(currentItem().phrase, 0.88));
$("#play-slow").addEventListener("click", () => speak(currentItem().phrase, 0.64));
$("#check-answer").addEventListener("click", checkAnswer);

$("#dictation-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkAnswer();
});

$("#show-meaning").addEventListener("click", () => {
  $("#meaning-box").hidden = false;
  $("#feedback").textContent = "已显示中文提示。现在再听一遍，尽量不要看答案。";
});

$("#show-initials").addEventListener("click", () => {
  const item = currentItem();
  const words = item.phrase.split(" ");
  const hint = words.map((word) => `${word[0]}${"_".repeat(Math.max(word.length - 1, 1))}`).join(" ");
  $("#feedback").textContent = `首字母提示：${hint}`;
});

$("#reveal-answer").addEventListener("click", () => {
  $("#answer-box").hidden = false;
  addReviewItem(currentItem().phrase);
});

$("#mark-hard").addEventListener("click", () => {
  addReviewItem(currentItem().phrase);
  $("#feedback").textContent = "已加入复习。";
});

$("#clear-review").addEventListener("click", () => {
  reviewItems = [];
  localStorage.setItem(userKey("review"), JSON.stringify(reviewItems));
  renderReview();
});

$("#play-test").addEventListener("click", () => {
  if (testItem) speak(testItem.phrase, 0.82, testItem);
});

$("#next-test").addEventListener("click", renderTest);

$("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedUser = $("#user-select").value;
  const typedUser = $("#username-input").value;
  startSession(typedUser || selectedUser);
});

$("#user-select").addEventListener("change", (event) => {
  if (event.target.value) $("#username-input").value = event.target.value;
});

$("#switch-user").addEventListener("click", showLogin);

renderUserOptions();
$("#username-input").value = localStorage.getItem("listening-room-active-user") || "";
