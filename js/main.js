// ========================================
// APEX LEGENDS 攻略站 - 主程序
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    /* 1. 粒子效果 */
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: rgba(230, 57, 70, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 8 + 6}s infinite;
                animation-delay: ${Math.random() * 5}s;
                opacity: ${Math.random() * 0.5 + 0.2};
            `;
            container.appendChild(particle);
        }
        if (!document.getElementById('particle-style')) {
            const style = document.createElement('style');
            style.id = 'particle-style';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-30px) translateX(15px); }
                    50% { transform: translateY(10px) translateX(-10px); }
                    75% { transform: translateY(-20px) translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /* 2. 导航栏 */
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
            const sections = document.querySelectorAll('.section, .hero-section');
            let current = '';
            sections.forEach(section => {
                const top = section.offsetTop - 200;
                const bottom = top + section.offsetHeight;
                if (window.scrollY >= top && window.scrollY < bottom) {
                    current = section.getAttribute('id') || 'home';
                }
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
            });
        });

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }

    /* 3. 渲染英雄卡片 */
    function renderLegends(filter = 'all') {
        const grid = document.getElementById('legendsGrid');
        if (!grid) return;

        const filtered = filter === 'all'
            ? legendsData
            : legendsData.filter(l => l.class === filter);

        grid.innerHTML = filtered.map(legend => {
            const classColor = classColors[legend.class] || { bg: '#666', text: '#fff' };
            return `
                <div class="legend-card" data-legend-id="${legend.id}">
                    <div class="legend-card-header" style="--bg-color: ${legend.color}">
                        <div class="legend-card-bg"></div>
                        <span class="legend-avatar">${legend.avatar}</span>
                        <span class="legend-class-badge" style="background: ${classColor.bg}; color: ${classColor.text}">
                            ${legend.class}
                        </span>
                    </div>
                    <div class="legend-card-body">
                        <h3>${legend.name}</h3>
                        <div class="legend-name-en">${legend.nameEn}</div>
                        <p class="legend-desc">${legend.desc}</p>
                        <div class="legend-skills">
                            <div class="legend-skill">
                                <span class="skill-icon passive"><i class="fas fa-shield-alt"></i></span>
                                <span><span class="skill-name">被动：</span>${legend.skills.passive.name}</span>
                            </div>
                            <div class="legend-skill">
                                <span class="skill-icon tactical"><i class="fas fa-bolt"></i></span>
                                <span><span class="skill-name">战术：</span>${legend.skills.tactical.name}</span>
                            </div>
                            <div class="legend-skill">
                                <span class="skill-icon ultimate"><i class="fas fa-star"></i></span>
                                <span><span class="skill-name">绝招：</span>${legend.skills.ultimate.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.legend-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.legendId;
                const legend = legendsData.find(l => l.id === id);
                if (legend) openLegendModal(legend);
            });
        });
    }

    /* 4. 英雄详情弹窗 */
    function openLegendModal(legend) {
        const classColor = classColors[legend.class] || { bg: '#666', text: '#fff' };
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <div class="modal-header">
                    <span class="legend-avatar">${legend.avatar}</span>
                    <div class="modal-header-info">
                        <h2>${legend.name}</h2>
                        <div class="legend-name-en">${legend.nameEn}</div>
                        <span class="legend-class-badge" style="background: ${classColor.bg}; color: ${classColor.text}; display: inline-block; margin-top: 6px;">
                            ${legend.class}
                        </span>
                    </div>
                </div>
                <div class="modal-body">
                    <p>${legend.lore}</p>
                    <div class="modal-skills">
                        <div class="modal-skill">
                            <div class="modal-skill-header">
                                <span class="skill-icon passive"><i class="fas fa-shield-alt"></i></span>
                                <h4>被动技能 — ${legend.skills.passive.name}</h4>
                            </div>
                            <p>${legend.skills.passive.desc}</p>
                        </div>
                        <div class="modal-skill">
                            <div class="modal-skill-header">
                                <span class="skill-icon tactical"><i class="fas fa-bolt"></i></span>
                                <h4>战术技能 — ${legend.skills.tactical.name}</h4>
                            </div>
                            <p>${legend.skills.tactical.desc}</p>
                        </div>
                        <div class="modal-skill">
                            <div class="modal-skill-header">
                                <span class="skill-icon ultimate"><i class="fas fa-star"></i></span>
                                <h4>终极技能 — ${legend.skills.ultimate.name}</h4>
                            </div>
                            <p>${legend.skills.ultimate.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('show'));
        const closeBtn = overlay.querySelector('.modal-close');
        const closeModal = () => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
        };
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        }, { once: true });
    }

    /* 5. 渲染武器卡片 */
    function renderWeapons(filter = 'all') {
        const grid = document.getElementById('weaponsGrid');
        if (!grid) return;
        const filtered = filter === 'all' ? weaponsData : weaponsData.filter(w => w.type === filter);
        grid.innerHTML = filtered.map(weapon => {
            const typeColor = weaponTypeColors[weapon.type] || '#666';
            return `
                <div class="weapon-card">
                    <div class="weapon-card-header">
                        <h3>${weapon.name}</h3>
                        <span class="weapon-type-badge" style="background: ${typeColor}">${weapon.type}</span>
                    </div>
                    <div class="weapon-damage">
                        <span class="damage-tag">身体 ${weapon.damage.body}</span>
                        <span class="damage-tag" style="background: rgba(230,57,70,0.15); color: #ff6b6b;">头部 ${weapon.damage.head}</span>
                        <span class="damage-tag">腿部 ${weapon.damage.leg}</span>
                        <span class="damage-tag">${weapon.fireRate}</span>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 14px; line-height: 1.6;">${weapon.description}</p>
                    <div class="weapon-stats">
                        <div class="weapon-stat"><span class="weapon-stat-label">弹药类型</span><span class="weapon-stat-value">${weapon.ammo}</span></div>
                        <div class="weapon-stat"><span class="weapon-stat-label">弹匣容量</span><span class="weapon-stat-value">${weapon.magSize}</span></div>
                        <div class="weapon-stat"><span class="weapon-stat-label">射速 (RPM)</span><span class="weapon-stat-value">${weapon.rpm}</span></div>
                        <div class="weapon-stat"><span class="weapon-stat-label">最佳配件</span><span class="weapon-stat-value" style="font-size: 0.75rem;">${weapon.bestAttachments}</span></div>
                    </div>
                    <div style="margin-top: 12px; padding: 10px; background: rgba(230,57,70,0.08); border-radius: 8px; border-left: 3px solid var(--primary);">
                        <p style="color: var(--primary-light); font-size: 0.8rem; font-weight: 500;"><i class="fas fa-lightbulb"></i> 使用小贴士</p>
                        <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 4px;">${weapon.tips}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    /* 6. 渲染地图卡片 */
    function renderMaps() {
        const grid = document.getElementById('mapsGrid');
        if (!grid) return;
        grid.innerHTML = mapsData.map(map => `
            <div class="map-card">
                <div class="map-card-preview" style="background: linear-gradient(135deg, ${map.color}22, ${map.color}44);">
                    <span>${map.icon}</span>
                </div>
                <div class="map-card-body">
                    <h3>${map.name}</h3>
                    <div class="map-env">${map.env}</div>
                    <p class="map-desc">${map.desc}</p>
                    <div style="margin-bottom: 10px;"><span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">🔥 热门区域</span></div>
                    <div class="map-hotzones">${map.hotzones.map(zone => `<span class="hotzone-tag">${zone}</span>`).join('')}</div>
                    <div style="margin-top: 14px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px;">
                        <p style="color: var(--text-secondary); font-size: 0.8rem;"><i class="fas fa-compass" style="color: var(--accent);"></i> ${map.tips}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /* 7. 渲染版本排行 */
    function renderTierlist() {
        const container = document.getElementById('tierlistContainer');
        if (!container) return;
        container.innerHTML = tierlistData.map(tier => `
            <div class="tier-row tier-${tier.tier.toLowerCase()}">
                <div class="tier-row-label">${tier.tier}</div>
                <div class="tier-items">
                    ${tier.legends.map(legend => `
                        <div class="tier-item">
                            <span class="tier-item-icon">${legend.icon}</span>
                            <span class="tier-item-name">${legend.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    /* 8. 过滤器 */
    function initFilters() {
        document.querySelectorAll('.legend-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.legend-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderLegends(btn.dataset.filter);
            });
        });
        document.querySelectorAll('.weapon-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.weapon-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderWeapons(btn.dataset.filter);
            });
        });
    }

    /* 9. 回到顶部 */
    function initBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', () => {
            btn.classList.toggle('show', window.scrollY > 500);
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* 10. 初始化 */
    createParticles();
    initNavbar();
    initBackToTop();
    renderLegends('all');
    renderWeapons('all');
    renderMaps();
    renderTierlist();
    initFilters();

    console.log('✅ APEX 攻略站已加载完成！');
    console.log(`📊 已加载 ${legendsData.length} 位英雄、${weaponsData.length} 件武器、${mapsData.length} 张地图`);
});