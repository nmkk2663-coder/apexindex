// ========================================
// APEX LEGENDS 攻略站 - 数据文件
// ========================================

// ---- 英雄数据 ----
const legendsData = [
    // === 突击类 ===
    {
        id: 'wraith',
        name: '恶灵',
        nameEn: 'Wraith',
        class: '突击',
        desc: '来自虚空的实验体，能够操控时空裂缝。擅长快速位移和规避伤害，是战场上的幽灵。',
        avatar: '👻',
        color: '#9b59b6',
        lore: '恶灵是一名跨维度战士，她的声音低语着危险即将来临。她曾是一名科学家，在一次实验中获得了操控虚空的能力。现在她利用这些能力在战场上穿梭，令敌人难以捉摸。',
        skills: {
            passive: { name: '虚空之声', desc: '当有危险靠近时，你会听到低语声。这能让你在危险到来前做好准备。' },
            tactical: { name: '踏入虚空', desc: '进入虚空状态，在短时间内规避所有伤害并提升移动速度。在此期间无法攻击敌人。' },
            ultimate: { name: '维度裂缝', desc: '在当前位置和目的地之间开启两道传送门，持续 60 秒。你和队友可以通过传送门快速往返。' }
        }
    },
    {
        id: 'bangalore',
        name: '班加罗尔',
        nameEn: 'Bangalore',
        class: '突击',
        desc: '职业军人出身的精英士兵，擅长烟雾掩护和火力压制。她的战术素养无人能及。',
        avatar: '💂',
        color: '#c0392b',
        lore: '班加罗尔来自一个军事世家，她是一名天生的战士。她利用烟雾弹和火力压制技巧在战场上占据优势，是一位可靠的队友。',
        skills: {
            passive: { name: '疾步', desc: '被子弹击中时移动速度会短暂提升，让你能快速脱离危险区域。' },
            tactical: { name: '烟雾弹', desc: '发射一枚烟雾弹，撞击后释放烟雾帷幕阻挡视线。可用于掩护撤退或制造进攻机会。' },
            ultimate: { name: '雷声滚滚', desc: '呼叫一轮空袭，导弹延迟降落后造成大量伤害并减速敌人。持续时间较长，范围广阔。' }
        }
    },
    {
        id: 'ash',
        name: '艾许',
        nameEn: 'Ash',
        class: '突击',
        desc: '前泰坦驾驶员，如今是 Apex 赛场的冷酷杀手。精通相位穿梭和定点压制。',
        avatar: '🤖',
        color: '#8e44ad',
        lore: '艾许曾经是一名泰坦驾驶员，在一次战斗中严重受损后被改造为机器人。她冷酷无情，利用相位技术瞬间接近并消灭对手。',
        skills: {
            passive: { name: '猎杀本能', desc: '地图上会标记出死亡箱的位置。按下交互键可标记最近的死亡箱，发出幸存者逃脱位置的语音提示。' },
            tactical: { name: '相位突破', desc: '投掷一个相位装置，向前穿梭并在终点出现。短暂眩晕附近的敌人。' },
            ultimate: { name: '相位裂缝', desc: '挥剑打开一个单向传送门，快速传送到目标位置。可用于追击或撤退。' }
        }
    },
    {
        id: 'mirage',
        name: '幻象',
        nameEn: 'Mirage',
        class: '散兵',
        desc: '自恋的全息投影大师。用真假难辨的分身迷惑敌人，在敌人困惑时给予致命一击。',
        avatar: '🎭',
        color: '#e67e22',
        lore: '幻象是全息投影技术的天才，他喜欢在战场上表演。他利用全息分身制造混乱，让敌人难以判断哪个是真正的他。',
        skills: {
            passive: { name: '隐型复活', desc: '复活队友或重生队友时自动隐身。被击倒后释放分身和烟雾迷惑敌人。' },
            tactical: { name: '疯猫', desc: '释放一个全息分身来迷惑敌人。按住技能键可控制分身移动。' },
            ultimate: { name: '派对生活', desc: '释放一队全息分身迷惑敌人，同时本体隐身。分身会模仿你的动作。' }
        }
    },
    {
        id: 'octane',
        name: '动力小子',
        nameEn: 'Octane',
        class: '散兵',
        desc: '极限运动狂人，为了速度不惜一切代价。他用肾上腺素换取极致速度。',
        avatar: '💨',
        color: '#e74c3c',
        lore: '动力小子是一个寻求刺激的疯子，他在一次比赛中失去双腿后换上了机械义肢。他通过兴奋剂提升速度，在战场上横冲直撞。',
        skills: {
            passive: { name: '快速修复', desc: '在不受到伤害时，自动缓慢恢复生命值。' },
            tactical: { name: '兴奋剂', desc: '消耗 20 点生命值换取 6 秒的 30% 移动速度加成。在兴奋剂状态下会持续受到少量伤害。' },
            ultimate: { name: '弹射跳板', desc: '在地面放置一个弹射跳板，踩上去可弹射到高空。在空中可以再次控制方向。' }
        }
    },
    {
        id: 'pathfinder',
        name: '探路者',
        nameEn: 'Pathfinder',
        class: '散兵',
        desc: '友善的侦查机器人，曾经的竞技场冠军。用钩爪在战场中灵活穿梭。',
        avatar: '🔗',
        color: '#f39c12',
        lore: '探路者是马文机器人系列的一员，他友善乐观的性格使他成为 Apex 赛场上最受欢迎的传奇之一。他一直在寻找创造者的下落。',
        skills: {
            passive: { name: '洞察情报', desc: '扫描侦查信标来揭示下一个安全圈的位置。减少终极技能的冷却时间。' },
            tactical: { name: '钩爪', desc: '发射钩爪抓住远处的物体，快速将自己拉向目标。可用于快速位移或追击。' },
            ultimate: { name: '滑索枪', desc: '发射一条可供所有队友使用的滑索。极佳的团队位移工具。' }
        }
    },
    {
        id: 'horizon',
        name: '地平线',
        nameEn: 'Horizon',
        class: '散兵',
        desc: '来自外太空的天体物理学家。操控引力掌控战场高低差。',
        avatar: '🌌',
        color: '#2ecc71',
        lore: '地平线是一位天才天体物理学家，她为了拯救人类前往黑洞，但回来时已经物是人非。她利用引力科技在战场占据制高点。',
        skills: {
            passive: { name: '太空漫步', desc: '在空中时拥有极佳的空中控制力，减少落地硬直，提高空中射击精度。' },
            tactical: { name: '引力电梯', desc: '释放一个引力装置，生成向上的引力流将玩家送入空中。敌人也可使用但会被探测到。' },
            ultimate: { name: '黑洞', desc: '释放一个微型黑洞，吸引附近所有敌人进入中心。可被摧毁但拥有较高生命值。' }
        }
    },
    {
        id: 'valkyrie',
        name: '瓦尔基里',
        nameEn: 'Valkyrie',
        class: '侦察',
        desc: '前泰坦驾驶员之女，继承父亲遗志的飞天战士。用喷气背包主宰天空。',
        avatar: '🚀',
        color: '#3498db',
        lore: '瓦尔基里是泰坦驾驶员之女，她的父亲在边境战争中牺牲。她改装了父亲的泰坦飞行系统，成为能够自由飞行的传奇。',
        skills: {
            passive: { name: 'VTOL 喷气背包', desc: '使用喷气背包在空中悬浮。燃料有限，松开后缓慢恢复。可配合武器射击。' },
            tactical: { name: '飞弹齐射', desc: '发射一组小型导弹攻击锁定目标。短暂眩晕并造成伤害。' },
            ultimate: { name: '天降奇兵', desc: '使用喷气背包将全队快速升空，然后选择地点跳伞着陆。可用于快速转移或战略部署。' }
        }
    },
    {
        id: 'lifeline',
        name: '生命线',
        nameEn: 'Lifeline',
        class: '支援',
        desc: '战地急救专家，不携带任何武器上场也能拯救全队。前线救援无人能及。',
        avatar: '💊',
        color: '#27ae60',
        lore: '生命线出身于富裕的军火商家庭，但她选择反抗家族传统，成为一名战地医生。她发誓不使用致命武器，用医疗技能救死扶伤。',
        skills: {
            passive: { name: '战斗复活', desc: '使用 D.O.C. 无人机复活队友，复活期间可自由移动和战斗。急救速度提高 25%。' },
            tactical: { name: 'D.O.C. 治疗无人机', desc: '部署治疗无人机为附近所有人持续恢复生命值。治疗量虽慢但胜在持续。' },
            ultimate: { name: '补给仓', desc: '呼叫一个补给仓，内含高质量防御装备和治疗物品。前几轮可提供高级护甲。' }
        }
    },
    {
        id: 'newcastle',
        name: '纽卡斯尔',
        nameEn: 'Newcastle',
        class: '支援',
        desc: '为保护家人而战的铁血保镖。用可移动盾牌为团队筑起铜墙铁壁。',
        avatar: '🛡️',
        color: '#2980b9',
        lore: '纽卡斯尔是班加罗尔的哥哥，他曾是一名普通市民，为保护家人而冒充传奇。他使用最先进的护盾技术守护队友。',
        skills: {
            passive: { name: '急救护盾', desc: '复活队友时使用复活盾进行掩护。盾牌朝向复活目标方向展开。' },
            tactical: { name: '机动护盾', desc: '投掷一个可遥控的能量无人机，生成一面可移动的能量护盾。' },
            ultimate: { name: '堡垒护盾', desc: '跳跃到目标位置并猛击地面，在周围生成一圈坚固壁垒。墙壁带电可造成伤害。' }
        }
    },
    {
        id: 'bloodhound',
        name: '寻血猎犬',
        nameEn: 'Bloodhound',
        class: '侦察',
        desc: '来自极地的追踪大师。用自然之力嗅出猎物踪迹，在终极状态中化身杀戮机器。',
        avatar: '🦅',
        color: '#2c3e50',
        lore: '寻血猎犬是来自极地的追踪大师，他们信奉自然之神，用古老的方式追踪猎物。他们的追踪技能在 Apex 赛场上无人能及。',
        skills: {
            passive: { name: '追踪器', desc: '看到敌人留下的足迹和互动痕迹。通过分析足迹可获取敌人的行动信息。' },
            tactical: { name: '上帝之眼', desc: '短暂扫描前方区域，显示所有敌人、陷阱和线索。穿透障碍物。' },
            ultimate: { name: '狩猎盛宴', desc: '进入终极狩猎状态。大幅提升移速，视界变为黑白但敌人高亮为红色。击杀可延长持续时间。' }
        }
    },
    {
        id: 'crypto',
        name: '密客',
        nameEn: 'Crypto',
        class: '侦察',
        desc: '神秘的黑客大师。用无人机掌控战场情报，让敌人无处遁形。',
        avatar: '🖥️',
        color: '#16a085',
        lore: '密客是一名天才黑客，他在寻找害死妹妹的幕后真凶。他操控无人机 Surveillance 无人机，在安全距离外就能收集敌人情报。',
        skills: {
            passive: { name: '神经网络', desc: '无人机扫描到的敌人会在 30 米内被标记。队友也可看到被标记的敌人。' },
            tactical: { name: '监控无人机', desc: '部署飞行无人机扫描周围环境。可扫描旗帜追踪小队数、开启重生信标和调查信标。' },
            ultimate: { name: '无人机脉冲', desc: '无人机释放大范围电磁脉冲，造成护甲伤害、减速和摧毁陷阱。影响所有范围内的电子设备。' }
        }
    },
    {
        id: 'seer',
        name: '希尔',
        nameEn: 'Seer',
        class: '侦察',
        desc: '预知未来的艺术家。用微观无人机洞悉一切，让敌人无处可藏。',
        avatar: '🔮',
        color: '#d4ac0d',
        lore: '希尔通过艺术和预知能力感知世界。他利用微型无人机洞察敌人的一举一动，让对手的任何隐秘行动都无所遁形。',
        skills: {
            passive: { name: '心搏传感器', desc: '开镜时侦测 75 米内敌人的心跳。可显示敌人方位和距离。' },
            tactical: { name: '微雕无人机', desc: '释放一队无人机穿透敌人，造成 10 点伤害并打断治疗/复活，显示敌人生命值 8 秒。' },
            ultimate: { name: '展馆', desc: '创造一个直径 75 米的球形领域，领域内跑动和射击的敌人会被高亮显示，且脚步声放大。' }
        }
    },
    {
        id: 'caustic',
        name: '毒气',
        nameEn: 'Caustic',
        class: '控制',
        desc: '无情的毒气专家。用致命毒气陷阱封锁区域，将战场变成死亡实验室。',
        avatar: '☠️',
        color: '#1abc9c',
        lore: '毒气是一位天才化学家，他对毒气的研究达到了痴迷的程度。他加入 Apex 竞技赛的唯一目的就是在实战中测试他的毒气。',
        skills: {
            passive: { name: '夜神视线', desc: '被毒气伤害的敌人会被高亮显示。你免疫自己的毒气效果。' },
            tactical: { name: '毒气陷阱', desc: '放置最多 6 个毒气罐，触发后释放致命毒气造成持续伤害并减速敌人。' },
            ultimate: { name: '毒气手雷', desc: '投掷一枚毒气手雷，在落地区域释放一大片致命毒气云，造成高额持续伤害。' }
        }
    },
    {
        id: 'wattson',
        name: '沃特森',
        nameEn: 'Wattson',
        class: '控制',
        desc: '电学天才少女。用高压电网守护阵地，为团队提供无限能量。',
        avatar: '⚡',
        color: '#f1c40f',
        lore: '沃特森是电器工程师的遗孤，在 Apex 赛场长大。她是电能大师，用高压电网封锁区域并为队友充能护甲。',
        skills: {
            passive: { name: '电击感知', desc: '绝招加速器可以填满你的终极技能。站在拦截塔附近可提升护甲恢复速度。' },
            tactical: { name: '边界防线', desc: '放置最多 12 个高压电围栏节点。两个节点之间形成电网，敌人穿过时会受到伤害和减速。' },
            ultimate: { name: '拦截塔', desc: '部署一个拦截塔，摧毁所有来袭的投掷物和烟雾。并为附近队友快速恢复护甲。' }
        }
    },
    {
        id: 'rampart',
        name: '兰帕特',
        nameEn: 'Rampart',
        class: '控制',
        desc: '武器改装大师。用加特林和掩体打造无人能破的防御工事。',
        avatar: '🔧',
        color: '#e67e22',
        lore: '兰帕特是个机械天才，她在自家车库里改装武器和装备。她为自己的机枪和无掩体盾牌感到骄傲，喜欢用火力压制对手。',
        skills: {
            passive: { name: '改装者', desc: '使用轻机枪和狙击枪时弹匣容量增加，换弹速度提升。重装弹药伤害加成。' },
            tactical: { name: '强化掩体', desc: '放置一面可展开的合金盾牌。放置后展开为全尺寸掩体，正面可阻挡子弹。' },
            ultimate: { name: '移动塞拉', desc: '部署一挺可以部署的旋转机枪"希拉"。高射速高伤害，但移动速度受限。可被队友使用。' }
        }
    },
    {
        id: 'fuse',
        name: '暴雷',
        nameEn: 'Fuse',
        class: '控制',
        desc: '疯狂爆炸狂。用无穷无尽的爆炸物炸出一条血路。',
        avatar: '💣',
        color: '#d35400',
        lore: '暴雷来自边境最混乱的星球，他用爆炸的艺术征服了所有人。他携带大量爆炸物进入竞技场，让敌人体验真正的爆炸表演。',
        skills: {
            passive: { name: '手雷专家', desc: '投掷物可以同时携带两个。投掷物的轨迹会显示，让你能精确瞄准目标位置。' },
            tactical: { name: '集束炸弹', desc: '发射一枚会释放子母弹的集束炸弹。分裂出多枚小炸弹覆盖大范围区域。' },
            ultimate: { name: '母巢', desc: '发射一枚信号弹，在其周围形成一个火焰包围圈。火焰区域内的敌人会受到持续伤害并被标记。' }
        }
    },
    {
        id: 'loba',
        name: '罗芭',
        nameEn: 'Loba',
        class: '侦察',
        desc: '优雅的盗贼大师。用传送手镯穿越障碍，偷取最珍贵的战利品。',
        avatar: '💎',
        color: '#9b59b6',
        lore: '罗芭是著名的盗贼，她在童年目睹父母被亡灵杀害。她偷窃最珍贵的物品，同时也在寻找向亡灵复仇的机会。',
        skills: {
            passive: { name: '识货', desc: '透过墙壁看到史诗级和传说级的战利品。自动标记视野范围内的高品质物品。' },
            tactical: { name: '传送手镯', desc: '投掷手镯后瞬间传送到其落点。可穿越墙壁和障碍物。冷却时间 30 秒。' },
            ultimate: { name: '黑市', desc: '部署一个能够窃取周围所有战利品的装置。每位队友可拿两件物品。无视墙体距离 60 米。' }
        }
    },
    {
        id: 'revenant',
        name: '亡灵',
        nameEn: 'Revenant',
        class: '突击',
        desc: '不死不灭的杀戮机器。用沉默和暗影力量让猎物恐惧。',
        avatar: '💀',
        color: '#c0392b',
        lore: '亡灵是最致命的刺客，他曾经是人类，后来被转变为一台杀戮机器。他发现自己只是众多复制品之一后，将愤怒倾泻到所有活人身上。',
        skills: {
            passive: { name: '攀爬高手', desc: '攀爬速度提升且可爬更高。潜行走得更快。拥有蹲伏移动速度加成。' },
            tactical: { name: '沉默', desc: '投掷一个沉默装置，命中后压制目标的技能和终极技能一段时间。' },
            ultimate: { name: '暗影形态', desc: '释放暗影形态，获得额外生命值。死亡后以暗影形式复活并被送回形态起始位置。击杀可刷新。' }
        }
    },
    {
        id: 'gibraltar',
        name: '直布罗陀',
        nameEn: 'Gibraltar',
        class: '控制',
        desc: '温柔的巨人，Apex 赛场的移动堡垒。用圆顶护盾和轰炸保护队友。',
        avatar: '💪',
        color: '#d63031',
        lore: '直布罗陀是个善良的巨人，为了救助他人而加入 Apex 竞技赛。他用家族传承的护盾和迫击炮轰炸保护队友免受伤害。',
        skills: {
            passive: { name: '枪盾', desc: '开镜瞄准时会在身前生成一个能量护盾。可吸收 50 点伤害。' },
            tactical: { name: '圆顶护盾', desc: '投掷一个圆顶护盾发生器，生成一个 360° 的防护罩。阻挡所有进出攻击，持续 12 秒。' },
            ultimate: { name: '防御轰炸', desc: '呼叫迫击炮轰炸目标区域。范围大、伤害高、持续多轮。' }
        }
    },
    {
        id: 'catalyst',
        name: '催化剂',
        nameEn: 'Catalyst',
        class: '控制',
        desc: '铁磁流体大师。用液态金属操控战场地势和视线。',
        avatar: '🌙',
        color: '#6c5ce7',
        lore: '催化剂是一位铁磁流体工程师，她利用液态金属塑造战场。她不善社交但热衷于自己的工作，用科技为团队创造优势。',
        skills: {
            passive: { name: '铁磁护盾', desc: '在门口放置铁磁流体加固门。被击倒后可重新激活门口的流体。' },
            tactical: { name: '钉刺', desc: '在地面撒布铁磁流体，接触到流体的敌人会被减速并受到伤害。持续时间较长。' },
            ultimate: { name: '黑暗面纱', desc: '升起一堵高耸的铁磁流体墙，阻挡视线和扫描。可被打破但碎片仍然阻挡视野。' }
        }
    },
    {
        id: 'vantage',
        name: '万塔捷',
        nameEn: 'Vantage',
        class: '侦察',
        desc: '荒野求生少女。和她的蝙蝠伙伴在远方精准狙杀目标。',
        avatar: '🦇',
        color: '#00cec9',
        lore: '万塔捷在野外独自长大，与一只名为艾科(Echo)的蝙蝠为伴。她从母亲留下的狙击枪上自学成才，成为 Apex 赛场最致命的神射手。',
        skills: {
            passive: { name: '侦察镜', desc: '空手时使用望远镜标记敌人。标记显示敌人距离和护甲等级。为队友提供信息。' },
            tactical: { name: '穿梭火箭', desc: '命令艾科飞到目标位置，然后将自己拉向艾科位置。空中可攻击。' },
            ultimate: { name: '瞄准镜', desc: '装备一把定制狙击步枪。可造成高额伤害并标记命中目标，使队友攻击标记目标造成额外伤害。' }
        }
    },
    {
        id: 'mad_maggie',
        name: '疯玛吉',
        nameEn: 'Mad Maggie',
        class: '突击',
        desc: '暴躁的角斗士女王。用霰弹枪和破坏球横扫一切障碍。',
        avatar: '🔥',
        color: '#e74c3c',
        lore: '疯玛吉是来自萨摩亚的角斗士领袖，她崇尚纯粹的暴力和混乱。她与直布罗陀有着旧怨，来到 Apex 就是要称霸赛场。',
        skills: {
            passive: { name: '战意', desc: '暂时暴露被你造成伤害的敌人位置。装备霰弹枪时移速提升。' },
            tactical: { name: '钻头弹', desc: '发射一枚可穿透墙壁的钻头弹。命中墙后的敌人造成持续灼烧伤害。' },
            ultimate: { name: '破坏球', desc: '投掷一颗释放爆炸弹跳球的装置。球体弹跳并释放加速垫和爆炸，对敌人造成伤害和击退。' }
        }
    },
    {
        id: 'ballistic',
        name: '弹道',
        nameEn: 'Ballistic',
        class: '突击',
        desc: '退役传奇再出山的优雅绅士。用智能手枪主宰近距离战斗。',
        avatar: '🎩',
        color: '#636e72',
        lore: '弹道曾是 Apex 竞技赛最耀眼的冠军，退役后过着奢华的生活。因个人原因重返赛场，他经验丰富、老谋深算。',
        skills: {
            passive: { name: '武器吊架', desc: '背包内携带第三把武器。但第三把武器不能安装配件。' },
            tactical: { name: '智能子弹', desc: '发射一枚追踪子弹，命中后使目标武器过热。过热期间无法射击。' },
            ultimate: { name: '复仇女神', desc: '激活肩上的智能武器系统。附近敌人被自动锁定，手持武器自动换弹且射速提升。' }
        }
    },
    {
        id: 'conduit',
        name: '传导',
        nameEn: 'Conduit',
        class: '支援',
        desc: '充满活力的支援新秀。用电磁能量为队友充能护甲并提供机动性。',
        avatar: '⚡',
        color: '#fdcb6e',
        lore: '传导是一个充满活力的年轻人，她是 Apex 的新秀。她被选中接受电磁改造实验，现在用这些能力保护队友、冲锋陷阵。',
        skills: {
            passive: { name: '救世主之速', desc: '在护盾被击破后跑向安全距离时获得短暂的加速效果。' },
            tactical: { name: '电荷转移', desc: '为附近队友（包括自己）提供临时护盾。超出范围后护盾会消失。可充电。' },
            ultimate: { name: '电磁屏障', desc: '部署一排电磁脉冲发射器，在敌人接近时释放电磁波造成伤害和减速。' }
        }
    },
    {
        id: 'alter',
        name: '艾特',
        nameEn: 'Alter',
        class: '散兵',
        desc: '操控现实裂缝的虚空行者。用神秘力量扰乱战场秩序。',
        avatar: '🌀',
        color: '#a855f7',
        lore: '艾特来自另一个维度的神秘存在，她能操控现实的裂缝。她的目的成谜，但在战场上总能用难以理解的方式出现在最致命的位置。',
        skills: {
            passive: { name: '裂隙视觉', desc: '透过墙壁看到虚空裂隙的位置。使用裂隙可快速穿越地形。' },
            tactical: { name: '虚空裂隙', desc: '打开一道时空间隙，片刻后传送到该位置。' },
            ultimate: { name: '现实崩塌', desc: '在目标区域撕裂空间，制造一个大范围的紊乱区域。区域内的敌人受到持续伤害并失去方向感。' }
        }
    }
];

