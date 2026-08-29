// Google Maps & Coordinate Search Tool with Toggle Mode for OpenLayers / qgis2web
(function() {
    window.addEventListener('DOMContentLoaded', function() {
        if (typeof map === 'undefined') return;

        var isCoordModeActive = false;

        // 1. Create Floating Search Bar & Toggle Button
        var searchContainer = document.createElement('div');
        searchContainer.id = 'coord-search-widget';
        searchContainer.style.cssText = `
            position: absolute;
            top: 15px;
            left: 60px;
            z-index: 1000;
            display: flex;
            gap: 6px;
            background: rgba(255, 255, 255, 0.95);
            padding: 6px 12px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            border: 1px solid #cbd5e1;
            font-family: 'Prompt', Sarabun, sans-serif;
            align-items: center;
            flex-wrap: wrap;
        `;

        searchContainer.innerHTML = `
            <button id="coord-toggle-btn" style="
                background: #f1f5f9;
                color: #334155;
                border: 1px solid #94a3b8;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: all 0.2s ease;
            ">
                <span id="coord-toggle-icon">📍</span>
                <span id="coord-toggle-text">เปิดโหมดจิ้มพิกัด & Google Maps</span>
            </button>

            <div style="width: 1px; height: 24px; background: #cbd5e1; margin: 0 4px;"></div>

            <input type="text" id="coord-search-input" placeholder="พิมพ์พิกัด เช่น 13.3611, 100.9847" style="
                border: 1px solid #94a3b8;
                padding: 6px 10px;
                border-radius: 6px;
                font-size: 13px;
                width: 220px;
                outline: none;
            " />
            <button id="coord-search-btn" style="
                background: #2563eb;
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
            ">ค้นหา</button>
            <button id="coord-clear-btn" style="
                background: #f1f5f9;
                color: #475569;
                border: 1px solid #cbd5e1;
                padding: 6px 10px;
                border-radius: 6px;
                font-size: 13px;
                cursor: pointer;
            ">ล้าง</button>
        `;

        document.body.appendChild(searchContainer);

        // 2. Pin Layer for Searched / Clicked Location
        var pinSource = new ol.source.Vector();
        var pinLayer = new ol.layer.Vector({
            source: pinSource,
            zIndex: 9999,
            style: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 9,
                    fill: new ol.style.Fill({ color: '#ef4444' }),
                    stroke: new ol.style.Stroke({ color: '#ffffff', width: 3 })
                })
            })
        });
        map.addLayer(pinLayer);

        // 3. Helper to format coordinate card with Google Maps & Street View Links
        window.createCoordInfoCard = function(lat, lon, extraTitle) {
            var latStr = lat.toFixed(6);
            var lonStr = lon.toFixed(6);
            var gmapUrl = `https://www.google.com/maps?q=${latStr},${lonStr}`;
            var streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latStr},${lonStr}`;

            return `
                <div style="padding:10px; background:#ffffff; border-radius:8px; font-family:'Prompt', sans-serif; min-width: 200px;">
                    ${extraTitle ? `<div style="font-weight:bold; color:#1e293b; font-size:14px; margin-bottom:6px; border-bottom:1px solid #e2e8f0; padding-bottom:4px;">${extraTitle}</div>` : ''}
                    <div style="font-size:12px; color:#475569; font-weight:600;">📍 พิกัดภูมิศาสตร์ (WGS 84):</div>
                    <div style="font-size:13px; font-weight:bold; color:#0f172a; margin:4px 0 8px 0; font-family:monospace; background:#f1f5f9; padding:4px 6px; border-radius:4px;">
                        ${latStr}, ${lonStr}
                    </div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                        <a href="${gmapUrl}" target="_blank" style="
                            display:inline-flex; align-items:center; gap:4px;
                            padding:5px 9px; background:#2563eb; color:white;
                            border-radius:5px; text-decoration:none; font-size:11px; font-weight:600;
                        ">🗺️ Google Maps</a>
                        <a href="${streetViewUrl}" target="_blank" style="
                            display:inline-flex; align-items:center; gap:4px;
                            padding:5px 9px; background:#059669; color:white;
                            border-radius:5px; text-decoration:none; font-size:11px; font-weight:600;
                        ">🚗 Street View</a>
                        <button onclick="navigator.clipboard.writeText('${latStr}, ${lonStr}'); alert('คัดลอกพิกัดเรียบร้อย: ${latStr}, ${lonStr}');" style="
                            padding:5px 9px; background:#ffffff; color:#334155;
                            border:1px solid #94a3b8; border-radius:5px; cursor:pointer; font-size:11px; font-weight:600;
                        ">📋 ก๊อปปี้</button>
                    </div>
                </div>
            `;
        };

        // 4. Toggle Button Behavior
        var toggleBtn = document.getElementById('coord-toggle-btn');
        var toggleText = document.getElementById('coord-toggle-text');
        var toggleIcon = document.getElementById('coord-toggle-icon');
        var viewport = map.getViewport();

        function setCoordMode(active) {
            isCoordModeActive = active;
            if (isCoordModeActive) {
                toggleBtn.style.background = '#059669';
                toggleBtn.style.color = '#ffffff';
                toggleBtn.style.borderColor = '#047857';
                toggleText.innerText = 'โหมดจิ้มพิกัด: เปิดใช้งานอยู่ (คลิกบนแผนที่ได้เลย)';
                toggleIcon.innerText = '🎯';
                viewport.style.cursor = 'crosshair';
            } else {
                toggleBtn.style.background = '#f1f5f9';
                toggleBtn.style.color = '#334155';
                toggleBtn.style.borderColor = '#94a3b8';
                toggleText.innerText = 'เปิดโหมดจิ้มพิกัด & Google Maps';
                toggleIcon.innerText = '📍';
                viewport.style.cursor = 'default';
            }
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                setCoordMode(!isCoordModeActive);
            });
        }

        // 5. Function to Go to Coordinate from Search Box
        function goToCoordinate(inputVal) {
            if (!inputVal) return;
            var clean = inputVal.replace(/[,;]/g, ' ').trim();
            var parts = clean.split(/\s+/).filter(Boolean);
            if (parts.length < 2) {
                alert('กรุณาใส่พิกัด ละติจูด, ลองจิจูด ให้ถูกต้อง เช่น\n13.3611, 100.9847');
                return;
            }

            var lat = parseFloat(parts[0]);
            var lon = parseFloat(parts[1]);

            if (lat > 50 && lon < 50) {
                var temp = lat; lat = lon; lon = temp;
            }

            if (isNaN(lat) || isNaN(lon)) {
                alert('รูปแบบตัวเลขพิกัดไม่ถูกต้อง');
                return;
            }

            var targetCoord = ol.proj.fromLonLat([lon, lat]);

            pinSource.clear();
            var pinFeature = new ol.Feature({
                geometry: new ol.geom.Point(targetCoord)
            });
            pinSource.addFeature(pinFeature);

            map.getView().animate({
                center: targetCoord,
                zoom: 16,
                duration: 800
            });

            setTimeout(function() {
                var contentElem = document.getElementById('popup-content');
                var containerElem = document.getElementById('popup');
                if (contentElem && containerElem) {
                    contentElem.innerHTML = window.createCoordInfoCard(lat, lon, '🎯 ผลการค้นหาพิกัด');
                    containerElem.style.display = 'block';
                    overlayPopup.setPosition(targetCoord);
                }
            }, 850);
        }

        var searchBtn = document.getElementById('coord-search-btn');
        var searchInput = document.getElementById('coord-search-input');
        var clearBtn = document.getElementById('coord-clear-btn');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', function() {
                goToCoordinate(searchInput.value);
            });
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    goToCoordinate(searchInput.value);
                }
            });
        }
        if (clearBtn && pinSource) {
            clearBtn.addEventListener('click', function() {
                searchInput.value = '';
                pinSource.clear();
                var containerElem = document.getElementById('popup');
                if (containerElem) containerElem.style.display = 'none';
            });
        }

        // 6. Map Singleclick Listener: ONLY runs when Coordinate Mode is ON!
        map.on('singleclick', function(evt) {
            if (!isCoordModeActive) {
                return;
            }

            var coord = evt.coordinate;
            var lonLat = ol.proj.toLonLat(coord);
            var lon = lonLat[0];
            var lat = lonLat[1];

            pinSource.clear();
            var pinFeature = new ol.Feature({
                geometry: new ol.geom.Point(coord)
            });
            pinSource.addFeature(pinFeature);

            setTimeout(function() {
                var contentElem = document.getElementById('popup-content');
                var containerElem = document.getElementById('popup');
                if (contentElem && containerElem) {
                    contentElem.innerHTML = window.createCoordInfoCard(lat, lon, '📍 พิกัดตำแหน่งที่คลิก');
                    containerElem.style.display = 'block';
                    overlayPopup.setPosition(coord);
                }
            }, 100);
        });
    });
})();
