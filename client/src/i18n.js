import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Create Room": "Create Room",
      "Enter Room ID": "Enter Room ID",
      "Join Room": "Join Room",
      "Copied": "Copied",
      "Room ID copied to clipboard": "Room ID copied to clipboard",
      "File Loaded": "File Loaded",
      "Generate Code": "Generate Code",
      "Save Code": "Save Code",
      "Join Room Request": "Join Room Request",
      "Cancel": "Cancel",
      "Approve": "Approve",
      "Success": "Success",
      "Code and output saved successfully": "Code and output saved successfully",
      "Error": "Error",
      "Failed to save code and output": "Failed to save code and output",
    },
  },
  fr: {
    translation: {
      "Create Room": "Créer une salle",
      "Enter Room ID": "Entrer l'ID de la salle",
      "Join Room": "Rejoindre la salle",
      "Copied": "Copié",
      "Room ID copied to clipboard": "ID de la salle copié dans le presse-papiers",
      "File Loaded": "Fichier chargé",
      "Generate Code": "Générer le code",
      "Save Code": "Enregistrer le code",
      "Join Room Request": "Demande de rejoindre la salle",
      "Cancel": "Annuler",
      "Approve": "Approuver",
      "Success": "Succès",
      "Code and output saved successfully": "Code et sortie enregistrés avec succès",
      "Error": "Erreur",
      "Failed to save code and output": "Échec de l'enregistrement du code et de la sortie",
    },
  },
  es: {
    translation: {
      "Create Room": "Crear sala",
      "Enter Room ID": "Ingresar ID de sala",
      "Join Room": "Unirse a la sala",
      "Copied": "Copiado",
      "Room ID copied to clipboard": "ID de sala copiado al portapapeles",
      "File Loaded": "Archivo cargado",
      "Generate Code": "Generar código",
      "Save Code": "Guardar código",
      "Join Room Request": "Solicitud de unirse a la sala",
      "Cancel": "Cancelar",
      "Approve": "Aprobar",
      "Success": "Éxito",
      "Code and output saved successfully": "Código y salida guardados con éxito",
      "Error": "Error",
      "Failed to save code and output": "No se pudo guardar el código y la salida",
    },
  },

  hi: {
    translation: {
      "Create Room": "कक्ष बनाएँ",
      "Join Room": "कक्ष में शामिल हों",
      "Enter Room ID": "कक्ष आईडी दर्ज करें",
      "Copy Room ID": "कक्ष आईडी कॉपी करें",
      "Copied": "कॉपी किया गया",
      "Room ID copied to clipboard": "कक्ष आईडी क्लिपबोर्ड पर कॉपी की गई",
      "Failed to copy room ID": "कक्ष आईडी कॉपी करने में विफल",
      "Error": "त्रुटि",
      "Room Created": "कक्ष बनाया गया",
      "Room ID": "कक्ष आईडी",
      "Join Room Request": "कक्ष में शामिल होने का अनुरोध",
      "User": "उपयोगकर्ता",
      "wants to join room": "कक्ष में शामिल होना चाहता है",
      "Approve": "स्वीकृत करें",
      "Cancel": "रद्द करें",
      "Joined Room": "कक्ष में शामिल हुए",
      "You have joined room": "आप कक्ष में शामिल हो गए हैं",
      "New Participant": "नया प्रतिभागी",
      "User has joined the room": "उपयोगकर्ता कक्ष में शामिल हो गया है",
      "File Loaded": "फाइल लोड की गई",
      "File has been loaded": "फाइल लोड की गई है",
      "Generate Code": "कोड उत्पन्न करें",
      "Save Code": "कोड सहेजें",
      "Success": "सफलता",
      "Code and output saved successfully": "कोड और आउटपुट सफलतापूर्वक सहेजा गया",
      "User ID or generated code is missing": "उपयोगकर्ता आईडी या उत्पन्न कोड गायब है",
      "Error saving code and output": "कोड और आउटपुट सहेजने में त्रुटि",
      "Failed to save code and output": "कोड और आउटपुट सहेजने में विफल",
    }
  }

};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