// ---- 武器数据 ----
const weaponsData = [
    { id: 'r301', name: 'R-301 卡宾枪', type: '突击步枪', ammo: '轻弹药', damage: { body: 14, head: 28, leg: 11 }, magSize: 18, fireRate: '全自动', rpm: 610, description: '最可靠的全面型步枪，后坐力小、易于控制，适合各种距离作战。', bestAttachments: '2倍镜·枪托·加长轻弹匣', tips: '中距离王者，搭配 2-3 倍镜可在 30-50 米打出极高伤害。' },
    { id: 'flatline', name: '平行步枪', type: '突击步枪', ammo: '重弹药', damage: { body: 19, head: 38, leg: 15 }, magSize: 20, fireRate: '全自动', rpm: 570, description: '高伤害突击步枪，后坐力大但伤害奖励丰厚。', bestAttachments: '1-2倍镜·枪托·加长重弹匣', tips: '伤害高但压枪难度大，推荐近距离腰射或中距离点射。' },
    { id: 'havoc', name: '哈沃克步枪', type: '突击步枪', ammo: '能量弹药', damage: { body: 18, head: 36, leg: 14 }, magSize: 25, fireRate: '全自动', rpm: 590, description: '能量弹药突击步枪，拥有极高伤害但需要短暂的预热开火时间。', bestAttachments: '涡轮增压器·加长能量弹匣', tips: '有涡轮增压器后手感质变，几乎无预热直接开火。' },
    { id: 'hemlok', name: '赫姆洛克', type: '突击步枪', ammo: '重弹药', damage: { body: 20, head: 40, leg: 16 }, magSize: 18, fireRate: '三连发/单发', rpm: 510, description: '三连发突击步枪，精准度极高。切换单发模式后在中远距离表现优异。', bestAttachments: '3倍镜·枪托·加长重弹匣', tips: '远程切换单发模式精确点射，近战用三连发爆发。' },
    { id: 'nemesis', name: '复仇女神', type: '突击步枪', ammo: '能量弹药', damage: { body: 17, head: 34, leg: 14 }, magSize: 24, fireRate: '四连发', rpm: 600, description: '四连发能量步枪，连发节奏可控。持续射击可提升射速，上限极高。', bestAttachments: '加长能量弹匣·枪托', tips: '连发节奏越打越快，中距离压制力极强。' },
    { id: 'r99', name: 'R-99 冲锋枪', type: '冲锋枪', ammo: '轻弹药', damage: { body: 12, head: 20, leg: 10 }, magSize: 20, fireRate: '全自动', rpm: 1080, description: '射速最快的全自动武器，近战爆发力惊人。', bestAttachments: '加长轻弹匣·枪托·1倍镜', tips: '近战贴脸之王，腰射精准度高。' },
    { id: 'alternator', name: '交流电机冲锋枪', type: '冲锋枪', ammo: '轻弹药', damage: { body: 15, head: 26, leg: 12 }, magSize: 19, fireRate: '全自动', rpm: 520, description: '稳定可靠的冲锋枪，射速适中但控制极佳。', bestAttachments: '加长轻弹匣·枪托', tips: '搭配干扰子弹配件伤害大幅提升。' },
    { id: 'volt', name: '伏特冲锋枪', type: '冲锋枪', ammo: '能量弹药', damage: { body: 15, head: 27, leg: 12 }, magSize: 19, fireRate: '全自动', rpm: 650, description: '能量冲锋枪，完美平衡伤害与射速。', bestAttachments: '加长能量弹匣·枪托', tips: '全能冲锋枪，近战强、中距离也准。' },
    { id: 'car', name: 'C.A.R. 冲锋枪', type: '冲锋枪', ammo: '轻/重弹药', damage: { body: 14, head: 24, leg: 11 }, magSize: 19, fireRate: '全自动', rpm: 750, description: '可使用轻或重两种弹药的通用冲锋枪。', bestAttachments: '加长弹匣·枪托', tips: '弹药通用性是其最大优势。' },
    { id: 'prowler', name: '猎兽冲锋枪', type: '冲锋枪', ammo: '重弹药', damage: { body: 16, head: 29, leg: 13 }, magSize: 20, fireRate: '五连发/全自动', rpm: 700, description: '五连发冲锋枪，寻获选射机匣后变全自动。', bestAttachments: '选射机匣·加长重弹匣·枪托', tips: '有选射机匣后质变为全自动 T0 近战武器。' },
    { id: 'spitfire', name: '喷火轻机枪', type: '轻机枪', ammo: '轻弹药', damage: { body: 18, head: 32, leg: 14 }, magSize: 35, fireRate: '全自动', rpm: 540, description: '大弹匣轻机枪，持续火力压制能力极强。', bestAttachments: '加长轻弹匣·3倍镜·枪托', tips: '不用频繁换弹是其最大优势。' },
    { id: 'lstar', name: 'L-STAR 冲机枪', type: '轻机枪', ammo: '能量弹药', damage: { body: 18, head: 36, leg: 14 }, magSize: 30, fireRate: '全自动', rpm: 560, description: '能量弹药轻机枪，等离子弹头有弹道可见度。', bestAttachments: '加长能量弹匣', tips: '弹道易被敌人看见，架好位置提前开火。' },
    { id: 'rampage', name: '狂暴轻机枪', type: '轻机枪', ammo: '重弹药', damage: { body: 26, head: 52, leg: 21 }, magSize: 28, fireRate: '全自动', rpm: 510, description: '高伤害轻机枪，使用热修包后可大幅提升射速。', bestAttachments: '加长重弹匣·3倍镜', tips: '插热修包后射速翻倍，变成终极压制武器。' },
    { id: 'longbow', name: '长弓狙击枪', type: '狙击枪', ammo: '狙击弹药', damage: { body: 55, head: 110, leg: 44 }, magSize: 5, fireRate: '栓动', rpm: 160, description: '半自动狙击步枪，伤害优秀。', bestAttachments: '加长狙击弹匣·6-10倍镜·枪托', tips: '容错率最高的狙击枪。' },
    { id: 'charge_rifle', name: '充能步枪', type: '狙击枪', ammo: '狙击弹药', damage: { body: 55, head: 88, leg: 44 }, magSize: 4, fireRate: '充能射击', rpm: 120, description: '光束狙击枪，充能后发射高能激光束。', bestAttachments: '加长狙击弹匣', tips: '预充能后瞬间打出全额伤害。' },
    { id: 'sentinel', name: '哨兵狙击枪', type: '狙击枪', ammo: '狙击弹药', damage: { body: 70, head: 140, leg: 56 }, magSize: 4, fireRate: '栓动', rpm: 65, description: '最高单发伤害的栓动狙击枪。', bestAttachments: '加长狙击弹匣·6-10倍镜', tips: '用电池充能后伤害爆炸，一枪破紫甲。' },
    { id: 'eva8', name: 'EVA-8 霰弹枪', type: '霰弹枪', ammo: '霰弹', damage: { body: '7x9', head: '7x12', leg: '7x7' }, magSize: 8, fireRate: '半自动', rpm: 225, description: '半自动霰弹枪，射速快容错率高。', bestAttachments: '加长霰弹弹匣·枪托', tips: '无脑连喷，近战天花板武器之一。' },
    { id: 'peacekeeper', name: '和平守护者', type: '霰弹枪', ammo: '霰弹', damage: { body: '9x11', head: '9x15', leg: '9x9' }, magSize: 5, fireRate: '泵动', rpm: 75, description: '泵动式霰弹枪，单发伤害之王。', bestAttachments: '霰弹枪枪栓·加长霰弹弹匣', tips: '开镜蓄力缩小弹道，可打 20 米外目标。' },
    { id: 'mozambique', name: '莫桑比克', type: '霰弹枪', ammo: '霰弹', damage: { body: 45, head: 63, leg: 36 }, magSize: 3, fireRate: '半自动', rpm: 200, description: '三发霰弹手枪。', bestAttachments: '穿颅器·加长霰弹弹匣', tips: '搭配穿颅器后爆头伤害极高。' },
    { id: 'wingman', name: '小帮手', type: '手枪', ammo: '重弹药', damage: { body: 45, head: 97, leg: 38 }, magSize: 6, fireRate: '单发', rpm: 260, description: '大口径左轮手枪，一发入魂的代名词。', bestAttachments: '加长重弹匣·穿颅器·1-2倍镜', tips: '手枪中的狙击枪，远程爆头伤害爆炸。' },
    { id: 're45', name: 'RE-45 自动手枪', type: '手枪', ammo: '轻弹药', damage: { body: 13, head: 22, leg: 10 }, magSize: 15, fireRate: '全自动', rpm: 630, description: '全自动手枪，换弹快、手感好。', bestAttachments: '干扰子弹·加长轻弹匣', tips: '干扰子弹版本神器，近战 DPS 超越多数冲锋枪。' },
    { id: 'p2020', name: 'P2020', type: '手枪', ammo: '轻弹药', damage: { body: 18, head: 31, leg: 14 }, magSize: 10, fireRate: '单发', rpm: 360, description: '基础半自动手枪。', bestAttachments: '加长轻弹匣·锤击点', tips: '搭配锤击点配件后对无甲敌人伤害翻倍。' },
    { id: 'g7', name: 'G7 侦查枪', type: '射手步枪', ammo: '轻弹药', damage: { body: 34, head: 60, leg: 27 }, magSize: 10, fireRate: '半自动', rpm: 240, description: '半自动射手步枪，射速快、弹道直。', bestAttachments: '加长轻弹匣·3倍镜·枪托', tips: '快速连点中距离压制，搭配 2-3 倍镜效果最佳。' },
    { id: 'triple_take', name: '三重击', type: '射手步枪', ammo: '能量弹药', damage: { body: '21x3', head: '38x3', leg: '17x3' }, magSize: 5, fireRate: '单发', rpm: 100, description: '三束能量弹射手步枪。', bestAttachments: '加长能量弹匣·3倍镜·枪托', tips: '开镜缩小散射，不开镜贴脸三弹全中伤害爆炸。' },
    { id: '3030', name: '30-30 连发枪', type: '射手步枪', ammo: '重弹药', damage: { body: 42, head: 72, leg: 34 }, magSize: 6, fireRate: '单发', rpm: 120, description: '杠杆式射手步枪，蓄力射击提升伤害。', bestAttachments: '加长重弹匣·3倍镜·枪托', tips: '蓄力后伤害大幅提升。' },
    { id: 'frag_grenade', name: '破片手雷', type: '投掷物', ammo: '-', damage: { body: 100, head: 100, leg: 100 }, magSize: 1, fireRate: '投掷', rpm: '-', description: '经典破片手雷，范围大、伤害高。', bestAttachments: '-', tips: '捏在手里等 2 秒再扔，让敌人来不及躲避。' },
    { id: 'arc_star', name: '电弧星', type: '投掷物', ammo: '-', damage: { body: 70, head: 70, leg: 70 }, magSize: 1, fireRate: '投掷', rpm: '-', description: '粘性爆炸物，命中后吸附在目标身上。', bestAttachments: '-', tips: '粘到人身上必死无疑，也可用来破坏门和护盾。' },
    { id: 'thermite', name: '铝热剂', type: '投掷物', ammo: '-', damage: { body: 40, head: 40, leg: 40 }, magSize: 1, fireRate: '投掷', rpm: '-', description: '持续灼烧的铝热剂，落地后形成一道火焰地带。', bestAttachments: '-', tips: '用于封锁门口、走廊和堵住敌人撤退路线。' }
];

