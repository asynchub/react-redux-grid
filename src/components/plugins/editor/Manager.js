import React from 'react';
import Inline from './Inline.jsx';

export default class Manager {

    init(plugins, store) {

        const defaults = {
            type: 'inline',
            enabled: false,
            focusOnEdit: true
        };

        const editModes = {
            inline: 'inline'
        };

        const config = plugins && plugins.EDITOR
            ? Object.assign(defaults, plugins.EDITOR) : defaults;

        this.config = config;
        this.editModes = editModes;
        this.store = store;
    }

    getComponent(plugins, reducerKeys, store, events, selectionModel, editor, columns) {

        const editorProps = {
            columns,
            config: this.config,
            reducerKeys,
            store,
            events
        };

        if (!this.config.enabled) {
            return null;
        }

        else if (this.config.type === this.editModes.inline) {
            return (
                <Inline { ...editorProps} />
            );
        }

        else {
            return null;
        }
    }

}