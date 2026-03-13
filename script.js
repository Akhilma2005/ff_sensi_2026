const deviceImages = {
    samsung: 'images/samsung.jpeg',
    iphone: 'images/iphone.jpeg',
    xiaomi: 'images/xiamo.jpeg',
    redmi: 'images/redmi.jpeg',
    vivo: 'images/vivo.jpg',
    oppo: 'images/OPPO.jpeg',
    realme: 'images/realme.jpeg',
    oneplus: 'images/1plus.jpeg',
    motorola: 'images/Motorola.jpeg',
    nothing: 'images/Nothng.jpg',
    pixel: 'images/gooflepixel.jpeg',
    honor: 'images/honor.jpeg',
    infinix: 'images/infinix copy.jpeg',
    tecno: 'images/tecno.jpeg',
    iqoo: 'images/IQOO.png',
    asus: 'images/asus rog.jpeg'
};

const deviceSensitivity = {
    samsung: {
        general: 195,
        redDot: 178,
        scope2x: 158,
        scope4x: 138,
        awm: 100,
        freeLook: 130
    },
    iphone: {
        general: 190,
        redDot: 175,
        scope2x: 155,
        scope4x: 135,
        awm: 95,
        freeLook: 125
    },
    xiaomi: {
        general: 192,
        redDot: 180,
        scope2x: 160,
        scope4x: 140,
        awm: 98,
        freeLook: 128
    },
    redmi: {
        general: 194,
        redDot: 182,
        scope2x: 162,
        scope4x: 142,
        awm: 100,
        freeLook: 130
    },
    vivo: {
        general: 193,
        redDot: 181,
        scope2x: 161,
        scope4x: 141,
        awm: 99,
        freeLook: 129
    },
    oppo: {
        general: 192,
        redDot: 179,
        scope2x: 159,
        scope4x: 139,
        awm: 97,
        freeLook: 127
    },
    realme: {
        general: 195,
        redDot: 182,
        scope2x: 162,
        scope4x: 142,
        awm: 101,
        freeLook: 131
    },
    oneplus: {
        general: 190,
        redDot: 176,
        scope2x: 156,
        scope4x: 136,
        awm: 95,
        freeLook: 125
    },
    motorola: {
        general: 188,
        redDot: 174,
        scope2x: 154,
        scope4x: 134,
        awm: 93,
        freeLook: 123
    },
    nothing: {
        general: 191,
        redDot: 177,
        scope2x: 157,
        scope4x: 137,
        awm: 96,
        freeLook: 126
    },
    pixel: {
        general: 189,
        redDot: 175,
        scope2x: 155,
        scope4x: 135,
        awm: 94,
        freeLook: 124
    },
    honor: {
        general: 193,
        redDot: 180,
        scope2x: 160,
        scope4x: 140,
        awm: 98,
        freeLook: 128
    },
    infinix: {
        general: 197,
        redDot: 184,
        scope2x: 164,
        scope4x: 144,
        awm: 103,
        freeLook: 133
    },
    tecno: {
        general: 198,
        redDot: 185,
        scope2x: 165,
        scope4x: 145,
        awm: 104,
        freeLook: 134
    },
    iqoo: {
        general: 196,
        redDot: 183,
        scope2x: 163,
        scope4x: 143,
        awm: 102,
        freeLook: 132
    },
    asus: {
        general: 187,
        redDot: 172,
        scope2x: 152,
        scope4x: 132,
        awm: 92,
        freeLook: 122
    }
};

const deviceNames = {
    samsung: 'Samsung Galaxy',
    iphone: 'iPhone',
    xiaomi: 'Xiaomi/POCO',
    redmi: 'Redmi',
    vivo: 'Vivo',
    oppo: 'OPPO',
    realme: 'Realme',
    oneplus: 'OnePlus',
    motorola: 'Motorola',
    nothing: 'Nothing',
    pixel: 'Google Pixel',
    honor: 'Honor',
    infinix: 'Infinix',
    tecno: 'Tecno',
    iqoo: 'iQOO',
    asus: 'Asus ROG'
};

const selectionSection = document.getElementById('selectionSection');
const sensiDisplay = document.getElementById('sensiDisplay');
const deviceTitle = document.getElementById('deviceTitle');
const backBtn = document.getElementById('backBtn');
const downloadBtn = document.getElementById('downloadBtn');
const loadingScreen = document.getElementById('loadingScreen');
const loadingDeviceName = document.getElementById('loadingDeviceName');
const loadingDeviceIcon = document.getElementById('loadingDeviceIcon');
const titleDeviceIcon = document.getElementById('titleDeviceIcon');

let currentDevice = '';

document.querySelectorAll('.device-option').forEach(option => {
    option.addEventListener('click', function() {
        const device = this.getAttribute('data-device');
        currentDevice = device;
        showLoadingScreen(device);
    });
});

function showLoadingScreen(device) {
    loadingDeviceName.textContent = deviceNames[device];
    loadingDeviceIcon.src = deviceImages[device];
    loadingDeviceIcon.alt = deviceNames[device];
    loadingScreen.classList.add('active');
    
    setTimeout(() => {
        loadingScreen.classList.remove('active');
        showSensiImage(device);
    }, 3000);
}

function showSensiImage(device) {
    deviceTitle.textContent = `${deviceNames[device]} Sensitivity Settings`;
    titleDeviceIcon.src = deviceImages[device];
    titleDeviceIcon.alt = deviceNames[device];
    
    const sensiDetails = document.getElementById('sensiDetails');
    const sensitivity = deviceSensitivity[device];
    
    if (sensitivity) {
        sensiDetails.innerHTML = `
            <div class="sensi-item">
                <span>General</span>
                <strong>${sensitivity.general}</strong>
            </div>
            <div class="sensi-item">
                <span>Red Dot</span>
                <strong>${sensitivity.redDot}</strong>
            </div>
            <div class="sensi-item">
                <span>2x Scope</span>
                <strong>${sensitivity.scope2x}</strong>
            </div>
            <div class="sensi-item">
                <span>4x Scope</span>
                <strong>${sensitivity.scope4x}</strong>
            </div>
            <div class="sensi-item">
                <span>AWM Scope</span>
                <strong>${sensitivity.awm}</strong>
            </div>
            <div class="sensi-item">
                <span>Free Look</span>
                <strong>${sensitivity.freeLook}</strong>
            </div>
        `;
        sensiDetails.style.display = 'block';
    } else {
        sensiDetails.style.display = 'none';
    }
    
    selectionSection.style.display = 'none';
    sensiDisplay.classList.add('active');
    
    setTimeout(() => {
        sensiDetails.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

backBtn.addEventListener('click', function() {
    sensiDisplay.classList.remove('active');
    selectionSection.style.display = 'block';
});

downloadBtn.addEventListener('click', function() {
    const sensitivity = deviceSensitivity[currentDevice];
    const deviceName = deviceNames[currentDevice];
    
    const text = `${deviceName} Sensitivity Settings\n\nGeneral: ${sensitivity.general}\nRed Dot: ${sensitivity.redDot}\n2x Scope: ${sensitivity.scope2x}\n4x Scope: ${sensitivity.scope4x}\nAWM Scope: ${sensitivity.awm}\nFree Look: ${sensitivity.freeLook}`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${currentDevice}-sensitivity.txt`;
    link.click();
});