// ---- 地图数据 ----
const mapsData = [
    { id: 'kings_canyon', name: '诸王峡谷', env: '丛林峡谷 · 昼夜交替', icon: '🏝️', color: '#27ae60', desc: 'Apex Legends 的首张地图，经典而致命。紧凑的地形设计带来高频率遭遇战。', hotzones: ['骷髅镇', '雷雨棚', '市场', '水坝', '火炮发射场'], tips: '中央峡谷区域是兵家必争之地，控制制高点即控制战场。' },
    { id: 'worlds_edge', name: '世界边缘', env: '火山冻土 · 工业废墟', icon: '🌋', color: '#e74c3c', desc: '以工业化为主题的大型地图，熔岩河流和冰雪覆盖的荒原共存。', hotzones: ['碎片车站', '天钩', '熔岩城', '大厦', '穹顶'], tips: '注意第三方的经典围剿路线。' },
    { id: 'olympus', name: '奥林帕斯', env: '空中城市 · 科幻花园', icon: '🏛️', color: '#3498db', desc: '漂浮在外星球大气层上层的空中城市，建筑风格优美现代。', hotzones: ['花园', '电站', '涡轮机', '庄园', '苍穹'], tips: '利用三叉戟快速转移，注意水面舰船上的高地争夺。' },
    { id: 'storm_point', name: '暴风点', env: '热带岛屿 · 巨型生物', icon: '🌊', color: '#16a085', desc: '目前最大的地图，广阔的海滩、茂密的丛林和古代遗迹混搭而成。', hotzones: ['季雨', '检查站', '远古之墓', '指挥中心', '海军基地'], tips: '地图极大，合理规划移动路线非常重要。' },
    { id: 'broken_moon', name: '残月', env: '赛博朋克 · 月面殖民地', icon: '🌙', color: '#8e44ad', desc: '破碎的月球殖民地，融合了高科技都市和荒凉的地外景观。', hotzones: ['无底流沙', '集装箱堆场', '核心', '产区', '悬空平台'], tips: '利用悬浮列车快速绕后和转移。' }
];

