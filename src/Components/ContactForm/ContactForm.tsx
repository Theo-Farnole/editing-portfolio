import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';

interface FormData {
    email: string;
    nom: string;
    sujet: string;
    message: string;
}

interface FormErrors {
    email?: string;
    nom?: string;
    sujet?: string;
    message?: string;
}

interface SubmitStatus {
    success: boolean;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        nom: '',
        sujet: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

    // Validation en temps réel
    useEffect(() => {
        const errors: FormErrors = {};
        if (formData.email && !validateEmail(formData.email)) {
            errors.email = "Format d'email invalide.";
        }
        if (!formData.nom.trim()) {
            errors.nom = "Ce champ est obligatoire.";
        }
        if (!formData.sujet) {
            errors.sujet = "Ce champ est obligatoire.";
        }
        if (!formData.message.trim()) {
            errors.message = "Ce champ est obligatoire.";
        }
        setFormErrors(errors);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTouched({ email: true, nom: true, sujet: true, message: true });
        // Vérification finale avant envoi
        const errors: FormErrors = {};
        if (!validateEmail(formData.email)) {
            errors.email = "Format d'email invalide.";
        }
        if (!formData.nom.trim()) {
            errors.nom = "Ce champ est obligatoire.";
        }
        if (!formData.sujet) {
            errors.sujet = "Ce champ est obligatoire.";
        }
        if (!formData.message.trim()) {
            errors.message = "Ce champ est obligatoire.";
        }
        setFormErrors(errors);

        // Si des erreurs, on ne soumet pas
        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        try {
            // Remplace par ton endpoint Formspree ou backend
            const response = await fetch('https://formspree.io/f/TON_ID_DE_FORM', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmitStatus({ success: true, message: "Merci ! Votre message a été envoyé." });
                setFormData({ email: '', nom: '', sujet: '', message: '' });
                setIsSubmitted(false);
                setTouched({});
            } else {
                setSubmitStatus({ success: false, message: "Une erreur est survenue. Veuillez réessayer." });
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: "Erreur réseau. Veuillez vérifier votre connexion." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactFormContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formInput} ${formErrors.email && (touched.email || isSubmitted) ? styles.errorInput : ''}`}
                        placeholder="votre@email.com"
                    />
                    {formErrors.email && (touched.email || isSubmitted) && (
                        <span className={styles.errorMessage}>{formErrors.email}</span>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="nom">Nom</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formInput} ${formErrors.nom && (touched.nom || isSubmitted) ? styles.errorInput : ''}`}
                        placeholder="Votre nom"
                    />
                    {formErrors.nom && (touched.nom || isSubmitted) && (
                        <span className={styles.errorMessage}>{formErrors.nom}</span>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="sujet">Sujet</label>
                    <input
                        type="text"
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formInput} ${formErrors.sujet && (touched.sujet || isSubmitted) ? styles.errorInput : ''}`}
                        placeholder="Décrivez votre sujet"
                    />
                    {formErrors.sujet && (touched.sujet || isSubmitted) && (
                        <span className={styles.errorMessage}>{formErrors.sujet}</span>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formTextarea} ${formErrors.message && (touched.message || isSubmitted) ? styles.errorInput : ''}`}
                        placeholder="Votre message"
                    />
                    {formErrors.message && (touched.message || isSubmitted) && (
                        <span className={styles.errorMessage}>{formErrors.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </button>
                {submitStatus && (
                    <p className={submitStatus.success ? styles.successMessage : styles.errorMessage}>
                        {submitStatus.message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
