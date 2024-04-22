<template>
  <LabelCounterAndHelp />
  <h2 class="font-medium text-xl mb-2">Adresse</h2>
  <hr class="mb-2">
  <div id="manualAddressForm" class="grid grid-cols-6 gap-y-1 gap-x-5">
    <div class="flex flex-col gap-1 mb-2 col-span-4">
      <label for="anrede" class="mx-1">Anrede</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede"
        placeholder="Herr / Frau / Dr. / Firma" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-row gap-1 col-span-2 self-center place-self-end">
      <Checkbox class="" id="private" v-model="isPersonallyAddressed" :binary="true" placeholder="Vorname" />
      <label for="private">Persönliche Anschrift</label>
    </div>
    <div v-if="isPersonallyAddressed" class="flex flex-col gap-1 col-span-3">
      <label for="anrede" class="mx-1">Vorname</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Vorname" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-3">
      <label for="anrede" class="mx-1">Name1</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Nachname / Firmenname" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-3">
      <label for="anrede" class="mx-1">Name2</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name2" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-3">
      <label for="anrede" class="mx-1">Name3</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name3" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-6">
      <label for="anrede" class="mx-1">AdressSuffix</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name3" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-4">
      <label for="anrede" class="mx-1">Strasse</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name2" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-2">
      <label for="anrede" class="mx-1">Hausnummer</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name3" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-4">
      <label for="anrede" class="mx-1">Freitext</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name3" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-2">
      <label for="anrede" class="mx-1">Postfach</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name2" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-1">
      <label for="anrede" class="mx-1">PLZ</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name3" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-3">
      <label for="anrede" class="mx-1">Ort</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name3" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
    <div class="flex flex-col gap-1 col-span-2">
      <label for="anrede" class="mx-1">Land</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" placeholder="Zusatz Name2" />
      <small class="mx-1 text-sm font-light">Darf maximal 35 Zeichen beinhalten</small>
    </div>
  </div>
  <hr class="mt-5 mb-2">
  <h2 class="font-medium text-xl mb-2">Post Dienstleistungen</h2>
  <div id="postalServiceForm" class="grid grid-cols-6 gap-y-1 gap-x-5">
    <div class="flex flex-col gap-1 mb-2 col-span-3">
      <label for="anrede" class="mx-1">Basis Dienstleistungen</label>
      <Dropdown v-model="selBS" :options="baseServices" :optionLabel="`name.${locale}`"
        placeholder="Basis Dienstleistung" class="w-full" />
    </div>
    <div class="flex flex-col gap-1 mb-2">
      <label for="anzahl" class="mx-1">Anzahl</label>
      <InputNumber input-class="w-full" v-model="anzahl" inputId="anzahl" showButtons :min="1" :max="20"
        p-inputnumber-input="w-1" />
    </div>
    <div class="flex flex-col gap-1 mb-2">
      <label for="anrede" class="mx-1">Gewicht</label>
      <InputNumber input-class="w-full" v-model="weight" inputId="weight" showButtons :min="1" :max="30000"
        locale="de-CH" suffix=" g" />
      <small class="mx-1 text-sm font-light">Max. 30'000 g</small>
    </div>
    <div class="flex flex-col gap-1 mb-2">
      <label for="anrede" class="mx-1">Layout Format</label>
      <Dropdown v-model="selBS" :options="layouts" placeholder="A6/A7" class="w-full" />
    </div>
    <div class="flex flex-col gap-1 mb-2 col-span-6">
      <label for="anrede" class="mx-1">Zusätzliche Dienstleistung</label>
      <MultiSelect v-model="selAS" display="chip" :options="additionalServices" :optionLabel="`name.${locale}`"
        placeholder="Zusätzliche Dienstleistung" :maxSelectedLabels="3" class="w-full" />
    </div>
    <div class="flex flex-col gap-1 mb-2 col-span-3">
      <label for="anrede" class="mx-1">Zustellanweisung</label>
      <Dropdown v-model="selZA" :options="deliveryInstructions" placeholder="Zustellanweisung"
        :optionLabel="`name.${locale}`" class="w-full" />
    </div>
    <div class="flex flex-col items-left gap-1 mb-2">
      <label for="GAS">GAS</label>
      <div>
        <Checkbox class="mr-2" v-model="createGAS" :binary="true" />
        <label for="createGAS">GAS erstellen</label>
      </div>
      <div v-if="createGAS">
        <Checkbox class="mr-2" v-model="prioGAS" :binary="true" />
        <label for="prioGAS">Priority GAS</label>
      </div>
    </div>
    <div v-if="createGAS" class="flex flex-col gap-1 mb-2 col-span-2">
      <label for="anrede" class="mx-1">GAS Format</label>
      <Dropdown v-model="selBS" :options="layouts" placeholder="A6/A7" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, inject } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";
