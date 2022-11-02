import React from 'react';
import TagStyle from './style';

const TagsInput = (props = []) => {
    const { tags, setTags } = props;

    const addTags = (e) => {
        if (e.key === 'Enter' && tags.indexOf(e.target.value) !== -1) {
            e.target.value = '';
        }
        if (e.key === 'Enter' && e.target.value !== '') {
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
        if (e.key === 'Backspace' && tags.length > 1) {
            const arr = [tags.shift()];
            setTags(arr);
        } else if (e.key === 'Backspace' && tags.length === 1) {
            setTags([]);
        }
    };
    const removeTag = (index) => {
        setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    };
    return (
        <TagStyle>
            <ul id="tags">
                {tags.map((value, index) => (
                    <li className="tag" key={index}>
                        <span className="tag-title">{value}</span>
                        <span className="tag-close-icon" onClick={() => removeTag(index)}>
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <input className="tags-input" type="text" onKeyUp={(e) => addTags(e)} />
        </TagStyle>
    );
};

export default TagsInput;
