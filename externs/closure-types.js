
/**
 * @fileoverview Closure types for Polymer mixins
 * @externs
 *
 * This file is generated, do not edit manually
 */
/* eslint-disable no-unused-vars, strict */

/**
* @record
*/
function Polymer_PropertyAccessors(){}
/**
* @param {*} name
* @param {*} old
* @param {*} value
*/
Polymer_PropertyAccessors.prototype.attributeChangedCallback = function(name, old, value){};
/**
*/
Polymer_PropertyAccessors.prototype._initializeProperties = function(){};
/**
* @param {Object} props
*/
Polymer_PropertyAccessors.prototype._initializeProtoProperties = function(props){};
/**
* @param {Object} props
*/
Polymer_PropertyAccessors.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute
* @param {string} value
*/
Polymer_PropertyAccessors.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute
* @param {string} value
* @param {*} type
*/
Polymer_PropertyAccessors.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property
* @param {string=} attribute
* @param {*=} value
*/
Polymer_PropertyAccessors.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node
* @param {*} value
* @param {string} attribute
*/
Polymer_PropertyAccessors.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value
* @return {(string|undefined)}
*/
Polymer_PropertyAccessors.prototype._serializeValue = function(value){};
/**
* @param {string} value
* @param {*} type
* @return {*}
*/
Polymer_PropertyAccessors.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property
* @param {boolean=} readOnly
*/
Polymer_PropertyAccessors.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._hasAccessor = function(property){};
/**
* @param {string} property
* @param {*} value
*/
Polymer_PropertyAccessors.prototype._setProperty = function(property, value){};
/**
* @param {string} property
* @param {*} value
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._setPendingProperty = function(property, value){};
/**
* @param {string} prop
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._isPropertyPending = function(prop){};
/**
*/
Polymer_PropertyAccessors.prototype._invalidateProperties = function(){};
/**
*/
Polymer_PropertyAccessors.prototype._enableProperties = function(){};
/**
*/
Polymer_PropertyAccessors.prototype._flushProperties = function(){};
/**
*/
Polymer_PropertyAccessors.prototype.ready = function(){};
/**
* @param {Object} currentProps
* @param {Object} changedProps
* @param {Object} oldProps
*/
Polymer_PropertyAccessors.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property
* @param {*} value
* @param {*} old
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @record
*/
function Polymer_TemplateStamp(){}
/**
* @param {HTMLTemplateElement} template
* @return {DocumentFragment}
*/
Polymer_TemplateStamp.prototype._stampTemplate = function(template){};
/**
* @param {Node} node
* @param {string} eventName
* @param {string} methodName
* @param {*=} context
* @return {Function}
*/
Polymer_TemplateStamp.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node
* @param {string} eventName
* @param {Function} handler
*/
Polymer_TemplateStamp.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node
* @param {string} eventName
* @param {Function} handler
*/
Polymer_TemplateStamp.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @record
* @extends {Polymer_TemplateStamp}
* @extends {Polymer_PropertyAccessors}
*/
function Polymer_PropertyEffects(){}
/**
* @param {HTMLTemplateElement} template
* @return {DocumentFragment}
*/
Polymer_PropertyEffects.prototype._stampTemplate = function(template){};
/**
* @param {Node} node
* @param {string} eventName
* @param {string} methodName
* @param {*=} context
* @return {Function}
*/
Polymer_PropertyEffects.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node
* @param {string} eventName
* @param {Function} handler
*/
Polymer_PropertyEffects.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node
* @param {string} eventName
* @param {Function} handler
*/
Polymer_PropertyEffects.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @param {*} name
* @param {*} old
* @param {*} value
*/
Polymer_PropertyEffects.prototype.attributeChangedCallback = function(name, old, value){};
/**
*/
Polymer_PropertyEffects.prototype._initializeProperties = function(){};
/**
* @override
* @param {*} props
*/
Polymer_PropertyEffects.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {*} props
*/
Polymer_PropertyEffects.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute
* @param {string} value
*/
Polymer_PropertyEffects.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute
* @param {string} value
* @param {*} type
*/
Polymer_PropertyEffects.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property
* @param {string=} attribute
* @param {*=} value
*/
Polymer_PropertyEffects.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node
* @param {*} value
* @param {string} attribute
*/
Polymer_PropertyEffects.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value
* @return {(string|undefined)}
*/
Polymer_PropertyEffects.prototype._serializeValue = function(value){};
/**
* @param {string} value
* @param {*} type
* @return {*}
*/
Polymer_PropertyEffects.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property
* @param {boolean=} readOnly
*/
Polymer_PropertyEffects.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasAccessor = function(property){};
/**
* @override
* @param {*} property
* @param {*} value
*/
Polymer_PropertyEffects.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property
* @param {*} value
* @param {boolean=} shouldNotify
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_PropertyEffects.prototype._invalidateProperties = function(){};
/**
*/
Polymer_PropertyEffects.prototype._enableProperties = function(){};
/**
*/
Polymer_PropertyEffects.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_PropertyEffects.prototype.ready = function(){};
/**
* @override
* @param {*} currentProps
* @param {*} changedProps
* @param {*} oldProps
*/
Polymer_PropertyEffects.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property
* @param {*} value
* @param {*} old
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property
* @param {string} type
* @param {Object=} effect
*/
Polymer_PropertyEffects.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property
* @param {string} type
* @param {Object=} effect
*/
Polymer_PropertyEffects.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property
* @param {string=} type
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path
* @param {*} value
* @param {boolean=} shouldNotify
* @param {boolean=} isPathNotification
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node
* @param {string} prop
* @param {*} value
*/
Polymer_PropertyEffects.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client
*/
Polymer_PropertyEffects.prototype._enqueueClient = function(client){};
/**
*/
Polymer_PropertyEffects.prototype._flushClients = function(){};
/**
*/
Polymer_PropertyEffects.prototype._readyClients = function(){};
/**
* @param {Object} props
* @param {boolean=} setReadOnly
*/
Polymer_PropertyEffects.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps
* @param {Object} oldProps
* @param {boolean} hasPaths
*/
Polymer_PropertyEffects.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to
* @param {(string|!Array.<(string|number)>)} from
*/
Polymer_PropertyEffects.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path
*/
Polymer_PropertyEffects.prototype.unlinkPaths = function(path){};
/**
* @param {string} path
* @param {Array} splices
*/
Polymer_PropertyEffects.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path
* @param {Object=} root
* @return {*}
*/
Polymer_PropertyEffects.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path
* @param {*} value
* @param {Object=} root
*/
Polymer_PropertyEffects.prototype.set = function(path, value, root){};
/**
* @param {string} path
* @param {*} items
* @return {number}
*/
Polymer_PropertyEffects.prototype.push = function(path, items){};
/**
* @param {string} path
* @return {*}
*/
Polymer_PropertyEffects.prototype.pop = function(path){};
/**
* @param {string} path
* @param {number} start
* @param {number} deleteCount
* @param {*} items
* @return {Array}
*/
Polymer_PropertyEffects.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path
* @return {*}
*/
Polymer_PropertyEffects.prototype.shift = function(path){};
/**
* @param {string} path
* @param {*} items
* @return {number}
*/
Polymer_PropertyEffects.prototype.unshift = function(path, items){};
/**
* @param {string} path
* @param {*=} value
*/
Polymer_PropertyEffects.prototype.notifyPath = function(path, value){};
/**
* @param {string} property
* @param {boolean=} protectedSetter
*/
Polymer_PropertyEffects.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property
* @param {string} methodName
* @param {boolean=} dynamicFn
*/
Polymer_PropertyEffects.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression
* @param {(boolean|Object)=} dynamicFn
*/
Polymer_PropertyEffects.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property
*/
Polymer_PropertyEffects.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property
*/
Polymer_PropertyEffects.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property
* @param {string} expression
* @param {(boolean|Object)=} dynamicFn
*/
Polymer_PropertyEffects.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template
* @param {boolean=} instanceBinding
* @return {Object}
*/
Polymer_PropertyEffects.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {DocumentFragment} dom
*/
Polymer_PropertyEffects.prototype._removeBoundDom = function(dom){};
/**
* @record
* @extends {Polymer_PropertyEffects}
*/
function Polymer_ElementMixin(){}
/**
* @param {HTMLTemplateElement} template
* @return {DocumentFragment}
*/
Polymer_ElementMixin.prototype._stampTemplate = function(template){};
/**
* @param {Node} node
* @param {string} eventName
* @param {string} methodName
* @param {*=} context
* @return {Function}
*/
Polymer_ElementMixin.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node
* @param {string} eventName
* @param {Function} handler
*/
Polymer_ElementMixin.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node
* @param {string} eventName
* @param {Function} handler
*/
Polymer_ElementMixin.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @override
* @param {string} name
* @param {string} old
* @param {string} value
*/
Polymer_ElementMixin.prototype.attributeChangedCallback = function(name, old, value){};
/**
* @override
*/
Polymer_ElementMixin.prototype._initializeProperties = function(){};
/**
* @override
* @param {*} props
*/
Polymer_ElementMixin.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {*} props
*/
Polymer_ElementMixin.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute
* @param {string} value
*/
Polymer_ElementMixin.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute
* @param {string} value
* @param {*} type
*/
Polymer_ElementMixin.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property
* @param {string=} attribute
* @param {*=} value
*/
Polymer_ElementMixin.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node
* @param {*} value
* @param {string} attribute
*/
Polymer_ElementMixin.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value
* @return {(string|undefined)}
*/
Polymer_ElementMixin.prototype._serializeValue = function(value){};
/**
* @param {string} value
* @param {*} type
* @return {*}
*/
Polymer_ElementMixin.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property
* @param {boolean=} readOnly
*/
Polymer_ElementMixin.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasAccessor = function(property){};
/**
* @override
* @param {*} property
* @param {*} value
*/
Polymer_ElementMixin.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property
* @param {*} value
* @param {boolean=} shouldNotify
* @return {boolean}
*/
Polymer_ElementMixin.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop
* @return {boolean}
*/
Polymer_ElementMixin.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_ElementMixin.prototype._invalidateProperties = function(){};
/**
*/
Polymer_ElementMixin.prototype._enableProperties = function(){};
/**
*/
Polymer_ElementMixin.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_ElementMixin.prototype.ready = function(){};
/**
* @override
* @param {*} currentProps
* @param {*} changedProps
* @param {*} oldProps
*/
Polymer_ElementMixin.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property
* @param {*} value
* @param {*} old
* @return {boolean}
*/
Polymer_ElementMixin.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property
* @param {string} type
* @param {Object=} effect
*/
Polymer_ElementMixin.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property
* @param {string} type
* @param {Object=} effect
*/
Polymer_ElementMixin.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property
* @param {string=} type
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path
* @param {*} value
* @param {boolean=} shouldNotify
* @param {boolean=} isPathNotification
* @return {boolean}
*/
Polymer_ElementMixin.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node
* @param {string} prop
* @param {*} value
*/
Polymer_ElementMixin.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client
*/
Polymer_ElementMixin.prototype._enqueueClient = function(client){};
/**
*/
Polymer_ElementMixin.prototype._flushClients = function(){};
/**
* @override
*/
Polymer_ElementMixin.prototype._readyClients = function(){};
/**
* @param {Object} props
* @param {boolean=} setReadOnly
*/
Polymer_ElementMixin.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps
* @param {Object} oldProps
* @param {boolean} hasPaths
*/
Polymer_ElementMixin.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to
* @param {(string|!Array.<(string|number)>)} from
*/
Polymer_ElementMixin.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path
*/
Polymer_ElementMixin.prototype.unlinkPaths = function(path){};
/**
* @param {string} path
* @param {Array} splices
*/
Polymer_ElementMixin.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path
* @param {Object=} root
* @return {*}
*/
Polymer_ElementMixin.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path
* @param {*} value
* @param {Object=} root
*/
Polymer_ElementMixin.prototype.set = function(path, value, root){};
/**
* @param {string} path
* @param {*} items
* @return {number}
*/
Polymer_ElementMixin.prototype.push = function(path, items){};
/**
* @param {string} path
* @return {*}
*/
Polymer_ElementMixin.prototype.pop = function(path){};
/**
* @param {string} path
* @param {number} start
* @param {number} deleteCount
* @param {*} items
* @return {Array}
*/
Polymer_ElementMixin.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path
* @return {*}
*/
Polymer_ElementMixin.prototype.shift = function(path){};
/**
* @param {string} path
* @param {*} items
* @return {number}
*/
Polymer_ElementMixin.prototype.unshift = function(path, items){};
/**
* @param {string} path
* @param {*=} value
*/
Polymer_ElementMixin.prototype.notifyPath = function(path, value){};
/**
* @param {string} property
* @param {boolean=} protectedSetter
*/
Polymer_ElementMixin.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property
* @param {string} methodName
* @param {boolean=} dynamicFn
*/
Polymer_ElementMixin.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression
* @param {(boolean|Object)=} dynamicFn
*/
Polymer_ElementMixin.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property
*/
Polymer_ElementMixin.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property
*/
Polymer_ElementMixin.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property
* @param {string} expression
* @param {(boolean|Object)=} dynamicFn
*/
Polymer_ElementMixin.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template
* @param {boolean=} instanceBinding
* @return {Object}
*/
Polymer_ElementMixin.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {DocumentFragment} dom
*/
Polymer_ElementMixin.prototype._removeBoundDom = function(dom){};
/**
* @override
*/
Polymer_ElementMixin.prototype.connectedCallback = function(){};
/**
* @override
*/
Polymer_ElementMixin.prototype.disconnectedCallback = function(){};
/**
* @param {NodeList} dom
* @return {Node}
*/
Polymer_ElementMixin.prototype._attachDom = function(dom){};
/**
* @param {Object=} properties
*/
Polymer_ElementMixin.prototype.updateStyles = function(properties){};
/**
* @param {string} url
* @param {string=} base
* @return {string}
*/
Polymer_ElementMixin.prototype.resolveUrl = function(url, base){};
/**
* @record
*/
function Polymer_GestureEventListeners(){}
/**
* @param {*} node
* @param {*} eventName
* @param {*} handler
*/
Polymer_GestureEventListeners.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {*} node
* @param {*} eventName
* @param {*} handler
*/
Polymer_GestureEventListeners.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @record
* @extends {Polymer_ElementMixin}
* @extends {Polymer_GestureEventListeners}
*/
function Polymer_LegacyElementMixin(){}
/**
* @param {HTMLTemplateElement} template
* @return {DocumentFragment}
*/
Polymer_LegacyElementMixin.prototype._stampTemplate = function(template){};
/**
* @param {Node} node
* @param {string} eventName
* @param {string} methodName
* @param {*=} context
* @return {Function}
*/
Polymer_LegacyElementMixin.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {*} node
* @param {*} eventName
* @param {*} handler
*/
Polymer_LegacyElementMixin.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {*} node
* @param {*} eventName
* @param {*} handler
*/
Polymer_LegacyElementMixin.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @override
* @param {string} name
* @param {string} old
* @param {string} value
*/
Polymer_LegacyElementMixin.prototype.attributeChangedCallback = function(name, old, value){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._initializeProperties = function(){};
/**
* @override
* @param {*} props
*/
Polymer_LegacyElementMixin.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {*} props
*/
Polymer_LegacyElementMixin.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute
* @param {string} value
*/
Polymer_LegacyElementMixin.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute
* @param {string} value
* @param {*} type
*/
Polymer_LegacyElementMixin.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property
* @param {string=} attribute
* @param {*=} value
*/
Polymer_LegacyElementMixin.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node
* @param {*} value
* @param {string} attribute
*/
Polymer_LegacyElementMixin.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value
* @return {(string|undefined)}
*/
Polymer_LegacyElementMixin.prototype._serializeValue = function(value){};
/**
* @param {string} value
* @param {*} type
* @return {*}
*/
Polymer_LegacyElementMixin.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property
* @param {boolean=} readOnly
*/
Polymer_LegacyElementMixin.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasAccessor = function(property){};
/**
* @override
* @param {*} property
* @param {*} value
*/
Polymer_LegacyElementMixin.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property
* @param {*} value
* @param {boolean=} shouldNotify
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._invalidateProperties = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._enableProperties = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype.ready = function(){};
/**
* @override
* @param {*} currentProps
* @param {*} changedProps
* @param {*} oldProps
*/
Polymer_LegacyElementMixin.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property
* @param {*} value
* @param {*} old
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property
* @param {string} type
* @param {Object=} effect
*/
Polymer_LegacyElementMixin.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property
* @param {string} type
* @param {Object=} effect
*/
Polymer_LegacyElementMixin.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property
* @param {string=} type
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path
* @param {*} value
* @param {boolean=} shouldNotify
* @param {boolean=} isPathNotification
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node
* @param {string} prop
* @param {*} value
*/
Polymer_LegacyElementMixin.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client
*/
Polymer_LegacyElementMixin.prototype._enqueueClient = function(client){};
/**
*/
Polymer_LegacyElementMixin.prototype._flushClients = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._readyClients = function(){};
/**
* @param {Object} props
* @param {boolean=} setReadOnly
*/
Polymer_LegacyElementMixin.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps
* @param {Object} oldProps
* @param {boolean} hasPaths
*/
Polymer_LegacyElementMixin.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to
* @param {(string|!Array.<(string|number)>)} from
*/
Polymer_LegacyElementMixin.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path
*/
Polymer_LegacyElementMixin.prototype.unlinkPaths = function(path){};
/**
* @param {string} path
* @param {Array} splices
*/
Polymer_LegacyElementMixin.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path
* @param {Object=} root
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path
* @param {*} value
* @param {Object=} root
*/
Polymer_LegacyElementMixin.prototype.set = function(path, value, root){};
/**
* @param {string} path
* @param {*} items
* @return {number}
*/
Polymer_LegacyElementMixin.prototype.push = function(path, items){};
/**
* @param {string} path
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.pop = function(path){};
/**
* @param {string} path
* @param {number} start
* @param {number} deleteCount
* @param {*} items
* @return {Array}
*/
Polymer_LegacyElementMixin.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.shift = function(path){};
/**
* @param {string} path
* @param {*} items
* @return {number}
*/
Polymer_LegacyElementMixin.prototype.unshift = function(path, items){};
/**
* @param {string} path
* @param {*=} value
*/
Polymer_LegacyElementMixin.prototype.notifyPath = function(path, value){};
/**
* @param {string} property
* @param {boolean=} protectedSetter
*/
Polymer_LegacyElementMixin.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property
* @param {string} methodName
* @param {boolean=} dynamicFn
*/
Polymer_LegacyElementMixin.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression
* @param {(boolean|Object)=} dynamicFn
*/
Polymer_LegacyElementMixin.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property
*/
Polymer_LegacyElementMixin.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property
*/
Polymer_LegacyElementMixin.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property
* @param {string} expression
* @param {(boolean|Object)=} dynamicFn
*/
Polymer_LegacyElementMixin.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template
* @param {boolean=} instanceBinding
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {DocumentFragment} dom
*/
Polymer_LegacyElementMixin.prototype._removeBoundDom = function(dom){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype.connectedCallback = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype.disconnectedCallback = function(){};
/**
* @param {NodeList} dom
* @return {Node}
*/
Polymer_LegacyElementMixin.prototype._attachDom = function(dom){};
/**
* @param {Object=} properties
*/
Polymer_LegacyElementMixin.prototype.updateStyles = function(properties){};
/**
* @param {string} url
* @param {string=} base
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.resolveUrl = function(url, base){};
/**
*/
Polymer_LegacyElementMixin.prototype.created = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype.attached = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype.detached = function(){};
/**
* @param {string} name
* @param {string} old
* @param {string} value
*/
Polymer_LegacyElementMixin.prototype.attributeChanged = function(name, old, value){};
/**
*/
Polymer_LegacyElementMixin.prototype._registered = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._ensureAttributes = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._applyListeners = function(){};
/**
* @param {*} value
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.serialize = function(value){};
/**
* @param {string} value
* @param {*} type
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.deserialize = function(value, type){};
/**
* @param {string} property
* @param {string=} attribute
* @param {*=} value
*/
Polymer_LegacyElementMixin.prototype.reflectPropertyToAttribute = function(property, attribute, value){};
/**
* @param {*} value
* @param {string} attribute
* @param {Element} node
*/
Polymer_LegacyElementMixin.prototype.serializeValueToAttribute = function(value, attribute, node){};
/**
* @param {Object} prototype
* @param {Object} api
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.extend = function(prototype, api){};
/**
* @param {Object} target
* @param {Object} source
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.mixin = function(target, source){};
/**
* @param {Object} object
* @param {Object} prototype
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.chainObject = function(object, prototype){};
/**
* @param {HTMLTemplateElement} template
* @return {DocumentFragment}
*/
Polymer_LegacyElementMixin.prototype.instanceTemplate = function(template){};
/**
* @param {string} type
* @param {*=} detail
* @param {{bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined)}=} options
* @return {Event}
*/
Polymer_LegacyElementMixin.prototype.fire = function(type, detail, options){};
/**
* @param {Element} node
* @param {string} eventName
* @param {string} methodName
*/
Polymer_LegacyElementMixin.prototype.listen = function(node, eventName, methodName){};
/**
* @param {Element} node
* @param {string} eventName
* @param {string} methodName
*/
Polymer_LegacyElementMixin.prototype.unlisten = function(node, eventName, methodName){};
/**
* @param {string=} direction
* @param {Element=} node
*/
Polymer_LegacyElementMixin.prototype.setScrollDirection = function(direction, node){};
/**
* @param {string} slctr
* @return {Element}
*/
Polymer_LegacyElementMixin.prototype.$$ = function(slctr){};
/**
*/
Polymer_LegacyElementMixin.prototype.distributeContent = function(){};
/**
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.getEffectiveChildNodes = function(){};
/**
* @param {string} selector
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.queryDistributedElements = function(selector){};
/**
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.getEffectiveChildren = function(){};
/**
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.getEffectiveTextContent = function(){};
/**
* @param {string} selector
* @return {Object.<Node>}
*/
Polymer_LegacyElementMixin.prototype.queryEffectiveChildren = function(selector){};
/**
* @param {string} selector
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.queryAllEffectiveChildren = function(selector){};
/**
* @param {string=} slctr
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.getContentChildNodes = function(slctr){};
/**
* @param {string=} slctr
* @return {Array.<HTMLElement>}
*/
Polymer_LegacyElementMixin.prototype.getContentChildren = function(slctr){};
/**
* @param {?Node} node
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.isLightDescendant = function(node){};
/**
* @param {Element=} node
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.isLocalDescendant = function(node){};
/**
* @param {*} container
* @param {*} shouldObserve
*/
Polymer_LegacyElementMixin.prototype.scopeSubtree = function(container, shouldObserve){};
/**
* @param {string} property
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.getComputedStyleValue = function(property){};
/**
* @param {string} jobName
* @param {function ()} callback
* @param {number} wait
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.debounce = function(jobName, callback, wait){};
/**
* @param {string} jobName
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.isDebouncerActive = function(jobName){};
/**
* @param {string} jobName
*/
Polymer_LegacyElementMixin.prototype.flushDebouncer = function(jobName){};
/**
* @param {string} jobName
*/
Polymer_LegacyElementMixin.prototype.cancelDebouncer = function(jobName){};
/**
* @param {Function} callback
* @param {number=} waitTime
* @return {number}
*/
Polymer_LegacyElementMixin.prototype.async = function(callback, waitTime){};
/**
* @param {number} handle
*/
Polymer_LegacyElementMixin.prototype.cancelAsync = function(handle){};
/**
* @param {string} tag
* @param {Object} props
* @return {Element}
*/
Polymer_LegacyElementMixin.prototype.create = function(tag, props){};
/**
* @param {string} href
* @param {Function} onload
* @param {Function} onerror
* @param {boolean} optAsync
* @return {HTMLLinkElement}
*/
Polymer_LegacyElementMixin.prototype.importHref = function(href, onload, onerror, optAsync){};
/**
* @param {string} selector
* @param {Element=} node
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.elementMatches = function(selector, node){};
/**
* @param {string} name
* @param {boolean=} bool
* @param {Element=} node
*/
Polymer_LegacyElementMixin.prototype.toggleAttribute = function(name, bool, node){};
/**
* @param {string} name
* @param {boolean=} bool
* @param {Element=} node
*/
Polymer_LegacyElementMixin.prototype.toggleClass = function(name, bool, node){};
/**
* @param {string} transformText
* @param {Element=} node
*/
Polymer_LegacyElementMixin.prototype.transform = function(transformText, node){};
/**
* @param {number} x
* @param {number} y
* @param {number} z
* @param {Element=} node
*/
Polymer_LegacyElementMixin.prototype.translate3d = function(x, y, z, node){};
/**
* @param {(string|!Array.<(number|string)>)} arrayOrPath
* @param {*} item
* @return {Array}
*/
Polymer_LegacyElementMixin.prototype.arrayDelete = function(arrayOrPath, item){};
/**
* @param {string} level
* @param {Array} args
*/
Polymer_LegacyElementMixin.prototype._logger = function(level, args){};
/**
* @param {*} args
*/
Polymer_LegacyElementMixin.prototype._log = function(args){};
/**
* @param {*} args
*/
Polymer_LegacyElementMixin.prototype._warn = function(args){};
/**
* @param {*} args
*/
Polymer_LegacyElementMixin.prototype._error = function(args){};
/**
* @param {string} methodName
* @param {*} args
* @return {Array}
*/
Polymer_LegacyElementMixin.prototype._logf = function(methodName, args){};
/**
* @record
*/
function Polymer_MutableData(){}
/**
* @param {string} property
* @param {*} value
* @param {*} old
* @return {boolean}
*/
Polymer_MutableData.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @record
*/
function Polymer_OptionalMutableData(){}
/** @type {boolean} */
Polymer_OptionalMutableData.prototype.mutableData;

/**
* @param {string} property
* @param {*} value
* @param {*} old
* @return {boolean}
*/
Polymer_OptionalMutableData.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @record
*/
function Polymer_ArraySelectorMixin(){}
/** @type {Array} */
Polymer_ArraySelectorMixin.prototype.items;

/** @type {boolean} */
Polymer_ArraySelectorMixin.prototype.multi;

/** @type {Object} */
Polymer_ArraySelectorMixin.prototype.selected;

/** @type {Object} */
Polymer_ArraySelectorMixin.prototype.selectedItem;

/** @type {boolean} */
Polymer_ArraySelectorMixin.prototype.toggle;

/**
*/
Polymer_ArraySelectorMixin.prototype.clearSelection = function(){};
/**
* @param {*} item
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype.isSelected = function(item){};
/**
* @param {*} idx
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype.isIndexSelected = function(idx){};
/**
* @param {*} item
*/
Polymer_ArraySelectorMixin.prototype.deselect = function(item){};
/**
* @param {number} idx
*/
Polymer_ArraySelectorMixin.prototype.deselectIndex = function(idx){};
/**
* @param {*} item
*/
Polymer_ArraySelectorMixin.prototype.select = function(item){};
/**
* @param {number} idx
*/
Polymer_ArraySelectorMixin.prototype.selectIndex = function(idx){};