import LabelCounterAndHelp from '../sdss/LabelCounterAndHelp.vue'
const $i18n = inject('$i18n')

const { t, locale } = useI18n({ useScope: 'global' })
onMounted(() => {
  console.log(t, locale);
})
const SolSuiteStore = useSolutionsSuiteStore()
const isPersonallyAddressed = ref(false)
const value = ref('')
const selBS = ref()
const selAS = ref()
const selZA = ref()
const weight = ref(0)
const anzahl = ref(1)
const createGAS = ref(false)
const prioGAS = ref(false)

const layouts = ref(['A6', 'A7'])

const baseServices = [
  {
    id: 0,
    value: [],
    name: {
      de: '',
      en: '',
      fr: '',
      it: '',
    },
    GAS: true,
    addService: [],
    delInstructs: [],
  },
  {
    id: 1,
    value: ['ECO'],
    name: {
      de: 'PostPac Economy',
      en: 'PostPac Economy',
      fr: 'PostPac Economy fr',
      it: 'PostPac Economy',
    },
    GAS: true,
    addService: [],
    delInstructs: ['ZAW3211', 'ZAW3212', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 2,
    value: ['PRI'],
    name: {
      de: 'PostPac Priority',
      en: 'PostPac Priority',
      fr: 'PostPac Priority',
      it: 'PostPac Priority',
    },
    GAS: true,
    addService: [
      'FRA',
      'MAN',
      'RMP',
      'SI',
      'AS',
      'COLD',
      'LQ',
      'AMB',
      'DLOG',
      'SA',
      'ZFZ0912',
      'ZFZ1114',
      'ZFZ1217',
      'ZF16302100',
      'ZF16301800',
      'ZF16301800',
      'ZF17301900',
      'ZF18302000',
      'ZF19302100',
    ],
    delInstructs: ['ZAW3211', 'ZAW3212', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 3,
    value: ['ECO', 'SP'],
    name: {
      de: 'Sperrgut Economy',
      en: 'Bulky goods Economy',
      fr: 'Bulky goods Economy',
      it: 'Bulky goods Economy',
    },
    GAS: true,
    addService: [],
    delInstructs: ['ZAW3211', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 4,
    value: ['PRI', 'SP'],
    name: {
      de: 'Sperrgut Priority',
      en: 'Bulky goods Priority',
      fr: 'Bulky goods Priority',
      it: 'Bulky goods Priority',
    },
    GAS: true,
    addService: [
      'FRA',
      'MAN',
      'RMP',
      'SI',
      'AS',
      'COLD',
      'LQ',
      'AMB',
      'DLOG',
      'SA',
      'ZFZ0912',
      'ZFZ1114',
      'ZFZ1217',
      'ZF16302100',
      'ZF16301800',
      'ZF16301800',
      'ZF17301900',
      'ZF18302000',
      'ZF19302100',
    ],
    delInstructs: ['ZAW3211', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 5,
    value: ['SEM'],
    name: {
      de: 'Swiss-Express “Moon”',
      en: 'Swiss-Express “Moon”',
      fr: 'Swiss-Express “Moon”',
      it: 'Swiss-Express “Moon”',
    },
    GAS: true,
    addService: [
      'FRA',
      'MAN',
      'RMP',
      'SI',
      'AS',
      'COLD',
      'LQ',
      'AMB',
      'DLOG',
      'SA',
      'ZFZ0912',
      'ZFZ1114',
      'ZFZ1217',
      'ZF16302100',
      'ZF16301800',
      'ZF16301800',
      'ZF17301900',
      'ZF18302000',
      'ZF19302100',
    ],
    delInstructs: ['ZAW3211', 'ZAW3212', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 6,
    value: ['SEM', 'SP'],
    name: {
      de: 'Sperrgut “Moon”',
      en: 'Bulky goods “Moon”',
      fr: 'Bulky goods “Moon”',
      it: 'Bulky goods “Moon”',
    },
    GAS: false,
    addService: [],
    delInstructs: ['ZAW3211', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 7,
    value: ['SKB'],
    name: {
      de: 'SameDay afternoon/evening',
      en: 'SameDay afternoon/evening',
      fr: 'SameDay afternoon/evening',
      it: 'SameDay afternoon/evening',
    },
    GAS: true,
    addService: [
      'FRA',
      'MAN',
      'RMP',
      'SI',
      'AS',
      'COLD',
      'LQ',
      'AMB',
      'DLOG',
      'SA',
      'ZFZ0912',
      'ZFZ1114',
      'ZFZ1217',
      'ZF16302100',
      'ZF16301800',
      'ZF16301800',
      'ZF17301900',
      'ZF18302000',
      'ZF19302100',
    ],
    delInstructs: ['ZAW3211', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 8,
    value: ['SKB', 'SP'],
    name: {
      de: 'SameDay afternoon/evening Sperrgut',
      en: 'SameDay afternoon/evening bulky goods',
      fr: 'SameDay afternoon/evening bulky goods',
      it: 'SameDay afternoon/evening bulky goods',
    },
    GAS: false,
    addService: [
      'FRA',
      'MAN',
      'RMP',
      'SI',
      'AS',
      'COLD',
      'LQ',
      'AMB',
      'DLOG',
      'SA',
      'ZFZ0912',
      'ZFZ1114',
      'ZFZ1217',
      'ZF16302100',
      'ZF16301800',
      'ZF16301800',
      'ZF17301900',
      'ZF18302000',
      'ZF19302100',
    ],
    delInstructs: ['ZAW3211', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
  {
    id: 9,
    value: ['VL'],
    name: {
      de: 'VinoLog',
      en: 'VinoLog',
      fr: 'VinoLog',
      it: 'VinoLog',
    },
    GAS: false,
    addService: ['SI'],
    delInstructs: ['ZAW3211', 'ZAW3212', 'ZAW3214', 'ZAW3234'],
  },
  {
    id: 10,
    value: ['DIR'],
    name: {
      de: 'Direct parcel posting',
      en: 'Direct parcel posting',
      fr: 'Direct parcel posting',
      it: 'Direct parcel posting',
    },
    GAS: false,
    addService: [
      'SI',
      'ZFZ0912',
      'ZFZ1114',
      'ZFZ1217',
      'ZF16302100',
      'ZF16301800',
      'ZF17301900',
      'ZF18302000',
      'ZF19302100',
    ],
    delInstructs: ['ZAW3212', 'ZAW3214', 'ZAW3215', 'ZAW3234'],
  },
]

const additionalServices = [
  {
    id: 0,
    value: ['FRA'],
    name: {
      de: 'Zerbrechlich',
      en: 'Fragile',
      fr: 'Fragile',
      it: 'Fragile',
    },
  },
  {
    id: 1,
    value: ['MAN'],
    name: {
      de: 'Manuelle Verarbeitung',
      en: 'Manual processing',
      fr: 'Traitement manuel',
      it: 'Lavorazione manuale',
    },
  },
  {
    id: 1,
    value: ['RMP'],
    name: {
      de: 'Persönliche Zustellung',
      en: 'Personal delivery',
      fr: 'Livraison personnelle',
      it: 'Consegna personale',
    },
  },
  {
    id: 3,
    value: ['SI'],
    name: {
      de: 'Unterschrift',
      en: 'Signature',
      fr: 'Signature',
      it: 'Firma',
    },
  },
  {
    id: 4,
    value: ['AS'],
    name: {
      de: 'Unterschrift (Versicherung)',
      en: 'Signature (insurance)',
      fr: 'Signature (assurance)',
      it: 'Firma (assicurazione)',
    },
  },
  {
    id: 5,
    value: ['COLD'],
    name: {
      de: 'ThermoCare Kalt',
      en: 'ThermoCare Cold',
      fr: 'ThermoCare Froid',
      it: 'ThermoCare Freddo',
    },
  },
  {
    id: 6,
    value: ['BLN'],
    name: {
      de: 'Elektronischer Nachnahme',
      en: 'Electronic COD',
      fr: 'Contre remboursement électronique',
      it: 'Contrassegno elettronico',
    },
  },
  {
    id: 7,
    value: ['LQ'],
    name: {
      de: 'Begrenzte Mengen (Gefahrgut)',
      en: 'Limited Quantities (hazardous goods)',
      fr: 'Quantités limitées (marchandises dangereuses)',
      it: 'Quantità limitate (beni pericolosi)',
    },
  },
  {
    id: 8,
    value: ['AMB'],
    name: {
      de: 'ThermoCare Umgebung',
      en: 'ThermoCare Ambient',
      fr: 'ThermoCare Ambiant',
      it: 'ThermoCare Ambiente',
    },
  },
  {
    id: 9,
    value: ['DLOG'],
    name: {
      de: 'Datenlogger',
      en: 'Data logger',
      fr: 'Enregistreur de données',
      it: 'Registratore di dati',
    },
  },
  {
    id: 10,
    value: ['SA'],
    name: {
      de: 'Samstagszustellung',
      en: 'Saturday delivery',
      fr: 'Livraison le samedi',
      it: 'Consegna il sabato',
    },
  },
  {
    id: 11,
    value: ['ZFZ0912'],
    name: {
      de: 'Zeitfensterzustellung 9–12 Uhr',
      en: 'Time slot delivery 9–12',
      fr: 'Livraison sur créneau horaire 9–12',
      it: 'Consegna in fascia oraria 9–12',
    },
  },

  {
    id: 12,
    value: ['ZFZ1114'],
    name: {
      de: 'Zeitfensterzustellung 11–14 Uhr',
      en: 'Time slot delivery 11–14',
      fr: 'Livraison sur créneau horaire 11–14',
      it: 'Consegna in fascia oraria 11–14',
    },
  },

  {
    id: 13,
    value: ['ZFZ1217'],
    name: {
      de: 'Zeitfensterzustellung 12–17 Uhr',
      en: 'Time slot delivery 12–17',
      fr: 'Livraison sur créneau horaire 12–17',
      it: 'Consegna in fascia oraria 12–17',
    },
  },

  {
    id: 14,
    value: ['ZF16302100'],
    name: {
      de: 'Zeitfensterzustellung 16:30–21 Uhr',
      en: 'Time slot delivery 16:30–21',
      fr: 'Livraison sur créneau horaire 16:30–21',
      it: 'Consegna in fascia oraria 16:30–21',
    },
  },

  {
    id: 15,
    value: ['ZF16301800'],
    name: {
      de: 'Zeitfensterzustellung 16:30–18 Uhr',
      en: 'Time slot delivery 16:30–18',
      fr: 'Livraison sur créneau horaire 16:30–18',
      it: 'Consegna in fascia oraria 16:30–18',
    },
  },

  {
    id: 16,
    value: ['ZF17301900'],
    name: {
      de: 'Zeitfensterzustellung 17:30–19 Uhr',
      en: 'Time slot delivery 17:30–19',
      fr: 'Livraison sur créneau horaire 17:30–19',
      it: 'Consegna in fascia oraria 17:30–19',
    },
  },

  {
    id: 17,
    value: ['ZF18302000'],
    name: {
      de: 'Zeitfensterzustellung 18:30–20 Uhr',
      en: 'Time slot delivery 18:30–20',
      fr: 'Livraison sur créneau horaire 18:30–20',
      it: 'Consegna in fascia oraria 18:30–20',
    },
  },

  {
    id: 18,
    value: ['ZF19302100'],
    name: {
      de: 'Zeitfensterzustellung 19:30–21 Uhr',
      en: 'Time slot delivery 19:30–21',
      fr: 'Livraison sur créneau horaire 19:30–21',
      it: 'Consegna in fascia oraria 19:30–21',
    },
  },
]

const deliveryInstructions = [
  {
    id: -1,
    value: [],
    name: {
      de: '',
      en: '',
      fr: '',
      it: '',
    },
  },
  {
    id: 0,
    value: ['ZAW3211'],
    name: {
      de: 'A - Sendung dem Empfanger direkt auf der Etage zustellen',
      en: 'A - Direct delivery to an upper floor',
      fr: "A - Distribuer I'envoi au destinaire directement a létage",
      it: "A - Recapitare T'invio al destinatario direttamente al suo piano",
    },
  },
  {
    id: 1,
    value: ['ZAW3212'],
    name: {
      de: 'B - Nicht in den Briefkasten einwerfen; manuell zustellen oder benachrichtigen',
      en: 'B - Do not place in letterbox; deliver manually or notify',
      fr: 'B - Do not place in letterbox; deliver manually or notify',
      it: 'B - Do not place in letterbox; deliver manually or notify',
    },
  },
  {
    id: 2,
    value: ['ZAW3213'],
    name: {
      de: 'C - Notify delivery by telephone',
      en: 'C - Notify delivery by telephone',
      fr: 'C - Notify delivery by telephone',
      it: 'C - Notify delivery by telephone',
    },
  },
  {
    id: 3,
    value: ['ZAW3214'],
    name: {
      de: 'D - In den Briefkasten oder an die Haustür legen',
      en: 'D - Place in letterbox or at front door',
      fr: 'D - Place in letterbox or at front door',
      it: 'D - Place in letterbox or at front door',
    },
  },
  {
    id: 4,
    value: ['ZAW3215'],
    name: {
      de: 'K - Inhalt ausliefern; Karton zurücknehmen',
      en: 'K - Deliver contents; take back box',
      fr: 'K - Deliver contents; take back box',
      it: 'K - Deliver contents; take back box',
    },
  },
  {
    id: 5,
    value: ['ZAW3216'],
    name: {
      de: 'E - Failed delivery; return item as priority on the same day',
      en: 'E - Failed delivery; return item as priority on the same day',
      fr: 'E - Failed delivery; return item as priority on the same day',
      it: 'E - Failed delivery; return item as priority on the same day',
    },
  },
  {
    id: 6,
    value: ['ZAW3217'],
    name: {
      de: 'F - Specific delivery date, deliver on ...',
      en: 'F - Specific delivery date, deliver on ...',
      fr: 'F - Specific delivery date, deliver on ...',
      it: 'F - Specific delivery date, deliver on ...',
    },
  },
  {
    id: 7,
    value: ['ZAW3218'],
    name: {
      de: 'G - Deliver when all items have arrived',
      en: 'G - Deliver when all items have arrived',
      fr: 'G - Deliver when all items have arrived',
      it: 'G - Deliver when all items have arrived',
    },
  },
  {
    id: 8,
    value: ['ZAW3219'],
    name: {
      de: 'H - Deposit item',
      en: 'H - Deposit item',
      fr: 'H - Deposit item',
      it: 'H - Deposit item',
    },
  },
  {
    id: 9,
    value: ['ZAW3220'],
    name: {
      de: 'I - Follow delivery information in document pouch',
      en: 'I - Follow delivery information in document pouch',
      fr: 'I - Follow delivery information in document pouch',
      it: 'I - Follow delivery information in document pouch',
    },
  },
  {
    id: 10,
    value: ['ZAW3222'],
    name: {
      de: 'L - Present item; leave in cellar',
      en: 'L - Present item; leave in cellar',
      fr: 'L - Present item; leave in cellar',
      it: 'L - Present item; leave in cellar',
    },
  },
  {
    id: 11,
    value: ['ZAW3234'],
    name: {
      de: 'J - Nicht in den Briefkasten oder beim Nachbarn  abgeben: nirgendwo hinterlassen',
      en: 'J - Do not deliver to mailbox or neighbour: do not leave anywhere',
      fr: 'J - Do not deliver to mailbox or neighbour: do not leave anywhere',
      it: 'J - Do not deliver to mailbox or neighbour: do not leave anywhere',
    },
  },
]

</script>