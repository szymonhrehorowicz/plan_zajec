let week_type = [0, 'nieparzysty'];

let start_date = new Date('October 2, 2023 00:00:00');
let ms_in_week = 604800000;

if (Math.floor(((Date.now()) - start_date.valueOf()) / ms_in_week) % 2 == 0) {
    week_type = [0, 'parzysty'];
} else {
    week_type = [1, 'nieparzysty'];
}

document.getElementById('week_type').textContent = week_type[1];

let button = document.getElementById('change_week');
button.addEventListener('click', () => {
    week_type[0] == 0 ? (week_type = [1, 'nieparzysty']) : (week_type = [0, 'parzysty']);
    print_table(week_type);
});

let print_table = (week_type) => {
    let plan = week_type[0] == 0 ? plan_parzysty: plan_nieparzysty;
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 16; i++) {
            let cell = document.getElementById(`${i}_${j}`);
            cell.innerHTML = plan[j][i][0];
            cell.dataset.place = plan[j][i][1];
            cell.className = 'cell ' + plan[j][i][2];
            cell.dataset.leader = plan[j][i][3];
            button.innerHTML = week_type[1];
            if (plan[j][i][0] !== '') {
                let tooltip = document.createElement('span');
                let sala = cell.dataset.place;
                let places = ['zoom', 'delta', 'teams'];
                if (places.includes(sala)) {
                    sala = `<a href="${plan[j][i][4]}" target="_blank"><img class="icon_img" src="./media/${cell.dataset.place}.png" alt="${cell.dataset.place}"/></a>`;
                }
                tooltip.id = `tooltip_${i}_${j}`;
                tooltip.className = 'tooltip';
                tooltip.innerHTML = `Sala: ${sala} Prowadzący: ${cell.dataset.leader}`;
                cell.insertAdjacentElement('afterbegin', tooltip);
            }
        }
    }
};

print_table(week_type);
