/*
    Klasy: cwiczenia,
             komputerowe,
             wyklad,
             laby,
             zdalnie,
*/

let plan_parzysty = [
    [
        // PONIEDZIAŁEK
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['PodsRob W', 'A123', 'wyklad', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob W', 'A123', 'wyklad', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob W', 'A123', 'wyklad', 'dr inż. Marta Góra-Maniowska'],
        ['Ster pc W', 'A123', 'wyklad', 'dr inż. Adam Słota , prof. PK '],
        ['Ster pc W', 'A123', 'wyklad', 'dr inż. Adam Słota , prof. PK '],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // WTOREK
        ['LUSMiUrz L', 'A302', 'laby', 'dr inż. Stanisław Piotr Krenich '],
        ['LUSMiUrz L', 'A302', 'laby', 'dr inż. Stanisław Piotr Krenich '],
        ['PKM L', 'B208', 'laby', 'dr inż. Marcin Jan Augustyn'],
        ['PKM L', 'B208', 'laby', 'dr inż. Marcin Jan Augustyn'],
        ['PodsRob P', 'A302', 'projekt', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob P', 'A302', 'projekt', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob P', 'A302', 'projekt', 'dr inż. Marta Góra-Maniowska'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // ŚRODA
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['LUSMiUrz P', 'teams', 'projekt', 'dr inż. Marcin Stanisław Morawski'],
        ['LUSMiUrz P', 'teams', 'projekt', 'dr inż. Marcin Stanisław Morawski'],
        ['IntPrzem W', 'zoom', 'wyklad', 'dr hab. inż. Ksenia Irena Ostrowska , prof. PK'],
        ['IntPrzem W', 'zoom', 'wyklad', 'dr hab. inż. Ksenia Irena Ostrowska , prof. PK'],
        ['IntPrzem W', 'zoom', 'wyklad', 'dr hab. inż. Ksenia Irena Ostrowska , prof. PK'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // CZWARTEK
        ['SterDrg W', 'A437', 'wyklad', 'dr inż. Tomasz Piotr Goik'],
        ['SterDrg W', 'A437', 'wyklad', 'dr inż. Tomasz Piotr Goik'],
        ['MiUTech W', 'C04', 'wyklad', 'prof. dr hab. inż. Józef Gawlik'],
        ['MiUTech W', 'C04', 'wyklad', 'prof. dr hab. inż. Józef Gawlik'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['IntPrzem L', 'B112', 'laby', 'Przemysław Zięba'],
        ['IntPrzem L', 'B112', 'laby', 'Przemysław Zięba'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['Ster pc Ć', 'A502', 'cwiczenia', 'dr inż. Adam Słota , prof. PK'],
        ['Ster pc Ć', 'A502', 'cwiczenia', 'dr inż. Adam Słota , prof. PK'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // PIĄTEK
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
];

let plan_nieparzysty = [
    [
        // PONIEDZIAŁEK
        ['EAutPrz W', 'A123', 'wyklad', 'dr inż. Marcin Michał Malec'],
        ['EAutPrz W', 'A123', 'wyklad', 'dr inż. Marcin Michał Malec'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['EAutPrz L', 'B102', 'laby', 'dr inż. Marcin Michał Malec'],
        ['EAutPrz L', 'B102', 'laby', 'dr inż. Marcin Michał Malec'],
        ['PodsRob W', 'A123', 'wyklad', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob W', 'A123', 'wyklad', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob W', 'A123', 'wyklad', 'dr inż. Marta Góra-Maniowska'],
        ['Ster pc W', 'A123', 'wyklad', 'dr inż. Adam Słota , prof. PK '],
        ['Ster pc W', 'A123', 'wyklad', 'dr inż. Adam Słota , prof. PK '],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // WTOREK
        ['LUSMiUrz L', 'A302', 'laby', 'dr inż. Stanisław Piotr Krenich '],
        ['LUSMiUrz L', 'A302', 'laby', 'dr inż. Stanisław Piotr Krenich '],
        ['SterDrg L', 'B204', 'laby', 'dr inż. Tomasz Piotr Goik'],
        ['SterDrg L', 'B204', 'laby', 'dr inż. Tomasz Piotr Goik'],
        ['MiUTech P', 'B03', 'projekt', 'dr inż. Marcin Tomasz Grabowski'],
        ['MiUTech P', 'B03', 'projekt', 'dr inż. Marcin Tomasz Grabowski'],
        ['WprMES P', 'A631', 'projekt', 'dr inż. Łukasz Jerzy Łacny'],
        ['WprMES P', 'A631', 'projekt', 'dr inż. Łukasz Jerzy Łacny'],
        ['PKM P', 'B216', 'projekt', 'mgr inż. Patrycja Justyna Chorąży'],
        ['PKM P', 'B216', 'projekt', 'mgr inż. Patrycja Justyna Chorąży'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // ŚRODA
        ['Ster pc Ć', 'teams', 'cwiczenia', 'dr inż. Adam Słota , prof. PK'],
        ['Ster pc Ć', 'teams', 'cwiczenia', 'dr inż. Adam Słota , prof. PK'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['IntPrzem P', 'teams', 'projekt', 'prof. zw. dr hab. inż. Grzegorz Sokal'],
        ['IntPrzem P', 'teams', 'projekt', 'prof. zw. dr hab. inż. Grzegorz Sokal'],
        ['LUSMiUrz W', 'teams', 'wyklad', 'dr inż. Marcin Stanisław Morawski'],
        ['LUSMiUrz W', 'teams', 'wyklad', 'dr inż. Marcin Stanisław Morawski'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // CZWARTEK
        ['WprMES W', 'A123', 'wyklad', 'dr hab. inż. Jan Jerzy Bielski , prof. PK'],
        ['WprMES W', 'A123', 'wyklad', 'dr hab. inż. Jan Jerzy Bielski , prof. PK'],
        ['MiUTech W', 'C04', 'wyklad', 'prof. dr hab. inż. Józef Gawlik'],
        ['MiUTech W', 'C04', 'wyklad', 'prof. dr hab. inż. Józef Gawlik'],
        ['PKM W', 'C04', 'wyklad', 'dr inż. Paweł Janusz Romanowicz'],
        ['PKM W', 'C04', 'wyklad', 'dr inż. Paweł Janusz Romanowicz'],
        ['PodsRob L', 'E09', 'laby', 'dr inż. Marta Góra-Maniowska'],
        ['PodsRob L', 'E09', 'laby', 'dr inż. Marta Góra-Maniowska'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    [
        // PIĄTEK
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
];
