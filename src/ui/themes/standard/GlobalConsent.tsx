import {useTranslations} from '../../utils/hooks';
import {GlobalConsentComponent} from '../../components/types/GlobalConsent';

const GlobalConsent: GlobalConsentComponent = ({
	isEnabled,
	isDisabled,
	acceptAll,
	declineAll
}) => {
	const t = useTranslations();

	return (
		<div className="orejime-PurposeToggles orejime-ButtonList">
			<button
				type="button"
				className="orejime-Button orejime-Button--info orejime-PurposeToggles-button orejime-PurposeToggles-enableAll"
				aria-disabled={isEnabled}
				onClick={acceptAll}
				data-testid="orejime-modal-enable-all"
			>
				{t.modal.acceptAll}
			</button>

			<button
				type="button"
				className="orejime-Button orejime-Button--info orejime-PurposeToggles-button orejime-PurposeToggles-disableAll"
				aria-disabled={isDisabled}
				onClick={declineAll}
				data-testid="orejime-modal-disable-all"
			>
				{t.modal.declineAll}
			</button>
		</div>
	);
};

export default GlobalConsent;