// ---- 版本排行数据 ----
const tierlistData = [
    { tier: 'S', label: 'T0 - 版本之子', legends: [{ name: '寻血猎犬', icon: '🦅' }, { name: '瓦尔基里', icon: '🚀' }, { name: '万塔捷', icon: '🦇' }, { name: '艾特', icon: '🌀' }] },
    { tier: 'A', label: 'T1 - 强势选择', legends: [{ name: '恶灵', icon: '👻' }, { name: '艾许', icon: '🤖' }, { name: '地平线', icon: '🌌' }, { name: '动力小子', icon: '💨' }, { name: '传导', icon: '⚡' }, { name: '班加罗尔', icon: '💂' }] },
    { tier: 'B', label: 'T2 - 可用', legends: [{ name: '生命线', icon: '💊' }, { name: '纽卡斯尔', icon: '🛡️' }, { name: '探路者', icon: '🔗' }, { name: '催化剂', icon: '🌙' }, { name: '直布罗陀', icon: '💪' }, { name: '弹道', icon: '🎩' }, { name: '密客', icon: '🖥️' }, { name: '幻象', icon: '🎭' }] },
    { tier: 'C', label: 'T3 - 弱势 / 特定阵容', legends: [{ name: '亡灵', icon: '💀' }, { name: '暴雷', icon: '💣' }, { name: '毒气', icon: '☠️' }, { name: '沃特森', icon: '⚡' }, { name: '罗芭', icon: '💎' }, { name: '疯玛吉', icon: '🔥' }, { name: '兰帕特', icon: '🔧' }, { name: '希尔', icon: '🔮' }] }
];

// ---- 英雄职业配色 ----
const classColors = {
    '突击': { bg: '#e74c3c', text: '#fff' },
    '侦察': { bg: '#3498db', text: '#fff' },
    '控制': { bg: '#2ecc71', text: '#fff' },
    '支援': { bg: '#f39c12', text: '#fff' },
    '散兵': { bg: '#9b59b6', text: '#fff' }
};

// ---- 武器类型配色 ----
const weaponTypeColors = {
    '突击步枪': '#e74c3c',
    '冲锋枪': '#3498db',
    '轻机枪': '#27ae60',
    '狙击枪': '#8e44ad',
    '霰弹枪': '#e67e22',
    '手枪': '#f1c40f',
    '射手步枪': '#1abc9c',
    '投掷物': '#95a5a6'
};