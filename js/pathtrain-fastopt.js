let MainApp,GameListener;
(function(){
'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.1.0",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException(((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((instance << 16) >> 16) === instance)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(instance) {
  switch ((typeof instance)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return "java.lang.Byte"
        } else if ((((instance << 16) >> 16) === instance)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else {
        return "java.lang.Float"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((instance instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return instance.getClass__jl_Class()
}
function $dp_clone__O(instance) {
  return instance.clone__O()
}
function $dp_notify__V(instance) {
  return instance.notify__V()
}
function $dp_notifyAll__V(instance) {
  return instance.notifyAll__V()
}
function $dp_finalize__V(instance) {
  return instance.finalize__V()
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(x0)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, x0)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, x0)
  } else {
    return $c_O.prototype.equals__O__Z.call(instance, x0)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, x0) {
  return instance.compareTo__O__I(x0)
}
function $dp_length__I(instance) {
  return instance.length__I()
}
function $dp_charAt__I__C(instance, x0) {
  return instance.charAt__I__C(x0)
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  return instance.subSequence__I__I__jl_CharSequence(x0, x1)
}
function $dp_byteValue__B(instance) {
  return instance.byteValue__B()
}
function $dp_shortValue__S(instance) {
  return instance.shortValue__S()
}
function $dp_intValue__I(instance) {
  return instance.intValue__I()
}
function $dp_longValue__J(instance) {
  return instance.longValue__J()
}
function $dp_floatValue__F(instance) {
  return instance.floatValue__F()
}
function $dp_doubleValue__D(instance) {
  return instance.doubleValue__D()
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
const $ct_O__ = (function($thiz) {
  return $thiz
});
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectClassName(this);
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
const $f_Lcom_kos_pathtrain_GameConst__$init$__V = (function($thiz) {
  $thiz.com$kos$pathtrain$GameConst$_setter_$fireSpeed_$eq__I__V(500);
  $thiz.com$kos$pathtrain$GameConst$_setter_$speed_$eq__I__V(40);
  $thiz.com$kos$pathtrain$GameConst$_setter_$reverseSpeed_$eq__I__V(80);
  $thiz.com$kos$pathtrain$GameConst$_setter_$levelCount_$eq__I__V(5);
  $thiz.com$kos$pathtrain$GameConst$_setter_$DIR_SCREEN_$eq__T__V("images/screens/");
  $thiz.com$kos$pathtrain$GameConst$_setter_$DIR_ROADS_$eq__T__V("images/roads/");
  $thiz.com$kos$pathtrain$GameConst$_setter_$DIR_HEROES_$eq__T__V("images/heroes/")
});
class $c_Lcom_kos_pathtrain_GameHeroes extends $c_O {
  constructor(ballColors) {
    super();
    this.Lcom_kos_pathtrain_GameHeroes__f_ballColors = 0;
    this.Lcom_kos_pathtrain_GameHeroes__f_random = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_runned = false;
    this.Lcom_kos_pathtrain_GameHeroes__f_road = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_ballsLayer = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_fireLayer = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_canonPoint = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_balls = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_moverBall = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_fireBall = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_canon = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_ballColors = ballColors;
    this.Lcom_kos_pathtrain_GameHeroes__f_random = $ct_s_util_Random__(new $c_s_util_Random());
    this.Lcom_kos_pathtrain_GameHeroes__f_runned = false;
    this.Lcom_kos_pathtrain_GameHeroes__f_road = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_ballsLayer = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_fireLayer = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_canonPoint = null;
    this.Lcom_kos_pathtrain_GameHeroes__f_balls = $as_sci_Seq($m_sci_Seq$().apply__sci_Seq__sc_SeqOps($m_sci_Nil$()));
    this.Lcom_kos_pathtrain_GameHeroes__f_moverBall = $ct_Lcom_kos_pathtrain_heroes_Ball__(new $c_Lcom_kos_pathtrain_heroes_Ball());
    this.Lcom_kos_pathtrain_GameHeroes__f_fireBall = new $c_Lcom_kos_pathtrain_heroes_FireBall();
    this.Lcom_kos_pathtrain_GameHeroes__f_canon = new $c_Lcom_kos_pathtrain_heroes_Canon()
  };
  createBalls__V() {
    const ballSvgs = $as_sci_IndexedSeq($m_Lcom_kos_pathtrain_heroes_Hero$().Lcom_kos_pathtrain_heroes_Hero$__f_HERO_BALLS.map__F1__O(new $c_sjsr_AnonFunction1(((this$1) => ((i$2) => {
      const i = $as_T(i$2);
      return $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(i)
    }))(this))));
    const b = $m_sci_IndexedSeq$().newBuilder__scm_Builder();
    const it = new $c_sci_RangeIterator(0, 1, 24, false);
    while (it.sci_RangeIterator__f__hasNext) {
      const arg1 = it.next__I();
      const this$5 = this.Lcom_kos_pathtrain_GameHeroes__f_random;
      const n = this.Lcom_kos_pathtrain_GameHeroes__f_ballColors;
      const color = this$5.s_util_Random__f_self.nextInt__I__I(n);
      const node = ballSvgs.apply__I__O(color).cloneNode(true);
      const ball = $ct_Lcom_kos_pathtrain_heroes_Ball__(new $c_Lcom_kos_pathtrain_heroes_Ball());
      ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = (2.0 * ((((-25) + arg1) | 0) * ball.Lcom_kos_pathtrain_heroes_Hero__f_radius));
      ball.Lcom_kos_pathtrain_heroes_Ball__f_color = color;
      $f_Lcom_kos_pathtrain_heroes_HeroNode__setNode__Lorg_scalajs_dom_raw_SVGGElement__V(ball, node);
      this.Lcom_kos_pathtrain_GameHeroes__f_ballsLayer.appendChild(node);
      b.addOne__O__scm_Growable(ball)
    };
    this.Lcom_kos_pathtrain_GameHeroes__f_balls = $as_sci_Seq($as_sci_IndexedSeq(b.result__O()).map__F1__O(new $c_sjsr_AnonFunction1(((this$3$1) => ((ball$2) => {
      const ball$1 = $as_Lcom_kos_pathtrain_heroes_Ball(ball$2);
      return ball$1
    }))(this))));
    this.Lcom_kos_pathtrain_GameHeroes__f_moverBall = $ct_Lcom_kos_pathtrain_heroes_Ball__(new $c_Lcom_kos_pathtrain_heroes_Ball());
    this.Lcom_kos_pathtrain_GameHeroes__f_moverBall.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = (2.0 * ((-25.0) * this.Lcom_kos_pathtrain_GameHeroes__f_moverBall.Lcom_kos_pathtrain_heroes_Hero__f_radius));
    this.Lcom_kos_pathtrain_GameHeroes__f_moverBall.Lcom_kos_pathtrain_heroes_Ball__f_color = 0;
    const moveNode = ballSvgs.apply__I__O(0).cloneNode(true);
    moveNode.id = "moverBall";
    const this$6 = this.Lcom_kos_pathtrain_GameHeroes__f_moverBall;
    $f_Lcom_kos_pathtrain_heroes_HeroNode__setNode__Lorg_scalajs_dom_raw_SVGGElement__V(this$6, moveNode);
    this.nextFireBall__V()
  };
  nextFireBall__V() {
    const b = $m_sci_IndexedSeq$().newBuilder__scm_Builder();
    const it = new $c_sci_RangeIterator(0, 1, 6, false);
    while (it.sci_RangeIterator__f__hasNext) {
      const arg1 = it.next__I();
      const elem = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("ball" + arg1));
      b.addOne__O__scm_Growable(elem)
    };
    const ballSvgs = $as_sci_IndexedSeq(b.result__O());
    if ((this.Lcom_kos_pathtrain_GameHeroes__f_fireBall !== null)) {
      const this$4 = this.Lcom_kos_pathtrain_GameHeroes__f_fireBall;
      const node = this$4.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$node;
      const this$5 = this.Lcom_kos_pathtrain_GameHeroes__f_fireBall;
      $f_Lcom_kos_pathtrain_heroes_HeroNode__setNode__Lorg_scalajs_dom_raw_SVGGElement__V(this$5, null);
      if ((node !== null)) {
        this.Lcom_kos_pathtrain_GameHeroes__f_fireLayer.removeChild(node)
      };
      this.Lcom_kos_pathtrain_GameHeroes__f_fireBall = null
    };
    if ((this.Lcom_kos_pathtrain_GameHeroes__f_balls.length__I() > 0)) {
      const newfireBall = new $c_Lcom_kos_pathtrain_heroes_FireBall();
      const $$x1 = this.Lcom_kos_pathtrain_GameHeroes__f_balls;
      const this$6 = this.Lcom_kos_pathtrain_GameHeroes__f_random;
      const n = this.Lcom_kos_pathtrain_GameHeroes__f_balls.length__I();
      const color = $as_Lcom_kos_pathtrain_heroes_Ball($$x1.apply__I__O(this$6.s_util_Random__f_self.nextInt__I__I(n))).Lcom_kos_pathtrain_heroes_Ball__f_color;
      const fireBallNode = ballSvgs.apply__I__O(color).cloneNode(true);
      fireBallNode.id = "fireBall";
      $f_Lcom_kos_pathtrain_heroes_HeroNode__setNode__Lorg_scalajs_dom_raw_SVGGElement__V(newfireBall, fireBallNode);
      const point = this.Lcom_kos_pathtrain_GameHeroes__f_canonPoint;
      $f_Lcom_kos_pathtrain_heroes_HeroNode__transform__Lorg_scalajs_dom_raw_SVGPoint__V(newfireBall, point);
      this.Lcom_kos_pathtrain_GameHeroes__f_fireLayer.appendChild(fireBallNode);
      this.Lcom_kos_pathtrain_GameHeroes__f_fireBall = newfireBall;
      this.Lcom_kos_pathtrain_GameHeroes__f_fireBall.Lcom_kos_pathtrain_heroes_Ball__f_color = color
    }
  };
  setup__Lorg_scalajs_dom_raw_SVGSVGElement__V(svg) {
    this.Lcom_kos_pathtrain_GameHeroes__f_road = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("road");
    const canonElement = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("canon");
    this.Lcom_kos_pathtrain_GameHeroes__f_ballsLayer = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("ballsLayer");
    this.Lcom_kos_pathtrain_GameHeroes__f_fireLayer = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("fireLayer");
    const canonHero = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("heroCanon");
    const canonNode = canonHero.cloneNode(true);
    canonElement.appendChild(canonNode);
    this.Lcom_kos_pathtrain_GameHeroes__f_canon = new $c_Lcom_kos_pathtrain_heroes_Canon();
    const this$1 = this.Lcom_kos_pathtrain_GameHeroes__f_canon;
    $f_Lcom_kos_pathtrain_heroes_HeroNode__setNode__Lorg_scalajs_dom_raw_SVGGElement__V(this$1, canonNode);
    const m = $m_Lcom_kos_wormpad_geometry_Geometry$().extractMatrix__Lorg_scalajs_dom_raw_SVGTransformable__Lorg_scalajs_dom_raw_SVGMatrix(canonElement);
    this.Lcom_kos_pathtrain_GameHeroes__f_canonPoint = svg.createSVGPoint();
    this.Lcom_kos_pathtrain_GameHeroes__f_canonPoint.x = $uD(m.e);
    this.Lcom_kos_pathtrain_GameHeroes__f_canonPoint.y = $uD(m.f);
    this.createBalls__V()
  };
  intersectRoadFire__I() {
    const nonLocalReturnKey1 = $ct_O__(new $c_O());
    try {
      const f = this.Lcom_kos_pathtrain_GameHeroes__f_fireBall;
      if ((f !== null)) {
        const this$1 = this.Lcom_kos_pathtrain_GameHeroes__f_balls;
        const end = this$1.length__I();
        const isEmpty = (end <= 0);
        const scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
        if ((!isEmpty)) {
          let i = 0;
          while (true) {
            const v1 = i;
            const b = $as_Lcom_kos_pathtrain_heroes_Ball(this.Lcom_kos_pathtrain_GameHeroes__f_balls.apply__I__O(v1));
            if (($m_Lcom_kos_wormpad_geometry_Geometry$().distance__Lcom_kos_pathtrain_heroes_Hero__Lcom_kos_pathtrain_heroes_Hero__D(f, b) < (f.Lcom_kos_pathtrain_heroes_Hero__f_radius + b.Lcom_kos_pathtrain_heroes_Hero__f_radius))) {
              f.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = (b.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition + b.Lcom_kos_pathtrain_heroes_Hero__f_radius);
              const this$5 = $as_sc_SeqOps(this.Lcom_kos_pathtrain_GameHeroes__f_balls.take__I__O(v1));
              const this$6 = $as_sc_SeqOps(this$5.appended__O__O(f));
              const suffix = $as_sc_IterableOnce(this.Lcom_kos_pathtrain_GameHeroes__f_balls.drop__I__O(v1));
              this.Lcom_kos_pathtrain_GameHeroes__f_balls = $as_sci_Seq(this$6.appendedAll__sc_IterableOnce__O(suffix));
              const node = f.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$node;
              this.Lcom_kos_pathtrain_GameHeroes__f_fireLayer.removeChild(node);
              this.Lcom_kos_pathtrain_GameHeroes__f_ballsLayer.appendChild(node);
              this.Lcom_kos_pathtrain_GameHeroes__f_fireBall = null;
              this.nextFireBall__V();
              throw new $c_sr_NonLocalReturnControl$mcI$sp(nonLocalReturnKey1, v1)
            };
            if ((i === scala$collection$immutable$Range$$lastElement)) {
              break
            };
            i = ((1 + i) | 0)
          }
        }
      };
      return (-1)
    } catch (e) {
      if ((e instanceof $c_sr_NonLocalReturnControl)) {
        const ex = $as_sr_NonLocalReturnControl(e);
        if ((ex.sr_NonLocalReturnControl__f_key === nonLocalReturnKey1)) {
          return ex.sr_NonLocalReturnControl$mcI$sp__f_value$mcI$sp
        } else {
          throw ex
        }
      } else {
        throw e
      }
    }
  };
  combo__I__T2(pos) {
    if (((pos < this.Lcom_kos_pathtrain_GameHeroes__f_balls.length__I()) && (pos >= 0))) {
      const ball = $as_Lcom_kos_pathtrain_heroes_Ball(this.Lcom_kos_pathtrain_GameHeroes__f_balls.apply__I__O(pos));
      let i = pos;
      while (((i >= 0) && (ball.Lcom_kos_pathtrain_heroes_Ball__f_color === $as_Lcom_kos_pathtrain_heroes_Ball(this.Lcom_kos_pathtrain_GameHeroes__f_balls.apply__I__O(i)).Lcom_kos_pathtrain_heroes_Ball__f_color))) {
        i = (((-1) + i) | 0)
      };
      const left = ((1 + i) | 0);
      let i$2 = pos;
      while (((i$2 < this.Lcom_kos_pathtrain_GameHeroes__f_balls.length__I()) && (ball.Lcom_kos_pathtrain_heroes_Ball__f_color === $as_Lcom_kos_pathtrain_heroes_Ball(this.Lcom_kos_pathtrain_GameHeroes__f_balls.apply__I__O(i$2)).Lcom_kos_pathtrain_heroes_Ball__f_color))) {
        i$2 = ((1 + i$2) | 0)
      };
      const right = (((-1) + i$2) | 0);
      return new $c_T2(left, right)
    } else {
      return new $c_T2(pos, pos)
    }
  };
  babach__I__I__V(l, r) {
    const ba = $as_sci_Seq(this.Lcom_kos_pathtrain_GameHeroes__f_balls.slice__I__I__O(l, ((1 + r) | 0)));
    ba.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1) => ((b$2) => {
      const b = $as_Lcom_kos_pathtrain_heroes_Ball(b$2);
      return this$1.Lcom_kos_pathtrain_GameHeroes__f_ballsLayer.removeChild(b.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$node)
    }))(this)));
    const this$2 = $as_sc_SeqOps(this.Lcom_kos_pathtrain_GameHeroes__f_balls.take__I__O(l));
    const suffix = $as_sc_IterableOnce(this.Lcom_kos_pathtrain_GameHeroes__f_balls.drop__I__O(((1 + r) | 0)));
    this.Lcom_kos_pathtrain_GameHeroes__f_balls = $as_sci_Seq(this$2.appendedAll__sc_IterableOnce__O(suffix))
  };
}
const $d_Lcom_kos_pathtrain_GameHeroes = new $TypeData().initClass({
  Lcom_kos_pathtrain_GameHeroes: 0
}, false, "com.kos.pathtrain.GameHeroes", {
  Lcom_kos_pathtrain_GameHeroes: 1,
  O: 1
});
$c_Lcom_kos_pathtrain_GameHeroes.prototype.$classData = $d_Lcom_kos_pathtrain_GameHeroes;
const $s_Lcom_kos_pathtrain_MainApp__main__AT__V = (function(args) {
  $m_Lcom_kos_pathtrain_MainApp$().main__AT__V(args)
});
const $ct_Lcom_kos_pathtrain_heroes_Hero__ = (function($thiz) {
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_kind = 0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_subKind = 0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_score = 1;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_energy = 0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_x = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_y = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_vx = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_vy = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_ax = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_ay = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_massa = 100.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_radius = 10.0;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_destroy_ = false;
  $thiz.Lcom_kos_pathtrain_heroes_Hero__f_accelerationFun = new $c_sjsr_AnonFunction2(((this$1) => ((x$1$2, x$2$2) => {
    $as_Lcom_kos_pathtrain_heroes_Hero(x$1$2);
    $uD(x$2$2)
  }))($thiz));
  return $thiz
});
class $c_Lcom_kos_pathtrain_heroes_Hero extends $c_O {
  constructor() {
    super();
    this.Lcom_kos_pathtrain_heroes_Hero__f_kind = 0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_subKind = 0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_score = 0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_energy = 0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_x = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_y = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_vx = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_vy = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_ax = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_ay = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_massa = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_radius = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_destroy_ = false;
    this.Lcom_kos_pathtrain_heroes_Hero__f_accelerationFun = null
  };
}
function $as_Lcom_kos_pathtrain_heroes_Hero(obj) {
  return (((obj instanceof $c_Lcom_kos_pathtrain_heroes_Hero) || (obj === null)) ? obj : $throwClassCastException(obj, "com.kos.pathtrain.heroes.Hero"))
}
function $isArrayOf_Lcom_kos_pathtrain_heroes_Hero(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_kos_pathtrain_heroes_Hero)))
}
function $asArrayOf_Lcom_kos_pathtrain_heroes_Hero(obj, depth) {
  return (($isArrayOf_Lcom_kos_pathtrain_heroes_Hero(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.kos.pathtrain.heroes.Hero;", depth))
}
class $c_Lcom_kos_pathtrain_heroes_Hero$ extends $c_O {
  constructor() {
    super();
    this.Lcom_kos_pathtrain_heroes_Hero$__f_NONE_HERO = null;
    this.Lcom_kos_pathtrain_heroes_Hero$__f_HERO_BALLS = null;
    $n_Lcom_kos_pathtrain_heroes_Hero$ = this;
    this.Lcom_kos_pathtrain_heroes_Hero$__f_NONE_HERO = new $c_Lcom_kos_pathtrain_heroes_Hero$$anon$1();
    const b = $m_sci_IndexedSeq$().newBuilder__scm_Builder();
    const it = new $c_sci_RangeIterator(0, 1, 6, false);
    while (it.sci_RangeIterator__f__hasNext) {
      const arg1 = it.next__I();
      const elem = ("ball" + arg1);
      b.addOne__O__scm_Growable(elem)
    };
    this.Lcom_kos_pathtrain_heroes_Hero$__f_HERO_BALLS = $as_sci_IndexedSeq(b.result__O())
  };
}
const $d_Lcom_kos_pathtrain_heroes_Hero$ = new $TypeData().initClass({
  Lcom_kos_pathtrain_heroes_Hero$: 0
}, false, "com.kos.pathtrain.heroes.Hero$", {
  Lcom_kos_pathtrain_heroes_Hero$: 1,
  O: 1
});
$c_Lcom_kos_pathtrain_heroes_Hero$.prototype.$classData = $d_Lcom_kos_pathtrain_heroes_Hero$;
let $n_Lcom_kos_pathtrain_heroes_Hero$ = (void 0);
function $m_Lcom_kos_pathtrain_heroes_Hero$() {
  if ((!$n_Lcom_kos_pathtrain_heroes_Hero$)) {
    $n_Lcom_kos_pathtrain_heroes_Hero$ = new $c_Lcom_kos_pathtrain_heroes_Hero$()
  };
  return $n_Lcom_kos_pathtrain_heroes_Hero$
}
const $f_Lcom_kos_pathtrain_heroes_HeroNode__setNode__Lorg_scalajs_dom_raw_SVGGElement__V = (function($thiz, newNode) {
  $thiz.com$kos$pathtrain$heroes$HeroNode$$node_$eq__Lorg_scalajs_dom_raw_SVGGElement__V(newNode);
  if (($thiz.com$kos$pathtrain$heroes$HeroNode$$node__Lorg_scalajs_dom_raw_SVGGElement() !== null)) {
    $thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform_$eq__Lorg_scalajs_dom_raw_SVGTransform__V($thiz.com$kos$pathtrain$heroes$HeroNode$$node__Lorg_scalajs_dom_raw_SVGGElement().transform.baseVal.getItem(0));
    $as_Lcom_kos_pathtrain_heroes_Hero($thiz).Lcom_kos_pathtrain_heroes_Hero__f_x = $uD($thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform().matrix.e);
    $as_Lcom_kos_pathtrain_heroes_Hero($thiz).Lcom_kos_pathtrain_heroes_Hero__f_y = $uD($thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform().matrix.f)
  }
});
const $f_Lcom_kos_pathtrain_heroes_HeroNode__transform__Lorg_scalajs_dom_raw_SVGPoint__V = (function($thiz, point) {
  if (($thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform() !== null)) {
    $thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform().setTranslate($uD(point.x), $uD(point.y))
  };
  $as_Lcom_kos_pathtrain_heroes_Hero($thiz).Lcom_kos_pathtrain_heroes_Hero__f_x = $uD(point.x);
  $as_Lcom_kos_pathtrain_heroes_Hero($thiz).Lcom_kos_pathtrain_heroes_Hero__f_y = $uD(point.y)
});
const $f_Lcom_kos_pathtrain_heroes_HeroNode__transform__V = (function($thiz) {
  if (($thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform() !== null)) {
    $thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform().setTranslate($as_Lcom_kos_pathtrain_heroes_Hero($thiz).Lcom_kos_pathtrain_heroes_Hero__f_x, $as_Lcom_kos_pathtrain_heroes_Hero($thiz).Lcom_kos_pathtrain_heroes_Hero__f_y)
  }
});
const $f_Lcom_kos_pathtrain_heroes_HeroNode__rotate__D__V = (function($thiz, angle) {
  if (($thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform() !== null)) {
    $thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform().setRotate(angle, 0.0, 0.0)
  }
});
const $f_Lcom_kos_pathtrain_heroes_HeroNode__$init$__V = (function($thiz) {
  $thiz.com$kos$pathtrain$heroes$HeroNode$$node_$eq__Lorg_scalajs_dom_raw_SVGGElement__V(null);
  $thiz.com$kos$pathtrain$heroes$HeroNode$$nodeTransform_$eq__Lorg_scalajs_dom_raw_SVGTransform__V(null)
});
class $c_Lcom_kos_wormpad_dpad_DPad extends $c_O {
  constructor(centerX, centerY, radius, acceleration) {
    super();
    this.Lcom_kos_wormpad_dpad_DPad__f_centerX = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_centerY = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_radius = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_acceleration = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_x_ = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_y_ = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_pressed = false;
    this.Lcom_kos_wormpad_dpad_DPad__f_centerX = centerX;
    this.Lcom_kos_wormpad_dpad_DPad__f_centerY = centerY;
    this.Lcom_kos_wormpad_dpad_DPad__f_radius = radius;
    this.Lcom_kos_wormpad_dpad_DPad__f_acceleration = acceleration;
    this.Lcom_kos_wormpad_dpad_DPad__f_x_ = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_y_ = 0.0;
    this.Lcom_kos_wormpad_dpad_DPad__f_pressed = false
  };
  boundedX__D() {
    const a = this.x__D();
    const b = this.y__D();
    const hypot = $m_jl_Math$().hypot__D__D__D(a, b);
    return ((hypot !== 0.0) ? (this.x__D() / hypot) : 0.0)
  };
  boundedY__D() {
    const a = this.x__D();
    const b = this.y__D();
    const hypot = $m_jl_Math$().hypot__D__D__D(a, b);
    return ((hypot !== 0.0) ? (this.y__D() / hypot) : 0.0)
  };
  touchMove__D__D__V(x, y) {
    if (this.Lcom_kos_wormpad_dpad_DPad__f_pressed) {
      const v = ((x - this.Lcom_kos_wormpad_dpad_DPad__f_centerX) / this.Lcom_kos_wormpad_dpad_DPad__f_radius);
      this.Lcom_kos_wormpad_dpad_DPad__f_x_ = v;
      const v$1 = ((y - this.Lcom_kos_wormpad_dpad_DPad__f_centerY) / this.Lcom_kos_wormpad_dpad_DPad__f_radius);
      this.Lcom_kos_wormpad_dpad_DPad__f_y_ = v$1
    }
  };
  x__D() {
    return (this.Lcom_kos_wormpad_dpad_DPad__f_x_ * this.Lcom_kos_wormpad_dpad_DPad__f_acceleration)
  };
  y__D() {
    return (this.Lcom_kos_wormpad_dpad_DPad__f_y_ * this.Lcom_kos_wormpad_dpad_DPad__f_acceleration)
  };
  angle__D() {
    const y = this.y__D();
    const x = this.x__D();
    return (((180.0 * $uD(Math.atan2(y, x))) / 3.141592653589793) + 90.0)
  };
}
const $d_Lcom_kos_wormpad_dpad_DPad = new $TypeData().initClass({
  Lcom_kos_wormpad_dpad_DPad: 0
}, false, "com.kos.wormpad.dpad.DPad", {
  Lcom_kos_wormpad_dpad_DPad: 1,
  O: 1
});
$c_Lcom_kos_wormpad_dpad_DPad.prototype.$classData = $d_Lcom_kos_wormpad_dpad_DPad;
class $c_Lcom_kos_wormpad_game_GameListener extends $c_O {
  constructor() {
    super();
    this.Lcom_kos_wormpad_game_GameListener__f_onChangeSoundState = null;
    this.Lcom_kos_wormpad_game_GameListener__f_onGameOver = null;
    this.Lcom_kos_wormpad_game_GameListener__f_onNewGame = null;
    this.Lcom_kos_wormpad_game_GameListener__f_onPause = null;
    this.Lcom_kos_wormpad_game_GameListener__f_onChangeScore = null;
    this.Lcom_kos_wormpad_game_GameListener__f_onChangeSoundState = ((arg$outer) => ((arg1$2, arg2$2) => {
      $uZ(arg1$2);
      $uZ(arg2$2)
    }))(this);
    this.Lcom_kos_wormpad_game_GameListener__f_onGameOver = ((arg$outer$1) => (() => (void 0)))(this);
    this.Lcom_kos_wormpad_game_GameListener__f_onNewGame = ((arg$outer$2) => (() => (void 0)))(this);
    this.Lcom_kos_wormpad_game_GameListener__f_onPause = ((arg$outer$3) => ((arg1$2$1) => {
      $uZ(arg1$2$1)
    }))(this);
    this.Lcom_kos_wormpad_game_GameListener__f_onChangeScore = ((arg$outer$4) => ((arg1$2$2) => {
      $uI(arg1$2$2)
    }))(this)
  };
  $js$exported$prop$onChangeSoundState__O() {
    return this.Lcom_kos_wormpad_game_GameListener__f_onChangeSoundState
  };
  $js$exported$prop$onChangeSoundState__sjs_js_Function2__O(x$1) {
    this.Lcom_kos_wormpad_game_GameListener__f_onChangeSoundState = x$1
  };
  $js$exported$prop$onGameOver__O() {
    return this.Lcom_kos_wormpad_game_GameListener__f_onGameOver
  };
  $js$exported$prop$onGameOver__sjs_js_Function0__O(x$1) {
    this.Lcom_kos_wormpad_game_GameListener__f_onGameOver = x$1
  };
  $js$exported$prop$onNewGame__O() {
    return this.Lcom_kos_wormpad_game_GameListener__f_onNewGame
  };
  $js$exported$prop$onNewGame__sjs_js_Function0__O(x$1) {
    this.Lcom_kos_wormpad_game_GameListener__f_onNewGame = x$1
  };
  $js$exported$prop$onPause__O() {
    return this.Lcom_kos_wormpad_game_GameListener__f_onPause
  };
  $js$exported$prop$onPause__sjs_js_Function1__O(x$1) {
    this.Lcom_kos_wormpad_game_GameListener__f_onPause = x$1
  };
  $js$exported$prop$onChangeScore__O() {
    return this.Lcom_kos_wormpad_game_GameListener__f_onChangeScore
  };
  $js$exported$prop$onChangeScore__sjs_js_Function1__O(x$1) {
    this.Lcom_kos_wormpad_game_GameListener__f_onChangeScore = x$1
  };
  get "onChangeScore"() {
    return this.$js$exported$prop$onChangeScore__O()
  };
  set "onChangeScore"(arg) {
    const prep0 = arg;
    this.$js$exported$prop$onChangeScore__sjs_js_Function1__O(prep0)
  };
  get "onPause"() {
    return this.$js$exported$prop$onPause__O()
  };
  set "onPause"(arg) {
    const prep0 = arg;
    this.$js$exported$prop$onPause__sjs_js_Function1__O(prep0)
  };
  get "onNewGame"() {
    return this.$js$exported$prop$onNewGame__O()
  };
  set "onNewGame"(arg) {
    const prep0 = arg;
    this.$js$exported$prop$onNewGame__sjs_js_Function0__O(prep0)
  };
  get "onGameOver"() {
    return this.$js$exported$prop$onGameOver__O()
  };
  set "onGameOver"(arg) {
    const prep0 = arg;
    this.$js$exported$prop$onGameOver__sjs_js_Function0__O(prep0)
  };
  get "onChangeSoundState"() {
    return this.$js$exported$prop$onChangeSoundState__O()
  };
  set "onChangeSoundState"(arg) {
    const prep0 = arg;
    this.$js$exported$prop$onChangeSoundState__sjs_js_Function2__O(prep0)
  };
}
function $as_Lcom_kos_wormpad_game_GameListener(obj) {
  return (((obj instanceof $c_Lcom_kos_wormpad_game_GameListener) || (obj === null)) ? obj : $throwClassCastException(obj, "com.kos.wormpad.game.GameListener"))
}
function $isArrayOf_Lcom_kos_wormpad_game_GameListener(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_kos_wormpad_game_GameListener)))
}
function $asArrayOf_Lcom_kos_wormpad_game_GameListener(obj, depth) {
  return (($isArrayOf_Lcom_kos_wormpad_game_GameListener(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.kos.wormpad.game.GameListener;", depth))
}
const $d_Lcom_kos_wormpad_game_GameListener = new $TypeData().initClass({
  Lcom_kos_wormpad_game_GameListener: 0
}, false, "com.kos.wormpad.game.GameListener", {
  Lcom_kos_wormpad_game_GameListener: 1,
  O: 1
});
$c_Lcom_kos_wormpad_game_GameListener.prototype.$classData = $d_Lcom_kos_wormpad_game_GameListener;
class $c_Lcom_kos_wormpad_game_GameListenerDelegate extends $c_O {
}
function $as_Lcom_kos_wormpad_game_GameListenerDelegate(obj) {
  return (((obj instanceof $c_Lcom_kos_wormpad_game_GameListenerDelegate) || (obj === null)) ? obj : $throwClassCastException(obj, "com.kos.wormpad.game.GameListenerDelegate"))
}
function $isArrayOf_Lcom_kos_wormpad_game_GameListenerDelegate(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_kos_wormpad_game_GameListenerDelegate)))
}
function $asArrayOf_Lcom_kos_wormpad_game_GameListenerDelegate(obj, depth) {
  return (($isArrayOf_Lcom_kos_wormpad_game_GameListenerDelegate(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.kos.wormpad.game.GameListenerDelegate;", depth))
}
class $c_Lcom_kos_wormpad_game_GameLoop extends $c_O {
  constructor() {
    super();
    this.Lcom_kos_wormpad_game_GameLoop__f_thenTime = $L0;
    this.Lcom_kos_wormpad_game_GameLoop__f_thenTime = $m_Lcom_kos_wormpad_game_helpers_SystemMethod$().time__J()
  };
  loop__F1__F0__F0(update, render) {
    return new $c_sjsr_AnonFunction0(((this$1, update$1, render$1) => (() => {
      window.requestAnimationFrame($m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(this$1.loop__F1__F0__F0(update$1, render$1)));
      const t = $m_Lcom_kos_wormpad_game_helpers_SystemMethod$().time__J();
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      const b = this$1.Lcom_kos_wormpad_game_GameLoop__f_thenTime;
      const bhi = b.RTLong__f_hi;
      const lo$1 = ((lo - b.RTLong__f_lo) | 0);
      const hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ lo)) ? (((-1) + ((hi - bhi) | 0)) | 0) : ((hi - bhi) | 0));
      update$1.apply__O__O(new $c_RTLong(lo$1, hi$1));
      render$1.apply__O();
      this$1.Lcom_kos_wormpad_game_GameLoop__f_thenTime = new $c_RTLong(lo, hi)
    }))(this, update, render))
  };
  start__F1__F0__V(update, render) {
    const this$1 = this.loop__F1__F0__F0(update, render);
    this$1.apply__O()
  };
}
const $d_Lcom_kos_wormpad_game_GameLoop = new $TypeData().initClass({
  Lcom_kos_wormpad_game_GameLoop: 0
}, false, "com.kos.wormpad.game.GameLoop", {
  Lcom_kos_wormpad_game_GameLoop: 1,
  O: 1
});
$c_Lcom_kos_wormpad_game_GameLoop.prototype.$classData = $d_Lcom_kos_wormpad_game_GameLoop;
const $f_Lcom_kos_wormpad_game_GameScore__score_$eq__I__V = (function($thiz, value) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$GameScore$$score_ = value
});
class $c_Lcom_kos_wormpad_game_helpers_JSHelper$ extends $c_O {
  loadSvg__T__Lorg_scalajs_dom_raw_HTMLDivElement__F1__V(svgSrcPath, parent, afterFun) {
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", svgSrcPath, null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4, svgSrcPath$1, parent$1, afterFun$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const x2 = $as_s_util_Success(x0$1);
        const value = x2.s_util_Success__f_value;
        const x = (("Load svg " + svgSrcPath$1) + " Sucess");
        const this$6 = $m_s_Console$();
        const this$7 = this$6.out__Ljava_io_PrintStream();
        this$7.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
        const element = value.responseXML.documentElement;
        parent$1.appendChild(element);
        afterFun$1.apply__O__O(element);
        const x$1 = (("Load svg " + svgSrcPath$1) + " After ok");
        const this$9 = $m_s_Console$();
        const this$10 = this$9.out__Ljava_io_PrintStream();
        this$10.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$1 + "\n"))
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const exception = x3.s_util_Failure__f_exception;
        exception.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, svgSrcPath, parent, afterFun)), $m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
  };
  clear__Lorg_scalajs_dom_raw_HTMLElement__V(element) {
    while ((element.firstChild !== null)) {
      element.removeChild(element.lastChild)
    }
  };
  addClass__Lorg_scalajs_dom_raw_HTMLElement__T__V(element, cls) {
    element.classList.add(cls)
  };
  removeClass__Lorg_scalajs_dom_raw_HTMLElement__T__V(element, cls) {
    element.classList.remove(cls)
  };
  addSvgOnClick__T__F0__V(id, action) {
    const var5 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(id);
    var5.onclick = ((action$1) => ((arg1$2) => {
      action$1.apply__O()
    }))(action)
  };
}
const $d_Lcom_kos_wormpad_game_helpers_JSHelper$ = new $TypeData().initClass({
  Lcom_kos_wormpad_game_helpers_JSHelper$: 0
}, false, "com.kos.wormpad.game.helpers.JSHelper$", {
  Lcom_kos_wormpad_game_helpers_JSHelper$: 1,
  O: 1
});
$c_Lcom_kos_wormpad_game_helpers_JSHelper$.prototype.$classData = $d_Lcom_kos_wormpad_game_helpers_JSHelper$;
let $n_Lcom_kos_wormpad_game_helpers_JSHelper$ = (void 0);
function $m_Lcom_kos_wormpad_game_helpers_JSHelper$() {
  if ((!$n_Lcom_kos_wormpad_game_helpers_JSHelper$)) {
    $n_Lcom_kos_wormpad_game_helpers_JSHelper$ = new $c_Lcom_kos_wormpad_game_helpers_JSHelper$()
  };
  return $n_Lcom_kos_wormpad_game_helpers_JSHelper$
}
class $c_Lcom_kos_wormpad_game_helpers_SystemMethod$ extends $c_O {
  time__J() {
    const this$1 = $m_RTLong$();
    const value = $uD(Date.now());
    const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return new $c_RTLong(lo, hi)
  };
}
const $d_Lcom_kos_wormpad_game_helpers_SystemMethod$ = new $TypeData().initClass({
  Lcom_kos_wormpad_game_helpers_SystemMethod$: 0
}, false, "com.kos.wormpad.game.helpers.SystemMethod$", {
  Lcom_kos_wormpad_game_helpers_SystemMethod$: 1,
  O: 1
});
$c_Lcom_kos_wormpad_game_helpers_SystemMethod$.prototype.$classData = $d_Lcom_kos_wormpad_game_helpers_SystemMethod$;
let $n_Lcom_kos_wormpad_game_helpers_SystemMethod$ = (void 0);
function $m_Lcom_kos_wormpad_game_helpers_SystemMethod$() {
  if ((!$n_Lcom_kos_wormpad_game_helpers_SystemMethod$)) {
    $n_Lcom_kos_wormpad_game_helpers_SystemMethod$ = new $c_Lcom_kos_wormpad_game_helpers_SystemMethod$()
  };
  return $n_Lcom_kos_wormpad_game_helpers_SystemMethod$
}
class $c_Lcom_kos_wormpad_geometry_Geometry$ extends $c_O {
  distance__Lcom_kos_pathtrain_heroes_Hero__Lcom_kos_pathtrain_heroes_Hero__D(a, b) {
    const a$1 = (a.Lcom_kos_pathtrain_heroes_Hero__f_x - b.Lcom_kos_pathtrain_heroes_Hero__f_x);
    const b$1 = (a.Lcom_kos_pathtrain_heroes_Hero__f_y - b.Lcom_kos_pathtrain_heroes_Hero__f_y);
    return $m_jl_Math$().hypot__D__D__D(a$1, b$1)
  };
  extractMatrix__Lorg_scalajs_dom_raw_SVGTransformable__Lorg_scalajs_dom_raw_SVGMatrix(node) {
    return node.transform.baseVal.consolidate().matrix
  };
}
const $d_Lcom_kos_wormpad_geometry_Geometry$ = new $TypeData().initClass({
  Lcom_kos_wormpad_geometry_Geometry$: 0
}, false, "com.kos.wormpad.geometry.Geometry$", {
  Lcom_kos_wormpad_geometry_Geometry$: 1,
  O: 1
});
$c_Lcom_kos_wormpad_geometry_Geometry$.prototype.$classData = $d_Lcom_kos_wormpad_geometry_Geometry$;
let $n_Lcom_kos_wormpad_geometry_Geometry$ = (void 0);
function $m_Lcom_kos_wormpad_geometry_Geometry$() {
  if ((!$n_Lcom_kos_wormpad_geometry_Geometry$)) {
    $n_Lcom_kos_wormpad_geometry_Geometry$ = new $c_Lcom_kos_wormpad_geometry_Geometry$()
  };
  return $n_Lcom_kos_wormpad_geometry_Geometry$
}
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isArray__Z() {
    return $uZ(this.jl_Class__f_data.isArrayClass)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
  getComponentType__jl_Class() {
    return $as_jl_Class(this.jl_Class__f_data.getComponentType())
  };
  newArrayOfThisClass__O__O(dimensions) {
    return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
  };
}
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
class $c_jl_Math$ extends $c_O {
  hypot__D__D__D(a, b) {
    return $uD(Math.hypot(a, b))
  };
}
const $d_jl_Math$ = new $TypeData().initClass({
  jl_Math$: 0
}, false, "java.lang.Math$", {
  jl_Math$: 1,
  O: 1
});
$c_jl_Math$.prototype.$classData = $d_jl_Math$;
let $n_jl_Math$ = (void 0);
function $m_jl_Math$() {
  if ((!$n_jl_Math$)) {
    $n_jl_Math$ = new $c_jl_Math$()
  };
  return $n_jl_Math$
}
const $d_jl_Runnable = new $TypeData().initClass({
  jl_Runnable: 0
}, true, "java.lang.Runnable", {
  jl_Runnable: 1,
  O: 1
});
const $p_jl_StackTrace$__extract__O__Ajl_StackTraceElement = (function($thiz, stackdata) {
  const lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, stackdata);
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines)
});
const $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement = (function($thiz, lines) {
  const NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension__T__O("^([^\\@]*)\\@(.*):([0-9]+)$");
  const NormalizedFrameLineWithColumn = $m_jl_StackTrace$StringRE$().re$extension__T__O("^([^\\@]*)\\@(.*):([0-9]+):([0-9]+)$");
  const trace = [];
  let i = 0;
  while ((i < $uI(lines.length))) {
    const line = $as_T(lines[i]);
    if ((line !== "")) {
      const mtch1 = NormalizedFrameLineWithColumn.exec(line);
      if ((mtch1 !== null)) {
        const x = mtch1[1];
        const classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
        const $$x3 = $as_T(classAndMethodName[0]);
        const $$x2 = $as_T(classAndMethodName[1]);
        const x$1 = mtch1[2];
        const $$x1 = $as_T(x$1);
        const x$2 = mtch1[3];
        const s = $as_T(x$2);
        const elem = new $c_jl_StackTraceElement($$x3, $$x2, $$x1, $uI(parseInt(s)));
        const x$3 = mtch1[4];
        const s$1 = $as_T(x$3);
        elem.jl_StackTraceElement__f_columnNumber = $uI(parseInt(s$1));
        $uI(trace.push(elem))
      } else {
        const mtch2 = NormalizedFrameLine.exec(line);
        if ((mtch2 !== null)) {
          const x$4 = mtch2[1];
          const classAndMethodName$2 = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x$4));
          const $$x7 = $as_T(classAndMethodName$2[0]);
          const $$x6 = $as_T(classAndMethodName$2[1]);
          const x$5 = mtch2[2];
          const $$x5 = $as_T(x$5);
          const x$6 = mtch2[3];
          const s$2 = $as_T(x$6);
          const $$x4 = trace.push(new $c_jl_StackTraceElement($$x7, $$x6, $$x5, $uI(parseInt(s$2))));
          $uI($$x4)
        } else {
          $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1))))
        }
      }
    };
    i = ((1 + i) | 0)
  };
  const len = $uI(trace.length);
  const result = $newArrayObject($d_jl_StackTraceElement.getArrayOf(), [len]);
  i = 0;
  while ((i < len)) {
    result.set(i, $as_jl_StackTraceElement(trace[i]));
    i = ((1 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractClassMethod__T__O = (function($thiz, functionName) {
  const PatC = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$c_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  const PatS = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  const PatCT = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  const PatN = $m_jl_StackTrace$StringRE$().re$extension__T__O("^new (?:Object\\.|\\[object Object\\]\\.)?\\$c_([^\\.]+)$");
  const PatM = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$m_([^\\.]+)$");
  const matchC = PatC.exec(functionName);
  const matchCOrS = ((matchC !== null) ? matchC : PatS.exec(functionName));
  if ((matchCOrS !== null)) {
    const x = matchCOrS[1];
    const $$x1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
    const x$1 = matchCOrS[2];
    return [$$x1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))]
  } else {
    const matchCT = PatCT.exec(functionName);
    const matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      const x$2 = matchCTOrN[1];
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"]
    } else {
      const matchM = PatM.exec(functionName);
      if ((matchM !== null)) {
        const x$3 = matchM[1];
        return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"]
      } else {
        return ["<jscode>", functionName]
      }
    }
  }
});
const $p_jl_StackTrace$__decodeClassName__T__T = (function($thiz, encodedName) {
  const dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  let base;
  if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
    const dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    base = $as_T(dict$1[encodedName])
  } else {
    base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName)
  };
  const this$4 = $as_T(base.split("_").join("."));
  return $as_T(this$4.split("\uff3f").join("_"))
});
const $p_jl_StackTrace$__decompressedClasses$lzycompute__O = (function($thiz) {
  if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    const dict = {};
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    let index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        const key = ("T" + index);
        const value = ("scala_Tuple" + index);
        dict[key] = value
      };
      const key$1 = ("F" + index);
      const value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0)
    };
    $thiz.jl_StackTrace$__f_decompressedClasses = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedClasses
});
const $p_jl_StackTrace$__decompressedClasses__O = (function($thiz) {
  return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses)
});
const $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O = (function($thiz) {
  if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    const dict = {};
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedPrefixes
});
const $p_jl_StackTrace$__decompressedPrefixes__O = (function($thiz) {
  return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes)
});
const $p_jl_StackTrace$__compressedPrefixes$lzycompute__O = (function($thiz) {
  if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_compressedPrefixes
});
const $p_jl_StackTrace$__compressedPrefixes__O = (function($thiz) {
  return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes)
});
const $p_jl_StackTrace$__decodeMethodName__T__T = (function($thiz, encodedName) {
  if ((($uI(encodedName.length) >= 0) && ($as_T(encodedName.substring(0, $uI("init___".length))) === "init___"))) {
    return "<init>"
  } else {
    const methodNameLen = $uI(encodedName.indexOf("__"));
    return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)))
  }
});
const $p_jl_StackTrace$__normalizeStackTraceLines__O__O = (function($thiz, e) {
  const x = (!e);
  if ($uZ((!(!x)))) {
    return []
  } else {
    const x$1 = (e.arguments && e.stack);
    if ($uZ((!(!x$1)))) {
      return $p_jl_StackTrace$__extractChrome__O__O($thiz, e)
    } else {
      const x$2 = (e.stack && e.sourceURL);
      if ($uZ((!(!x$2)))) {
        return $p_jl_StackTrace$__extractSafari__O__O($thiz, e)
      } else {
        const x$3 = (e.stack && e.number);
        if ($uZ((!(!x$3)))) {
          return $p_jl_StackTrace$__extractIE__O__O($thiz, e)
        } else {
          const x$4 = (e.stack && e.fileName);
          if ($uZ((!(!x$4)))) {
            return $p_jl_StackTrace$__extractFirefox__O__O($thiz, e)
          } else {
            const x$5 = (e.message && e["opera#sourceloc"]);
            if ($uZ((!(!x$5)))) {
              const x$6 = (!e.stacktrace);
              if ($uZ((!(!x$6)))) {
                return $p_jl_StackTrace$__extractOpera9__O__O($thiz, e)
              } else {
                const x$7 = ((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length));
                if ($uZ((!(!x$7)))) {
                  return $p_jl_StackTrace$__extractOpera9__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e)
                }
              }
            } else {
              const x$8 = ((e.message && e.stack) && e.stacktrace);
              if ($uZ((!(!x$8)))) {
                const x$9 = (e.stacktrace.indexOf("called from line") < 0.0);
                if ($uZ((!(!x$9)))) {
                  return $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)
                }
              } else {
                const x$10 = (e.stack && (!e.fileName));
                if ($uZ((!(!x$10)))) {
                  return $p_jl_StackTrace$__extractChrome__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOther__O__O($thiz, e)
                }
              }
            }
          }
        }
      }
    }
  }
});
const $p_jl_StackTrace$__extractChrome__O__O = (function($thiz, e) {
  const x = ($as_T(e.stack) + "\n");
  const $$x6 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ");
  const x$1 = $as_T($$x6);
  const $$x5 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "");
  const x$2 = $as_T($$x5);
  const $$x4 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2");
  const x$3 = $as_T($$x4);
  const $$x3 = x$3.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)");
  const x$4 = $as_T($$x3);
  const $$x2 = x$4.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2");
  const x$5 = $as_T($$x2);
  const $$x1 = x$5.split("\n");
  return $$x1.slice(0, (-1))
});
const $p_jl_StackTrace$__extractFirefox__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x2 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("(?:\\n@:0)?\\s+$", "m"), "");
  const x$1 = $as_T($$x2);
  const $$x1 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@");
  const x$2 = $as_T($$x1);
  return x$2.split("\n")
});
const $p_jl_StackTrace$__extractIE__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x3 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1");
  const x$1 = $as_T($$x3);
  const $$x2 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ");
  const x$2 = $as_T($$x2);
  const $$x1 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2");
  const x$3 = $as_T($$x1);
  const qual$1 = x$3.split("\n");
  return qual$1.slice(1)
});
const $p_jl_StackTrace$__extractSafari__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x3 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("\\[native code\\]\\n", "m"), "");
  const x$1 = $as_T($$x3);
  const $$x2 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "");
  const x$2 = $as_T($$x2);
  const $$x1 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^@", "gm"), "{anonymous}()@");
  const x$3 = $as_T($$x1);
  return x$3.split("\n")
});
const $p_jl_StackTrace$__extractOpera9__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
  const x = $as_T(e.message);
  const lines = x.split("\n");
  const result = [];
  let i = 2;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[2];
      const x$2 = mtch[1];
      const $$x1 = result.push(((("{anonymous}()@" + x$1) + ":") + x$2));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera10a__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[3];
      const fnName = $as_T(((x$1 !== (void 0)) ? x$1 : "{anonymous}"));
      const x$2 = mtch[2];
      const x$3 = mtch[1];
      const $$x1 = result.push(((((fnName + "()@") + x$2) + ":") + x$3));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera10b__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(.*)@(.+):(\\d+)$");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[1];
      let $$x1;
      if ((x$1 !== (void 0))) {
        const arg1 = $as_T(x$1);
        $$x1 = $m_jl_StackTrace$().java$lang$StackTrace$$$anonfun$extractOpera10b$1__T__T(arg1)
      } else {
        $$x1 = "global code"
      };
      const fnName = $as_T($$x1);
      const x$2 = mtch[2];
      const x$3 = mtch[3];
      const $$x2 = result.push(((((fnName + "@") + x$2) + ":") + x$3));
      $uI($$x2)
    };
    i = ((1 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera11__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[4];
      const $$x1 = $as_T(x$1);
      const x$2 = mtch[1];
      const x$3 = mtch[2];
      const location = (((($$x1 + ":") + x$2) + ":") + x$3);
      const x$4 = mtch[2];
      const fnName0 = $as_T(((x$4 !== (void 0)) ? x$4 : "global code"));
      const x$5 = $as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension__T__O("<anonymous function: (\\S+)>"), "$1"));
      const $$x2 = x$5.replace($m_jl_StackTrace$StringRE$().re$extension__T__O("<anonymous function>"), "{anonymous}");
      const fnName = $as_T($$x2);
      $uI(result.push(((fnName + "@") + location)))
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOther__O__O = (function($thiz, e) {
  return []
});
const $p_jl_StackTrace$__loop$1__I__T__T = (function($thiz, i, encodedName$1) {
  while (true) {
    if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
      const prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
      if ((($uI(encodedName$1.length) >= 0) && ($as_T(encodedName$1.substring(0, $uI(prefix.length))) === prefix))) {
        const dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        const $$x1 = $as_T(dict[prefix]);
        const beginIndex = $uI(prefix.length);
        return (("" + $$x1) + $as_T(encodedName$1.substring(beginIndex)))
      } else {
        i = ((1 + i) | 0)
      }
    } else {
      return ((($uI(encodedName$1.length) >= 0) && ($as_T(encodedName$1.substring(0, $uI("L".length))) === "L")) ? $as_T(encodedName$1.substring(1)) : encodedName$1)
    }
  }
});
class $c_jl_StackTrace$ extends $c_O {
  constructor() {
    super();
    this.jl_StackTrace$__f_decompressedClasses = null;
    this.jl_StackTrace$__f_decompressedPrefixes = null;
    this.jl_StackTrace$__f_compressedPrefixes = null;
    this.jl_StackTrace$__f_bitmap$0 = 0
  };
  java$lang$StackTrace$$$anonfun$extractOpera10b$1__T__T(x$1) {
    return (x$1 + "()")
  };
}
const $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
let $n_jl_StackTrace$ = (void 0);
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
class $c_jl_StackTrace$StringRE$ extends $c_O {
  re$extension__T__O(this$) {
    return new RegExp(this$)
  };
  re$extension__T__T__O(this$, mods) {
    return new RegExp(this$, mods)
  };
}
const $d_jl_StackTrace$StringRE$ = new $TypeData().initClass({
  jl_StackTrace$StringRE$: 0
}, false, "java.lang.StackTrace$StringRE$", {
  jl_StackTrace$StringRE$: 1,
  O: 1
});
$c_jl_StackTrace$StringRE$.prototype.$classData = $d_jl_StackTrace$StringRE$;
let $n_jl_StackTrace$StringRE$ = (void 0);
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$()
  };
  return $n_jl_StackTrace$StringRE$
}
class $c_jl_System$Streams$ extends $c_O {
  constructor() {
    super();
    this.jl_System$Streams$__f_out = null;
    this.jl_System$Streams$__f_err = null;
    this.jl_System$Streams$__f_in = null;
    $n_jl_System$Streams$ = this;
    this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
    this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
    this.jl_System$Streams$__f_in = null
  };
}
const $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
let $n_jl_System$Streams$ = (void 0);
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $as_T($m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1)) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Thread$ extends $c_O {
  constructor() {
    super();
    this.jl_Thread$__f_SingleThread = null;
    $n_jl_Thread$ = this;
    this.jl_Thread$__f_SingleThread = new $c_jl_Thread((void 0))
  };
}
const $d_jl_Thread$ = new $TypeData().initClass({
  jl_Thread$: 0
}, false, "java.lang.Thread$", {
  jl_Thread$: 1,
  O: 1
});
$c_jl_Thread$.prototype.$classData = $d_jl_Thread$;
let $n_jl_Thread$ = (void 0);
function $m_jl_Thread$() {
  if ((!$n_jl_Thread$)) {
    $n_jl_Thread$ = new $c_jl_Thread$()
  };
  return $n_jl_Thread$
}
class $c_jl_ThreadLocal extends $c_O {
  constructor() {
    super();
    this.jl_ThreadLocal__f_hasValue = false;
    this.jl_ThreadLocal__f_v = null;
    this.jl_ThreadLocal__f_hasValue = false
  };
  get__O() {
    if ((!this.jl_ThreadLocal__f_hasValue)) {
      this.set__O__V(null)
    };
    return this.jl_ThreadLocal__f_v
  };
  set__O__V(o) {
    this.jl_ThreadLocal__f_v = o;
    this.jl_ThreadLocal__f_hasValue = true
  };
}
const $d_jl_ThreadLocal = new $TypeData().initClass({
  jl_ThreadLocal: 0
}, false, "java.lang.ThreadLocal", {
  jl_ThreadLocal: 1,
  O: 1
});
$c_jl_ThreadLocal.prototype.$classData = $d_jl_ThreadLocal;
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  newInstance__jl_Class__I__O(componentType, length) {
    return componentType.newArrayOfThisClass__O__O([length])
  };
  getLength__O__I(array) {
    if ($isArrayOf_O(array, 1)) {
      const x2 = $asArrayOf_O(array, 1);
      return x2.u.length
    } else if ($isArrayOf_Z(array, 1)) {
      const x3 = $asArrayOf_Z(array, 1);
      return x3.u.length
    } else if ($isArrayOf_C(array, 1)) {
      const x4 = $asArrayOf_C(array, 1);
      return x4.u.length
    } else if ($isArrayOf_B(array, 1)) {
      const x5 = $asArrayOf_B(array, 1);
      return x5.u.length
    } else if ($isArrayOf_S(array, 1)) {
      const x6 = $asArrayOf_S(array, 1);
      return x6.u.length
    } else if ($isArrayOf_I(array, 1)) {
      const x7 = $asArrayOf_I(array, 1);
      return x7.u.length
    } else if ($isArrayOf_J(array, 1)) {
      const x8 = $asArrayOf_J(array, 1);
      return x8.u.length
    } else if ($isArrayOf_F(array, 1)) {
      const x9 = $asArrayOf_F(array, 1);
      return x9.u.length
    } else if ($isArrayOf_D(array, 1)) {
      const x10 = $asArrayOf_D(array, 1);
      return x10.u.length
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
    }
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.get(mid);
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
  equals__AI__AI__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  copyOf__AO__I__AO(original, newLength) {
    const tagT = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(original).getComponentType__jl_Class());
    if ((newLength < 0)) {
      throw new $c_jl_NegativeArraySizeException()
    };
    const b = original.u.length;
    const copyLength = ((newLength < b) ? newLength : b);
    const ret = tagT.newArray__I__O(newLength);
    $systemArraycopy(original, 0, ret, 0, copyLength);
    return $asArrayOf_O(ret, 1)
  };
  copyOfRange__AO__I__I__AO(original, from, to) {
    const evidence$6 = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(original).getComponentType__jl_Class());
    if ((from > to)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
    };
    const retLength = ((to - from) | 0);
    const b = ((original.u.length - from) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = evidence$6.newArray__I__O(retLength);
    $systemArraycopy(original, from, ret, 0, copyLength);
    return $asArrayOf_O(ret, 1)
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
class $c_Lorg_scalajs_dom_ext_Ajax$ extends $c_O {
  apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future(method, url, data, timeout, headers, withCredentials, responseType) {
    const req = new XMLHttpRequest();
    const promise = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
    req.onreadystatechange = ((req$1, promise$1) => ((arg1$2) => $m_Lorg_scalajs_dom_ext_Ajax$().org$scalajs$dom$ext$Ajax$$$anonfun$apply$1__Lorg_scalajs_dom_raw_Event__Lorg_scalajs_dom_raw_XMLHttpRequest__s_concurrent_Promise__O(arg1$2, req$1, promise$1)))(req, promise);
    req.open(method, url);
    req.responseType = responseType;
    req.timeout = timeout;
    req.withCredentials = withCredentials;
    headers.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$2, req$2) => ((x$2) => {
      const x = $as_T2(x$2);
      req$2.setRequestHeader($as_T(x._1__O()), $as_T(x._2__O()))
    }))(this, req)));
    if ((data === null)) {
      req.send()
    } else {
      req.send(data)
    };
    return promise
  };
  org$scalajs$dom$ext$Ajax$$$anonfun$apply$1__Lorg_scalajs_dom_raw_Event__Lorg_scalajs_dom_raw_XMLHttpRequest__s_concurrent_Promise__O(e, req$1, promise$1) {
    if (($uI(req$1.readyState) === 4)) {
      if (((($uI(req$1.status) >= 200) && ($uI(req$1.status) < 300)) || ($uI(req$1.status) === 304))) {
        return $f_s_concurrent_Promise__success__O__s_concurrent_Promise(promise$1, req$1)
      } else {
        const cause = new $c_Lorg_scalajs_dom_ext_AjaxException(req$1);
        return $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(promise$1, cause)
      }
    } else {
      return (void 0)
    }
  };
}
const $d_Lorg_scalajs_dom_ext_Ajax$ = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_Ajax$: 0
}, false, "org.scalajs.dom.ext.Ajax$", {
  Lorg_scalajs_dom_ext_Ajax$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_ext_Ajax$.prototype.$classData = $d_Lorg_scalajs_dom_ext_Ajax$;
let $n_Lorg_scalajs_dom_ext_Ajax$ = (void 0);
function $m_Lorg_scalajs_dom_ext_Ajax$() {
  if ((!$n_Lorg_scalajs_dom_ext_Ajax$)) {
    $n_Lorg_scalajs_dom_ext_Ajax$ = new $c_Lorg_scalajs_dom_ext_Ajax$()
  };
  return $n_Lorg_scalajs_dom_ext_Ajax$
}
const $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window = (function($thiz) {
  if (((33554432 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (33554432 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
});
const $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument = (function($thiz) {
  if (((67108864 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (67108864 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
    this.Lorg_scalajs_dom_package$__f_Blob = null;
    this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
    this.Lorg_scalajs_dom_package$__f_DOMException = null;
    this.Lorg_scalajs_dom_package$__f_Event = null;
    this.Lorg_scalajs_dom_package$__f_EventException = null;
    this.Lorg_scalajs_dom_package$__f_EventSource = null;
    this.Lorg_scalajs_dom_package$__f_FileReader = null;
    this.Lorg_scalajs_dom_package$__f_FormData = null;
    this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
    this.Lorg_scalajs_dom_package$__f_MediaError = null;
    this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
    this.Lorg_scalajs_dom_package$__f_Node = null;
    this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
    this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
    this.Lorg_scalajs_dom_package$__f_PositionError = null;
    this.Lorg_scalajs_dom_package$__f_Range = null;
    this.Lorg_scalajs_dom_package$__f_TextEvent = null;
    this.Lorg_scalajs_dom_package$__f_TextTrack = null;
    this.Lorg_scalajs_dom_package$__f_URL = null;
    this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
    this.Lorg_scalajs_dom_package$__f_WebSocket = null;
    this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
    this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
    this.Lorg_scalajs_dom_package$__f_XPathResult = null;
    this.Lorg_scalajs_dom_package$__f_window = null;
    this.Lorg_scalajs_dom_package$__f_document = null;
    this.Lorg_scalajs_dom_package$__f_console = null;
    this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((33554432 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((67108864 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
class $c_s_Array$EmptyArrays$ extends $c_O {
  constructor() {
    super();
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = null;
    this.s_Array$EmptyArrays$__f_emptyByteArray = null;
    this.s_Array$EmptyArrays$__f_emptyCharArray = null;
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = null;
    this.s_Array$EmptyArrays$__f_emptyFloatArray = null;
    this.s_Array$EmptyArrays$__f_emptyIntArray = null;
    this.s_Array$EmptyArrays$__f_emptyLongArray = null;
    this.s_Array$EmptyArrays$__f_emptyShortArray = null;
    this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
    $n_s_Array$EmptyArrays$ = this;
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = $newArrayObject($d_Z.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyByteArray = $newArrayObject($d_B.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyCharArray = $newArrayObject($d_C.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = $newArrayObject($d_D.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyFloatArray = $newArrayObject($d_F.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyIntArray = $newArrayObject($d_I.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyLongArray = $newArrayObject($d_J.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyShortArray = $newArrayObject($d_S.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyObjectArray = $newArrayObject($d_O.getArrayOf(), [0])
  };
}
const $d_s_Array$EmptyArrays$ = new $TypeData().initClass({
  s_Array$EmptyArrays$: 0
}, false, "scala.Array$EmptyArrays$", {
  s_Array$EmptyArrays$: 1,
  O: 1
});
$c_s_Array$EmptyArrays$.prototype.$classData = $d_s_Array$EmptyArrays$;
let $n_s_Array$EmptyArrays$ = (void 0);
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$()
  };
  return $n_s_Array$EmptyArrays$
}
class $c_s_LowPriorityImplicits2 extends $c_O {
}
class $c_sc_Hashing$ extends $c_O {
  improve__I__I(hcode) {
    let h = ((hcode + (~(hcode << 9))) | 0);
    h = (h ^ ((h >>> 14) | 0));
    h = ((h + (h << 4)) | 0);
    return (h ^ ((h >>> 10) | 0))
  };
}
const $d_sc_Hashing$ = new $TypeData().initClass({
  sc_Hashing$: 0
}, false, "scala.collection.Hashing$", {
  sc_Hashing$: 1,
  O: 1
});
$c_sc_Hashing$.prototype.$classData = $d_sc_Hashing$;
let $n_sc_Hashing$ = (void 0);
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$()
  };
  return $n_sc_Hashing$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
const $f_sc_IterableOnceOps__foreach__F1__V = (function($thiz, f) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    f.apply__O__O(it.next__O())
  }
});
const $f_sc_IterableOnceOps__forall__F1__Z = (function($thiz, p) {
  let res = true;
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while ((res && it.hasNext__Z())) {
    res = $uZ(p.apply__O__O(it.next__O()))
  };
  return res
});
const $f_sc_IterableOnceOps__exists__F1__Z = (function($thiz, p) {
  let res = false;
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (((!res) && it.hasNext__Z())) {
    res = $uZ(p.apply__O__O(it.next__O()))
  };
  return res
});
const $f_sc_IterableOnceOps__isEmpty__Z = (function($thiz) {
  return (!$as_sc_IterableOnce($thiz).iterator__sc_Iterator().hasNext__Z())
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I = (function($thiz, xs, start) {
  const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  while (((i < xsLen) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I__I = (function($thiz, xs, start, len) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
const $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (($uI(start.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (($uI(end.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
});
class $c_sc_Iterator$ConcatIteratorCell extends $c_O {
  constructor(head, tail) {
    super();
    this.sc_Iterator$ConcatIteratorCell__f_head = null;
    this.sc_Iterator$ConcatIteratorCell__f_tail = null;
    this.sc_Iterator$ConcatIteratorCell__f_head = head;
    this.sc_Iterator$ConcatIteratorCell__f_tail = tail
  };
  headIterator__sc_Iterator() {
    return $as_sc_IterableOnce(this.sc_Iterator$ConcatIteratorCell__f_head.apply__O()).iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass({
  sc_Iterator$ConcatIteratorCell: 0
}, false, "scala.collection.Iterator$ConcatIteratorCell", {
  sc_Iterator$ConcatIteratorCell: 1,
  O: 1
});
$c_sc_Iterator$ConcatIteratorCell.prototype.$classData = $d_sc_Iterator$ConcatIteratorCell;
const $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps = (function($thiz) {
  if ((!$thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0)) {
    $thiz.sc_LinearSeqIterator$LazyCell__f_v = $as_sc_LinearSeqOps($thiz.sc_LinearSeqIterator$LazyCell__f_st.apply__O());
    $thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sc_LinearSeqIterator$LazyCell__f_st = null;
  return $thiz.sc_LinearSeqIterator$LazyCell__f_v
});
class $c_sc_LinearSeqIterator$LazyCell extends $c_O {
  constructor(outer, st) {
    super();
    this.sc_LinearSeqIterator$LazyCell__f_v = null;
    this.sc_LinearSeqIterator$LazyCell__f_st = null;
    this.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = false;
    this.sc_LinearSeqIterator$LazyCell__f_st = st
  };
  v__sc_LinearSeqOps() {
    return ((!this.sc_LinearSeqIterator$LazyCell__f_bitmap$0) ? $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps(this) : this.sc_LinearSeqIterator$LazyCell__f_v)
  };
}
const $d_sc_LinearSeqIterator$LazyCell = new $TypeData().initClass({
  sc_LinearSeqIterator$LazyCell: 0
}, false, "scala.collection.LinearSeqIterator$LazyCell", {
  sc_LinearSeqIterator$LazyCell: 1,
  O: 1
});
$c_sc_LinearSeqIterator$LazyCell.prototype.$classData = $d_sc_LinearSeqIterator$LazyCell;
const $p_sci_ChampBaseIterator__initNodes__V = (function($thiz) {
  if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
    $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = $newArrayObject($d_I.getArrayOf(), [($m_sci_Node$().sci_Node$__f_MaxDepth << 1)]);
    $thiz.sci_ChampBaseIterator__f_nodes = $newArrayObject($d_sci_Node.getArrayOf(), [$m_sci_Node$().sci_Node$__f_MaxDepth])
  }
});
const $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = node.payloadArity__I()
});
const $p_sci_ChampBaseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
  const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
  const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
  $thiz.sci_ChampBaseIterator__f_nodes.set($thiz.sci_ChampBaseIterator__f_currentStackLevel, node);
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.set(cursorIndex, 0);
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.set(lengthIndex, node.nodeArity__I())
});
const $p_sci_ChampBaseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
    const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
    const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
    const nodeCursor = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.get(cursorIndex);
    const nodeLength = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.get(lengthIndex);
    if ((nodeCursor < nodeLength)) {
      const ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
      ev$1.set(cursorIndex, ((1 + ev$1.get(cursorIndex)) | 0));
      const nextNode = $thiz.sci_ChampBaseIterator__f_nodes.get($thiz.sci_ChampBaseIterator__f_currentStackLevel).getNode__I__sci_Node(nodeCursor);
      if (nextNode.hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode)
      };
      if (nextNode.hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz)
    }
  };
  return false
});
const $ct_sci_ChampBaseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
  return $thiz
});
const $ct_sci_ChampBaseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hasNodes__Z()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode)
  };
  if (rootNode.hasPayload__Z()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode)
  };
  return $thiz
});
class $c_sci_ChampBaseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseIterator__f_currentValueLength = 0;
    this.sci_ChampBaseIterator__f_currentValueNode = null;
    this.sci_ChampBaseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
    this.sci_ChampBaseIterator__f_nodes = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + node.payloadArity__I()) | 0)
});
const $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, node);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + node.nodeArity__I()) | 0))
});
const $p_sci_ChampBaseReverseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel >= 0)) {
    const nodeCursor = $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
    $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + nodeCursor) | 0));
    if ((nodeCursor >= 0)) {
      const nextNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel).getNode__I__sci_Node(nodeCursor);
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, nextNode)
    } else {
      const currNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hasPayload__Z()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true
      }
    }
  };
  return false
});
const $ct_sci_ChampBaseReverseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex = $newArrayObject($d_I.getArrayOf(), [((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0)]);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack = $newArrayObject($d_sci_Node.getArrayOf(), [((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0)]);
  return $thiz
});
const $ct_sci_ChampBaseReverseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz
});
class $c_sci_ChampBaseReverseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
    this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
    this.sci_ChampBaseReverseIterator__f_nodeStack = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseReverseIterator__f_currentValueCursor >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
class $c_sci_LazyList$LazyBuilder$DeferredState extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$LazyBuilder$DeferredState__f__state = null
  };
  eval__sci_LazyList$State() {
    const state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
    if ((state === null)) {
      throw new $c_jl_IllegalStateException("uninitialized")
    };
    return $as_sci_LazyList$State(state.apply__O())
  };
  init__F0__V(state) {
    if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
      throw new $c_jl_IllegalStateException("already initialized")
    };
    this.sci_LazyList$LazyBuilder$DeferredState__f__state = state
  };
}
const $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass({
  sci_LazyList$LazyBuilder$DeferredState: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", {
  sci_LazyList$LazyBuilder$DeferredState: 1,
  O: 1
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.$classData = $d_sci_LazyList$LazyBuilder$DeferredState;
class $c_sci_MapNode$ extends $c_O {
  constructor() {
    super();
    this.sci_MapNode$__f_EmptyMapNode = null;
    $n_sci_MapNode$ = this;
    this.sci_MapNode$__f_EmptyMapNode = new $c_sci_BitmapIndexedMapNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_MapNode$ = new $TypeData().initClass({
  sci_MapNode$: 0
}, false, "scala.collection.immutable.MapNode$", {
  sci_MapNode$: 1,
  O: 1
});
$c_sci_MapNode$.prototype.$classData = $d_sci_MapNode$;
let $n_sci_MapNode$ = (void 0);
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$()
  };
  return $n_sci_MapNode$
}
const $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException = (function($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_sr_ScalaRunTime$().array_length__O__I(as)) | 0)))
});
class $c_sci_Node extends $c_O {
  removeElement__AI__I__AI(as, ix) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > (((-1) + as.u.length) | 0))) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [(((-1) + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    const srcPos = ((1 + ix) | 0);
    const length = (((-1) + ((as.u.length - ix) | 0)) | 0);
    $systemArraycopy(as, srcPos, result, ix, length);
    return result
  };
  insertElement__AI__I__I__AI(as, ix, elem) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > as.u.length)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    result.set(ix, elem);
    const destPos = ((1 + ix) | 0);
    const length = ((as.u.length - ix) | 0);
    $systemArraycopy(as, ix, result, destPos, length);
    return result
  };
}
const $d_sci_Node = new $TypeData().initClass({
  sci_Node: 0
}, false, "scala.collection.immutable.Node", {
  sci_Node: 1,
  O: 1
});
$c_sci_Node.prototype.$classData = $d_sci_Node;
class $c_sci_Node$ extends $c_O {
  constructor() {
    super();
    this.sci_Node$__f_MaxDepth = 0;
    $n_sci_Node$ = this;
    this.sci_Node$__f_MaxDepth = $doubleToInt($uD(Math.ceil(6.4)))
  };
  maskFrom__I__I__I(hash, shift) {
    return (31 & ((hash >>> shift) | 0))
  };
  bitposFrom__I__I(mask) {
    return (1 << mask)
  };
  indexFrom__I__I__I(bitmap, bitpos) {
    const i = (bitmap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  indexFrom__I__I__I__I(bitmap, mask, bitpos) {
    return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos))
  };
}
const $d_sci_Node$ = new $TypeData().initClass({
  sci_Node$: 0
}, false, "scala.collection.immutable.Node$", {
  sci_Node$: 1,
  O: 1
});
$c_sci_Node$.prototype.$classData = $d_sci_Node$;
let $n_sci_Node$ = (void 0);
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$()
  };
  return $n_sci_Node$
}
class $c_sci_SetNode$ extends $c_O {
  constructor() {
    super();
    this.sci_SetNode$__f_EmptySetNode = null;
    $n_sci_SetNode$ = this;
    this.sci_SetNode$__f_EmptySetNode = new $c_sci_BitmapIndexedSetNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_SetNode$ = new $TypeData().initClass({
  sci_SetNode$: 0
}, false, "scala.collection.immutable.SetNode$", {
  sci_SetNode$: 1,
  O: 1
});
$c_sci_SetNode$.prototype.$classData = $d_sci_SetNode$;
let $n_sci_SetNode$ = (void 0);
function $m_sci_SetNode$() {
  if ((!$n_sci_SetNode$)) {
    $n_sci_SetNode$ = new $c_sci_SetNode$()
  };
  return $n_sci_SetNode$
}
const $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V = (function($thiz, n, a, lo, hi) {
  while (true) {
    if ((n === 1)) {
      const a$1 = a;
      const start = lo;
      const end = hi;
      $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, 1, (((start === 0) && (end === a$1.u.length)) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, start, end)))
    } else {
      const bitsN = $imul(5, (((-1) + n) | 0));
      const widthN = (1 << bitsN);
      const loN = ((lo >>> bitsN) | 0);
      const hiN = ((hi >>> bitsN) | 0);
      const loRest = (lo & (((-1) + widthN) | 0));
      const hiRest = (hi & (((-1) + widthN) | 0));
      if ((loRest === 0)) {
        if ((hiRest === 0)) {
          const $$x1 = n;
          const a$2 = a;
          $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x1, (((loN === 0) && (hiN === a$2.u.length)) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, loN, hiN)))
        } else {
          if ((hiN > loN)) {
            const $$x2 = n;
            const a$3 = a;
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x2, (((loN === 0) && (hiN === a$3.u.length)) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, loN, hiN)))
          };
          const temp$n = (((-1) + n) | 0);
          const temp$a = $asArrayOf_O(a.get(hiN), 1);
          n = temp$n;
          a = temp$a;
          lo = 0;
          hi = hiRest;
          continue
        }
      } else if ((hiN === loN)) {
        const temp$n$2 = (((-1) + n) | 0);
        const temp$a$2 = $asArrayOf_O(a.get(loN), 1);
        n = temp$n$2;
        a = temp$a$2;
        lo = loRest;
        hi = hiRest;
        continue
      } else {
        $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V($thiz, (((-1) + n) | 0), $asArrayOf_O(a.get(loN), 1), loRest, widthN);
        if ((hiRest === 0)) {
          if ((hiN > ((1 + loN) | 0))) {
            const $$x3 = n;
            const a$4 = a;
            const start$1 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x3, (((start$1 === 0) && (hiN === a$4.u.length)) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, start$1, hiN)))
          }
        } else {
          if ((hiN > ((1 + loN) | 0))) {
            const $$x4 = n;
            const a$5 = a;
            const start$2 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x4, (((start$2 === 0) && (hiN === a$5.u.length)) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, start$2, hiN)))
          };
          const temp$n$3 = (((-1) + n) | 0);
          const temp$a$3 = $asArrayOf_O(a.get(hiN), 1);
          n = temp$n$3;
          a = temp$a$3;
          lo = 0;
          hi = hiRest;
          continue
        }
      }
    };
    break
  }
});
const $p_sci_VectorSliceBuilder__add__I__AO__V = (function($thiz, n, a) {
  let idx;
  if ((n <= $thiz.sci_VectorSliceBuilder__f_maxDim)) {
    idx = ((11 - n) | 0)
  } else {
    $thiz.sci_VectorSliceBuilder__f_maxDim = n;
    idx = (((-1) + n) | 0)
  };
  $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(idx, a)
});
const $p_sci_VectorSliceBuilder__balancePrefix__I__V = (function($thiz, n) {
  if (($thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get((((-1) + n) | 0)) === null)) {
    if ((n === $thiz.sci_VectorSliceBuilder__f_maxDim)) {
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set((((-1) + n) | 0), $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(((11 - n) | 0)));
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(((11 - n) | 0), null)
    } else {
      $p_sci_VectorSliceBuilder__balancePrefix__I__V($thiz, ((1 + n) | 0));
      const $$x1 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
      const n$1 = ((1 + n) | 0);
      const preN1 = $asArrayOf_O($$x1.get((((-1) + n$1) | 0)), 2);
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set((((-1) + n) | 0), preN1.get(0));
      if ((preN1.u.length === 1)) {
        const $$x2 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$2 = ((1 + n) | 0);
        $$x2.set((((-1) + n$2) | 0), null);
        let $$x3;
        if (($thiz.sci_VectorSliceBuilder__f_maxDim === ((1 + n) | 0))) {
          const $$x4 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
          const n$3 = ((1 + n) | 0);
          $$x3 = ($$x4.get(((11 - n$3) | 0)) === null)
        } else {
          $$x3 = false
        };
        if ($$x3) {
          $thiz.sci_VectorSliceBuilder__f_maxDim = n
        }
      } else {
        const $$x5 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$4 = ((1 + n) | 0);
        const to = preN1.u.length;
        $$x5.set((((-1) + n$4) | 0), $m_ju_Arrays$().copyOfRange__AO__I__I__AO(preN1, 1, to))
      }
    }
  }
});
const $p_sci_VectorSliceBuilder__balanceSuffix__I__V = (function($thiz, n) {
  if (($thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(((11 - n) | 0)) === null)) {
    if ((n === $thiz.sci_VectorSliceBuilder__f_maxDim)) {
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(((11 - n) | 0), $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get((((-1) + n) | 0)));
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set((((-1) + n) | 0), null)
    } else {
      $p_sci_VectorSliceBuilder__balanceSuffix__I__V($thiz, ((1 + n) | 0));
      const $$x1 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
      const n$1 = ((1 + n) | 0);
      const sufN1 = $asArrayOf_O($$x1.get(((11 - n$1) | 0)), 2);
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(((11 - n) | 0), sufN1.get((((-1) + sufN1.u.length) | 0)));
      if ((sufN1.u.length === 1)) {
        const $$x2 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$2 = ((1 + n) | 0);
        $$x2.set(((11 - n$2) | 0), null);
        let $$x3;
        if (($thiz.sci_VectorSliceBuilder__f_maxDim === ((1 + n) | 0))) {
          const $$x4 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
          const n$3 = ((1 + n) | 0);
          $$x3 = ($$x4.get((((-1) + n$3) | 0)) === null)
        } else {
          $$x3 = false
        };
        if ($$x3) {
          $thiz.sci_VectorSliceBuilder__f_maxDim = n
        }
      } else {
        const $$x5 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$4 = ((1 + n) | 0);
        const to = (((-1) + sufN1.u.length) | 0);
        $$x5.set(((11 - n$4) | 0), $m_ju_Arrays$().copyOfRange__AO__I__I__AO(sufN1, 0, to))
      }
    }
  }
});
class $c_sci_VectorSliceBuilder extends $c_O {
  constructor(lo, hi) {
    super();
    this.sci_VectorSliceBuilder__f_lo = 0;
    this.sci_VectorSliceBuilder__f_hi = 0;
    this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices = null;
    this.sci_VectorSliceBuilder__f_len = 0;
    this.sci_VectorSliceBuilder__f_pos = 0;
    this.sci_VectorSliceBuilder__f_maxDim = 0;
    this.sci_VectorSliceBuilder__f_lo = lo;
    this.sci_VectorSliceBuilder__f_hi = hi;
    this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices = $newArrayObject($d_O.getArrayOf().getArrayOf(), [11]);
    this.sci_VectorSliceBuilder__f_len = 0;
    this.sci_VectorSliceBuilder__f_pos = 0;
    this.sci_VectorSliceBuilder__f_maxDim = 0
  };
  consider__I__AO__V(n, a) {
    const count = $imul(a.u.length, (1 << $imul(5, (((-1) + n) | 0))));
    const a$1 = ((this.sci_VectorSliceBuilder__f_lo - this.sci_VectorSliceBuilder__f_pos) | 0);
    const lo0 = ((a$1 > 0) ? a$1 : 0);
    const a$2 = ((this.sci_VectorSliceBuilder__f_hi - this.sci_VectorSliceBuilder__f_pos) | 0);
    const hi0 = ((a$2 < count) ? a$2 : count);
    if ((hi0 > lo0)) {
      $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V(this, n, a, lo0, hi0);
      this.sci_VectorSliceBuilder__f_len = ((this.sci_VectorSliceBuilder__f_len + ((hi0 - lo0) | 0)) | 0)
    };
    this.sci_VectorSliceBuilder__f_pos = ((this.sci_VectorSliceBuilder__f_pos + count) | 0)
  };
  result__sci_Vector() {
    if ((this.sci_VectorSliceBuilder__f_len <= 32)) {
      if ((this.sci_VectorSliceBuilder__f_len === 0)) {
        return $m_sci_Vector0$()
      } else {
        const prefix1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(0);
        const suffix1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(10);
        let a;
        if ((prefix1 !== null)) {
          if ((suffix1 !== null)) {
            const newLength = ((prefix1.u.length + suffix1.u.length) | 0);
            const dest = $m_ju_Arrays$().copyOf__AO__I__AO(prefix1, newLength);
            const destPos = prefix1.u.length;
            const length = suffix1.u.length;
            $systemArraycopy(suffix1, 0, dest, destPos, length);
            a = dest
          } else {
            a = prefix1
          }
        } else if ((suffix1 !== null)) {
          a = suffix1
        } else {
          const prefix2 = $asArrayOf_O(this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1), 2);
          if ((prefix2 !== null)) {
            a = prefix2.get(0)
          } else {
            const suffix2 = $asArrayOf_O(this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9), 2);
            a = suffix2.get(0)
          }
        };
        return new $c_sci_Vector1(a)
      }
    } else {
      $p_sci_VectorSliceBuilder__balancePrefix__I__V(this, 1);
      $p_sci_VectorSliceBuilder__balanceSuffix__I__V(this, 1);
      let resultDim = this.sci_VectorSliceBuilder__f_maxDim;
      if ((resultDim < 6)) {
        const $$x1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n = this.sci_VectorSliceBuilder__f_maxDim;
        const pre = $$x1.get((((-1) + n) | 0));
        const $$x2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$1 = this.sci_VectorSliceBuilder__f_maxDim;
        const suf = $$x2.get(((11 - n$1) | 0));
        if (((pre !== null) && (suf !== null))) {
          if ((((pre.u.length + suf.u.length) | 0) <= 30)) {
            const $$x3 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
            const n$2 = this.sci_VectorSliceBuilder__f_maxDim;
            const newLength$1 = ((pre.u.length + suf.u.length) | 0);
            const dest$1 = $m_ju_Arrays$().copyOf__AO__I__AO(pre, newLength$1);
            const destPos$1 = pre.u.length;
            const length$1 = suf.u.length;
            $systemArraycopy(suf, 0, dest$1, destPos$1, length$1);
            $$x3.set((((-1) + n$2) | 0), dest$1);
            const $$x4 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
            const n$3 = this.sci_VectorSliceBuilder__f_maxDim;
            $$x4.set(((11 - n$3) | 0), null)
          } else {
            resultDim = ((1 + resultDim) | 0)
          }
        } else {
          const one = ((pre !== null) ? pre : suf);
          if ((one.u.length > 30)) {
            resultDim = ((1 + resultDim) | 0)
          }
        }
      };
      const prefix1$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(0);
      const suffix1$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(10);
      const len1 = prefix1$2.u.length;
      const x1 = resultDim;
      let res;
      switch (x1) {
        case 2: {
          const a$1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          let $$x5;
          if ((p !== null)) {
            $$x5 = p
          } else {
            const s = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
            $$x5 = ((s !== null) ? s : a$1)
          };
          const data2 = $asArrayOf_O($$x5, 2);
          res = new $c_sci_Vector2(prefix1$2, len1, data2, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 3: {
          const a$2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$2 = $asArrayOf_O(((p$1 !== null) ? p$1 : a$2), 2);
          const a$3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          let $$x6;
          if ((p$2 !== null)) {
            $$x6 = p$2
          } else {
            const s$1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
            $$x6 = ((s$1 !== null) ? s$1 : a$3)
          };
          const data3 = $asArrayOf_O($$x6, 3);
          const a$4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$2 = $asArrayOf_O(((s$2 !== null) ? s$2 : a$4), 2);
          const len12 = ((len1 + (prefix2$2.u.length << 5)) | 0);
          res = new $c_sci_Vector3(prefix1$2, len1, prefix2$2, len12, data3, suffix2$2, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 4: {
          const a$5 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$3 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$3 = $asArrayOf_O(((p$3 !== null) ? p$3 : a$5), 2);
          const a$6 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$4 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          const prefix3 = $asArrayOf_O(((p$4 !== null) ? p$4 : a$6), 3);
          const a$7 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const p$5 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(3);
          let $$x7;
          if ((p$5 !== null)) {
            $$x7 = p$5
          } else {
            const s$3 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(7);
            $$x7 = ((s$3 !== null) ? s$3 : a$7)
          };
          const data4 = $asArrayOf_O($$x7, 4);
          const a$8 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const s$4 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
          const suffix3 = $asArrayOf_O(((s$4 !== null) ? s$4 : a$8), 3);
          const a$9 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$5 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$3 = $asArrayOf_O(((s$5 !== null) ? s$5 : a$9), 2);
          const len12$2 = ((len1 + (prefix2$3.u.length << 5)) | 0);
          const len123 = ((len12$2 + (prefix3.u.length << 10)) | 0);
          res = new $c_sci_Vector4(prefix1$2, len1, prefix2$3, len12$2, prefix3, len123, data4, suffix3, suffix2$3, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 5: {
          const a$10 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$6 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$4 = $asArrayOf_O(((p$6 !== null) ? p$6 : a$10), 2);
          const a$11 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$7 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          const prefix3$2 = $asArrayOf_O(((p$7 !== null) ? p$7 : a$11), 3);
          const a$12 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const p$8 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(3);
          const prefix4 = $asArrayOf_O(((p$8 !== null) ? p$8 : a$12), 4);
          const a$13 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
          const p$9 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(4);
          let $$x8;
          if ((p$9 !== null)) {
            $$x8 = p$9
          } else {
            const s$6 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(6);
            $$x8 = ((s$6 !== null) ? s$6 : a$13)
          };
          const data5 = $asArrayOf_O($$x8, 5);
          const a$14 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const s$7 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(7);
          const suffix4 = $asArrayOf_O(((s$7 !== null) ? s$7 : a$14), 4);
          const a$15 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const s$8 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
          const suffix3$2 = $asArrayOf_O(((s$8 !== null) ? s$8 : a$15), 3);
          const a$16 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$9 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$4 = $asArrayOf_O(((s$9 !== null) ? s$9 : a$16), 2);
          const len12$3 = ((len1 + (prefix2$4.u.length << 5)) | 0);
          const len123$2 = ((len12$3 + (prefix3$2.u.length << 10)) | 0);
          const len1234 = ((len123$2 + (prefix4.u.length << 15)) | 0);
          res = new $c_sci_Vector5(prefix1$2, len1, prefix2$4, len12$3, prefix3$2, len123$2, prefix4, len1234, data5, suffix4, suffix3$2, suffix2$4, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 6: {
          const a$17 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$10 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$5 = $asArrayOf_O(((p$10 !== null) ? p$10 : a$17), 2);
          const a$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$11 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          const prefix3$3 = $asArrayOf_O(((p$11 !== null) ? p$11 : a$18), 3);
          const a$19 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const p$12 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(3);
          const prefix4$2 = $asArrayOf_O(((p$12 !== null) ? p$12 : a$19), 4);
          const a$20 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
          const p$13 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(4);
          const prefix5 = $asArrayOf_O(((p$13 !== null) ? p$13 : a$20), 5);
          const a$21 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
          const p$14 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(5);
          let $$x9;
          if ((p$14 !== null)) {
            $$x9 = p$14
          } else {
            const s$10 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(5);
            $$x9 = ((s$10 !== null) ? s$10 : a$21)
          };
          const data6 = $asArrayOf_O($$x9, 6);
          const a$22 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
          const s$11 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(6);
          const suffix5 = $asArrayOf_O(((s$11 !== null) ? s$11 : a$22), 5);
          const a$23 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const s$12 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(7);
          const suffix4$2 = $asArrayOf_O(((s$12 !== null) ? s$12 : a$23), 4);
          const a$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const s$13 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
          const suffix3$3 = $asArrayOf_O(((s$13 !== null) ? s$13 : a$24), 3);
          const a$25 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$14 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$5 = $asArrayOf_O(((s$14 !== null) ? s$14 : a$25), 2);
          const len12$4 = ((len1 + (prefix2$5.u.length << 5)) | 0);
          const len123$3 = ((len12$4 + (prefix3$3.u.length << 10)) | 0);
          const len1234$2 = ((len123$3 + (prefix4$2.u.length << 15)) | 0);
          const len12345 = ((len1234$2 + (prefix5.u.length << 20)) | 0);
          res = new $c_sci_Vector6(prefix1$2, len1, prefix2$5, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data6, suffix5, suffix4$2, suffix3$3, suffix2$5, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        default: {
          throw new $c_s_MatchError(x1)
        }
      };
      return res
    }
  };
  toString__T() {
    return (((((((((("VectorSliceBuilder(lo=" + this.sci_VectorSliceBuilder__f_lo) + ", hi=") + this.sci_VectorSliceBuilder__f_hi) + ", len=") + this.sci_VectorSliceBuilder__f_len) + ", pos=") + this.sci_VectorSliceBuilder__f_pos) + ", maxDim=") + this.sci_VectorSliceBuilder__f_maxDim) + ")")
  };
}
const $d_sci_VectorSliceBuilder = new $TypeData().initClass({
  sci_VectorSliceBuilder: 0
}, false, "scala.collection.immutable.VectorSliceBuilder", {
  sci_VectorSliceBuilder: 1,
  O: 1
});
$c_sci_VectorSliceBuilder.prototype.$classData = $d_sci_VectorSliceBuilder;
class $c_sci_VectorStatics$ extends $c_O {
  constructor() {
    super();
    this.sci_VectorStatics$__f_empty1 = null;
    this.sci_VectorStatics$__f_empty2 = null;
    this.sci_VectorStatics$__f_empty3 = null;
    this.sci_VectorStatics$__f_empty4 = null;
    this.sci_VectorStatics$__f_empty5 = null;
    this.sci_VectorStatics$__f_empty6 = null;
    $n_sci_VectorStatics$ = this;
    this.sci_VectorStatics$__f_empty1 = $newArrayObject($d_O.getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty6 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [0])
  };
  copyAppend1__AO__O__AO(a, elem) {
    const alen = a.u.length;
    const ac = $newArrayObject($d_O.getArrayOf(), [((1 + alen) | 0)]);
    $systemArraycopy(a, 0, ac, 0, alen);
    ac.set(alen, elem);
    return ac
  };
  copyAppend__AO__O__AO(a, elem) {
    const newLength = ((1 + a.u.length) | 0);
    const ac = $m_ju_Arrays$().copyOf__AO__I__AO(a, newLength);
    ac.set((((-1) + ac.u.length) | 0), elem);
    return ac
  };
  copyPrepend__O__AO__AO(elem, a) {
    const componentType = $objectGetClass(a).getComponentType__jl_Class();
    const length = ((1 + a.u.length) | 0);
    const ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
    const length$1 = a.u.length;
    $systemArraycopy(a, 0, ac, 1, length$1);
    ac.set(0, elem);
    return ac
  };
  foreachRec__I__AO__F1__V(level, a, f) {
    let i = 0;
    const len = a.u.length;
    if ((level === 0)) {
      while ((i < len)) {
        f.apply__O__O(a.get(i));
        i = ((1 + i) | 0)
      }
    } else {
      const l = (((-1) + level) | 0);
      while ((i < len)) {
        this.foreachRec__I__AO__F1__V(l, $asArrayOf_O(a.get(i), 1), f);
        i = ((1 + i) | 0)
      }
    }
  };
  mapElems1__AO__F1__AO(a, f) {
    let i = 0;
    while ((i < a.u.length)) {
      const v1 = a.get(i);
      const v2 = f.apply__O__O(v1);
      if ((!Object.is(v1, v2))) {
        return this.mapElems1Rest__AO__F1__I__O__AO(a, f, i, v2)
      };
      i = ((1 + i) | 0)
    };
    return a
  };
  mapElems1Rest__AO__F1__I__O__AO(a, f, at, v2) {
    const ac = $newArrayObject($d_O.getArrayOf(), [a.u.length]);
    if ((at > 0)) {
      $systemArraycopy(a, 0, ac, 0, at)
    };
    ac.set(at, v2);
    let i = ((1 + at) | 0);
    while ((i < a.u.length)) {
      ac.set(i, f.apply__O__O(a.get(i)));
      i = ((1 + i) | 0)
    };
    return ac
  };
  mapElems__I__AO__F1__AO(n, a, f) {
    if ((n === 1)) {
      return this.mapElems1__AO__F1__AO(a, f)
    } else {
      let i = 0;
      while ((i < a.u.length)) {
        const v1 = a.get(i);
        const v2 = this.mapElems__I__AO__F1__AO((((-1) + n) | 0), $asArrayOf_O(v1, 1), f);
        if ((v1 !== v2)) {
          return this.mapElemsRest__I__AO__F1__I__O__AO(n, a, f, i, v2)
        };
        i = ((1 + i) | 0)
      };
      return a
    }
  };
  mapElemsRest__I__AO__F1__I__O__AO(n, a, f, at, v2) {
    const componentType = $objectGetClass(a).getComponentType__jl_Class();
    const length = a.u.length;
    const ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
    if ((at > 0)) {
      $systemArraycopy(a, 0, ac, 0, at)
    };
    ac.set(at, v2);
    let i = ((1 + at) | 0);
    while ((i < a.u.length)) {
      ac.set(i, this.mapElems__I__AO__F1__AO((((-1) + n) | 0), $asArrayOf_O(a.get(i), 1), f));
      i = ((1 + i) | 0)
    };
    return ac
  };
  append1IfSpace__AO__sc_IterableOnce__AO(suffix1, xs) {
    if ($is_sci_Iterable(xs)) {
      const x2 = $as_sci_Iterable(xs);
      if ((x2.sizeCompare__I__I(((32 - suffix1.u.length) | 0)) <= 0)) {
        const x1$2 = x2.size__I();
        switch (x1$2) {
          case 0: {
            return null;
            break
          }
          case 1: {
            return this.copyAppend__AO__O__AO(suffix1, x2.head__O());
            break
          }
          default: {
            const newLength = ((suffix1.u.length + x1$2) | 0);
            const suffix1b = $m_ju_Arrays$().copyOf__AO__I__AO(suffix1, newLength);
            x2.copyToArray__O__I__I(suffix1b, suffix1.u.length);
            return suffix1b
          }
        }
      } else {
        return null
      }
    } else {
      const s = xs.knownSize__I();
      if (((s > 0) && (s <= ((32 - suffix1.u.length) | 0)))) {
        const newLength$1 = ((suffix1.u.length + s) | 0);
        const suffix1b$2 = $m_ju_Arrays$().copyOf__AO__I__AO(suffix1, newLength$1);
        const this$1 = xs.iterator__sc_Iterator();
        const start = suffix1.u.length;
        $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, suffix1b$2, start);
        return suffix1b$2
      } else {
        return null
      }
    }
  };
}
const $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
let $n_sci_VectorStatics$ = (void 0);
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
class $c_scm_HashMap$Node {
}
function $as_scm_HashMap$Node(obj) {
  return (((obj instanceof $c_scm_HashMap$Node) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap$Node"))
}
function $isArrayOf_scm_HashMap$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap$Node)))
}
function $asArrayOf_scm_HashMap$Node(obj, depth) {
  return (($isArrayOf_scm_HashMap$Node(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$Node;", depth))
}
class $c_sc_package$$colon$plus$ extends $c_O {
}
const $d_sc_package$$colon$plus$ = new $TypeData().initClass({
  sc_package$$colon$plus$: 0
}, false, "scala.collection.package$$colon$plus$", {
  sc_package$$colon$plus$: 1,
  O: 1
});
$c_sc_package$$colon$plus$.prototype.$classData = $d_sc_package$$colon$plus$;
let $n_sc_package$$colon$plus$ = (void 0);
function $m_sc_package$$colon$plus$() {
  if ((!$n_sc_package$$colon$plus$)) {
    $n_sc_package$$colon$plus$ = new $c_sc_package$$colon$plus$()
  };
  return $n_sc_package$$colon$plus$
}
class $c_sc_package$$plus$colon$ extends $c_O {
}
const $d_sc_package$$plus$colon$ = new $TypeData().initClass({
  sc_package$$plus$colon$: 0
}, false, "scala.collection.package$$plus$colon$", {
  sc_package$$plus$colon$: 1,
  O: 1
});
$c_sc_package$$plus$colon$.prototype.$classData = $d_sc_package$$plus$colon$;
let $n_sc_package$$plus$colon$ = (void 0);
function $m_sc_package$$plus$colon$() {
  if ((!$n_sc_package$$plus$colon$)) {
    $n_sc_package$$plus$colon$ = new $c_sc_package$$plus$colon$()
  };
  return $n_sc_package$$plus$colon$
}
const $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable = (function($thiz, curSize) {
  const curOther = $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other;
  const curLen = curOther.u.length;
  if ((curSize <= curLen)) {
    return curOther
  } else {
    const newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen))
    };
    const newOther = $newArrayObject($d_jl_Runnable.getArrayOf(), [newLen]);
    $systemArraycopy(curOther, 0, newOther, 0, curLen);
    $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other = newOther;
    return newOther
  }
});
const $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__ = (function($thiz, outer, first, other, size) {
  $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_first = first;
  $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other = other;
  $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_size = size;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = outer
  };
  return $thiz
});
class $c_s_concurrent_BatchingExecutor$AbstractBatch extends $c_O {
  constructor() {
    super();
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_other = null;
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = null
  };
  push__jl_Runnable__V(r) {
    const sz = this.s_concurrent_BatchingExecutor$AbstractBatch__f_size;
    if ((sz === 0)) {
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = r
    } else {
      $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).set((((-1) + sz) | 0), r)
    };
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = ((1 + sz) | 0)
  };
  runN__I__V(n) {
    while (true) {
      if ((n > 0)) {
        const x1 = this.s_concurrent_BatchingExecutor$AbstractBatch__f_size;
        switch (x1) {
          case 0: {
            break
          }
          case 1: {
            const next = this.s_concurrent_BatchingExecutor$AbstractBatch__f_first;
            this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
            this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
            next.run__V();
            n = (((-1) + n) | 0);
            continue;
            break
          }
          default: {
            const o = this.s_concurrent_BatchingExecutor$AbstractBatch__f_other;
            const next$2 = o.get((((-2) + x1) | 0));
            o.set((((-2) + x1) | 0), null);
            this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = (((-1) + x1) | 0);
            next$2.run__V();
            n = (((-1) + n) | 0);
            continue
          }
        }
      };
      break
    }
  };
}
class $c_s_concurrent_BatchingExecutorStatics$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray = null;
    $n_s_concurrent_BatchingExecutorStatics$ = this;
    this.s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray = $newArrayObject($d_jl_Runnable.getArrayOf(), [0])
  };
}
const $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().initClass({
  s_concurrent_BatchingExecutorStatics$: 0
}, false, "scala.concurrent.BatchingExecutorStatics$", {
  s_concurrent_BatchingExecutorStatics$: 1,
  O: 1
});
$c_s_concurrent_BatchingExecutorStatics$.prototype.$classData = $d_s_concurrent_BatchingExecutorStatics$;
let $n_s_concurrent_BatchingExecutorStatics$ = (void 0);
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$()
  };
  return $n_s_concurrent_BatchingExecutorStatics$
}
const $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor = (function($thiz) {
  if ((!$thiz.s_concurrent_ExecutionContext$__f_bitmap$0)) {
    $thiz.s_concurrent_ExecutionContext$__f_global = $m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue;
    $thiz.s_concurrent_ExecutionContext$__f_bitmap$0 = true
  };
  return $thiz.s_concurrent_ExecutionContext$__f_global
});
class $c_s_concurrent_ExecutionContext$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_ExecutionContext$__f_global = null;
    this.s_concurrent_ExecutionContext$__f_defaultReporter = null;
    this.s_concurrent_ExecutionContext$__f_bitmap$0 = false;
    $n_s_concurrent_ExecutionContext$ = this;
    this.s_concurrent_ExecutionContext$__f_defaultReporter = new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => {
      const x$1 = $as_jl_Throwable(x$1$2);
      x$1.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
    }))(this))
  };
  global__s_concurrent_ExecutionContextExecutor() {
    return ((!this.s_concurrent_ExecutionContext$__f_bitmap$0) ? $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor(this) : this.s_concurrent_ExecutionContext$__f_global)
  };
}
const $d_s_concurrent_ExecutionContext$ = new $TypeData().initClass({
  s_concurrent_ExecutionContext$: 0
}, false, "scala.concurrent.ExecutionContext$", {
  s_concurrent_ExecutionContext$: 1,
  O: 1
});
$c_s_concurrent_ExecutionContext$.prototype.$classData = $d_s_concurrent_ExecutionContext$;
let $n_s_concurrent_ExecutionContext$ = (void 0);
function $m_s_concurrent_ExecutionContext$() {
  if ((!$n_s_concurrent_ExecutionContext$)) {
    $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$()
  };
  return $n_s_concurrent_ExecutionContext$
}
class $c_s_concurrent_Future$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_Future$__f_toBoxed = null;
    this.s_concurrent_Future$__f__cachedId = null;
    this.s_concurrent_Future$__f_collectFailed = null;
    this.s_concurrent_Future$__f_filterFailure = null;
    this.s_concurrent_Future$__f_failedFailure = null;
    this.s_concurrent_Future$__f_failedFailureFuture = null;
    this.s_concurrent_Future$__f__failedFun = null;
    this.s_concurrent_Future$__f_recoverWithFailedMarker = null;
    this.s_concurrent_Future$__f_recoverWithFailed = null;
    this.s_concurrent_Future$__f__zipWithTuple2 = null;
    this.s_concurrent_Future$__f__addToBuilderFun = null;
    this.s_concurrent_Future$__f_unit = null;
    $n_s_concurrent_Future$ = this;
    const this$22 = $m_s_Predef$().s_Predef$__f_Map;
    const array = [new $c_T2($d_Z.getClassOf(), $d_jl_Boolean.getClassOf()), new $c_T2($d_B.getClassOf(), $d_jl_Byte.getClassOf()), new $c_T2($d_C.getClassOf(), $d_jl_Character.getClassOf()), new $c_T2($d_S.getClassOf(), $d_jl_Short.getClassOf()), new $c_T2($d_I.getClassOf(), $d_jl_Integer.getClassOf()), new $c_T2($d_J.getClassOf(), $d_jl_Long.getClassOf()), new $c_T2($d_F.getClassOf(), $d_jl_Float.getClassOf()), new $c_T2($d_D.getClassOf(), $d_jl_Double.getClassOf()), new $c_T2($d_V.getClassOf(), $d_jl_Void.getClassOf())];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    this.s_concurrent_Future$__f_toBoxed = this$22.from__sc_IterableOnce__sci_Map(elems);
    this.s_concurrent_Future$__f__cachedId = new $c_sjsr_AnonFunction1(((this$23) => ((x$2) => x$2))(this));
    this.s_concurrent_Future$__f_collectFailed = new $c_sjsr_AnonFunction1(((this$2$1) => ((t$2) => {
      throw new $c_s_concurrent_Future$$anon$1(t$2)
    }))(this));
    this.s_concurrent_Future$__f_filterFailure = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
    this.s_concurrent_Future$__f_failedFailure = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
    this.s_concurrent_Future$__f_failedFailureFuture = $m_s_concurrent_Future$().fromTry__s_util_Try__s_concurrent_Future(this.s_concurrent_Future$__f_failedFailure);
    this.s_concurrent_Future$__f__failedFun = new $c_sjsr_AnonFunction1(((this$3$1) => ((v$2) => {
      const v = $as_s_util_Try(v$2);
      return ((v instanceof $c_s_util_Failure) ? new $c_s_util_Success($as_s_util_Failure(v).s_util_Failure__f_exception) : $m_s_concurrent_Future$().s_concurrent_Future$__f_failedFailure)
    }))(this));
    this.s_concurrent_Future$__f_recoverWithFailedMarker = $m_s_concurrent_Future$().failed__jl_Throwable__s_concurrent_Future(new $c_s_concurrent_Future$$anon$4());
    this.s_concurrent_Future$__f_recoverWithFailed = new $c_sjsr_AnonFunction1(((this$4$1) => ((t$3$2) => {
      $as_jl_Throwable(t$3$2);
      return $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailedMarker
    }))(this));
    this.s_concurrent_Future$__f__zipWithTuple2 = new $c_sjsr_AnonFunction2(((this$5$1) => ((_1$2, _2$2) => new $c_T2(_1$2, _2$2)))(this));
    this.s_concurrent_Future$__f__addToBuilderFun = new $c_sjsr_AnonFunction2(((this$6$1) => ((b$2, e$2) => {
      const b = $as_scm_Builder(b$2);
      return $as_scm_Builder(b.addOne__O__scm_Growable(e$2))
    }))(this));
    this.s_concurrent_Future$__f_unit = this.fromTry__s_util_Try__s_concurrent_Future(new $c_s_util_Success((void 0)))
  };
  failed__jl_Throwable__s_concurrent_Future(exception) {
    return $m_s_concurrent_Promise$().failed__jl_Throwable__s_concurrent_Promise(exception)
  };
  fromTry__s_util_Try__s_concurrent_Future(result) {
    return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result)
  };
}
const $d_s_concurrent_Future$ = new $TypeData().initClass({
  s_concurrent_Future$: 0
}, false, "scala.concurrent.Future$", {
  s_concurrent_Future$: 1,
  O: 1
});
$c_s_concurrent_Future$.prototype.$classData = $d_s_concurrent_Future$;
let $n_s_concurrent_Future$ = (void 0);
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$()
  };
  return $n_s_concurrent_Future$
}
const $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise = (function($thiz, result) {
  if ($thiz.tryComplete__s_util_Try__Z(result)) {
    return $thiz
  } else {
    throw new $c_jl_IllegalStateException("Promise already completed.")
  }
});
const $f_s_concurrent_Promise__success__O__s_concurrent_Promise = (function($thiz, value) {
  const result = new $c_s_util_Success(value);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
});
const $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise = (function($thiz, cause) {
  const result = new $c_s_util_Failure(cause);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
});
class $c_s_concurrent_Promise$ extends $c_O {
  failed__jl_Throwable__s_concurrent_Promise(exception) {
    const result = new $c_s_util_Failure(exception);
    return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result)
  };
}
const $d_s_concurrent_Promise$ = new $TypeData().initClass({
  s_concurrent_Promise$: 0
}, false, "scala.concurrent.Promise$", {
  s_concurrent_Promise$: 1,
  O: 1
});
$c_s_concurrent_Promise$.prototype.$classData = $d_s_concurrent_Promise$;
let $n_s_concurrent_Promise$ = (void 0);
function $m_s_concurrent_Promise$() {
  if ((!$n_s_concurrent_Promise$)) {
    $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$()
  };
  return $n_s_concurrent_Promise$
}
class $c_s_concurrent_impl_Promise$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop = null;
    $n_s_concurrent_impl_Promise$ = this;
    this.s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$())
  };
  scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(value) {
    if ((value === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
    };
    if ((value instanceof $c_s_util_Success)) {
      return value
    } else {
      const t = $as_s_util_Failure(value).s_util_Failure__f_exception;
      if ((((t instanceof $c_s_util_control_ControlThrowable) || (t instanceof $c_jl_InterruptedException)) || (t instanceof $c_jl_Error))) {
        if ((t instanceof $c_sr_NonLocalReturnControl)) {
          const this$2 = $as_sr_NonLocalReturnControl(t);
          return new $c_s_util_Success(this$2.sr_NonLocalReturnControl$mcI$sp__f_value$mcI$sp)
        } else {
          return new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))
        }
      } else {
        return value
      }
    }
  };
}
const $d_s_concurrent_impl_Promise$ = new $TypeData().initClass({
  s_concurrent_impl_Promise$: 0
}, false, "scala.concurrent.impl.Promise$", {
  s_concurrent_impl_Promise$: 1,
  O: 1
});
$c_s_concurrent_impl_Promise$.prototype.$classData = $d_s_concurrent_impl_Promise$;
let $n_s_concurrent_impl_Promise$ = (void 0);
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$()
  };
  return $n_s_concurrent_impl_Promise$
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_impl_Promise$Callbacks)))
}
function $as_s_concurrent_impl_Promise$Callbacks(obj) {
  return (($is_s_concurrent_impl_Promise$Callbacks(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Callbacks"))
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$Callbacks)))
}
function $asArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$Callbacks;", depth))
}
class $c_s_math_Ordered$ extends $c_O {
}
const $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
let $n_s_math_Ordered$ = (void 0);
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
class $c_s_package$ extends $c_O {
  constructor() {
    super();
    this.s_package$__f_BigDecimal = null;
    this.s_package$__f_BigInt = null;
    this.s_package$__f_AnyRef = null;
    this.s_package$__f_Traversable = null;
    this.s_package$__f_Iterable = null;
    this.s_package$__f_Seq = null;
    this.s_package$__f_IndexedSeq = null;
    this.s_package$__f_Iterator = null;
    this.s_package$__f_List = null;
    this.s_package$__f_Nil = null;
    this.s_package$__f_$colon$colon = null;
    this.s_package$__f_$plus$colon = null;
    this.s_package$__f_$colon$plus = null;
    this.s_package$__f_Stream = null;
    this.s_package$__f_LazyList = null;
    this.s_package$__f_Vector = null;
    this.s_package$__f_StringBuilder = null;
    this.s_package$__f_Range = null;
    this.s_package$__f_Equiv = null;
    this.s_package$__f_Fractional = null;
    this.s_package$__f_Integral = null;
    this.s_package$__f_Numeric = null;
    this.s_package$__f_Ordered = null;
    this.s_package$__f_Ordering = null;
    this.s_package$__f_Either = null;
    this.s_package$__f_Left = null;
    this.s_package$__f_Right = null;
    this.s_package$__f_bitmap$0 = 0;
    $n_s_package$ = this;
    this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
    this.s_package$__f_Traversable = $m_sc_Iterable$();
    this.s_package$__f_Iterable = $m_sc_Iterable$();
    this.s_package$__f_Seq = $m_sci_Seq$();
    this.s_package$__f_IndexedSeq = $m_sci_IndexedSeq$();
    this.s_package$__f_Iterator = $m_sc_Iterator$();
    this.s_package$__f_List = $m_sci_List$();
    this.s_package$__f_Nil = $m_sci_Nil$();
    this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
    this.s_package$__f_$plus$colon = $m_sc_package$$plus$colon$();
    this.s_package$__f_$colon$plus = $m_sc_package$$colon$plus$();
    this.s_package$__f_Stream = $m_sci_Stream$();
    this.s_package$__f_LazyList = $m_sci_LazyList$();
    this.s_package$__f_Vector = $m_sci_Vector$();
    this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
    this.s_package$__f_Range = $m_sci_Range$();
    this.s_package$__f_Equiv = $m_s_math_Equiv$();
    this.s_package$__f_Fractional = $m_s_math_Fractional$();
    this.s_package$__f_Integral = $m_s_math_Integral$();
    this.s_package$__f_Numeric = $m_s_math_Numeric$();
    this.s_package$__f_Ordered = $m_s_math_Ordered$();
    this.s_package$__f_Ordering = $m_s_math_Ordering$();
    this.s_package$__f_Either = $m_s_util_Either$();
    this.s_package$__f_Left = $m_s_util_Left$();
    this.s_package$__f_Right = $m_s_util_Right$()
  };
}
const $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
let $n_s_package$ = (void 0);
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
const $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.get(idx)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.get(idx)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.get(idx)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.get(idx)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.get(idx)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return $bC(x7.get(idx))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.get(idx)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.get(idx)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.get(idx)
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.get(idx)
    } else if ((xs === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      x2.set(idx, value)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      x3.set(idx, $uI(value))
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      x4.set(idx, $uD(value))
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      x5.set(idx, $uJ(value))
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      x6.set(idx, $uF(value))
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      x7.set(idx, $uC(value))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      x8.set(idx, $uB(value))
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      x9.set(idx, $uS(value))
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      x10.set(idx, $uZ(value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      x11.set(idx, (void 0))
    } else if ((xs === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    return $m_jl_reflect_Array$().getLength__O__I(xs)
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sr_Statics$PFMarker$ extends $c_O {
}
const $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
let $n_sr_Statics$PFMarker$ = (void 0);
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
class $c_sjs_concurrent_JSExecutionContext$ extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_JSExecutionContext$__f_queue = null;
    $n_sjs_concurrent_JSExecutionContext$ = this;
    this.sjs_concurrent_JSExecutionContext$__f_queue = $m_sjs_concurrent_QueueExecutionContext$().apply__s_concurrent_ExecutionContextExecutor()
  };
}
const $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().initClass({
  sjs_concurrent_JSExecutionContext$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$", {
  sjs_concurrent_JSExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_JSExecutionContext$.prototype.$classData = $d_sjs_concurrent_JSExecutionContext$;
let $n_sjs_concurrent_JSExecutionContext$ = (void 0);
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$()
  };
  return $n_sjs_concurrent_JSExecutionContext$
}
class $c_sjs_concurrent_QueueExecutionContext$ extends $c_O {
  apply__s_concurrent_ExecutionContextExecutor() {
    return (($as_T((typeof Promise)) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext())
  };
}
const $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$", {
  sjs_concurrent_QueueExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_QueueExecutionContext$.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$;
let $n_sjs_concurrent_QueueExecutionContext$ = (void 0);
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$()
  };
  return $n_sjs_concurrent_QueueExecutionContext$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_util_DynamicVariable extends $c_O {
  constructor(init) {
    super();
    this.s_util_DynamicVariable__f_v = null;
    this.s_util_DynamicVariable__f_v = init
  };
  toString__T() {
    return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
  };
}
const $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
const $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable = (function($thiz) {
  const this$1 = $m_s_util_control_NoStackTrace$();
  if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call($thiz)
  } else {
    return $as_jl_Throwable($thiz)
  }
});
class $c_s_util_control_NonFatal$ extends $c_O {
  apply__jl_Throwable__Z(t) {
    return (!((t instanceof $c_jl_VirtualMachineError) || ((t instanceof $c_jl_ThreadDeath) || ((t instanceof $c_jl_InterruptedException) || ((t instanceof $c_jl_LinkageError) || (t instanceof $c_s_util_control_ControlThrowable))))))
  };
  unapply__jl_Throwable__s_Option(t) {
    return (this.apply__jl_Throwable__Z(t) ? new $c_s_Some(t) : $m_s_None$())
  };
}
const $d_s_util_control_NonFatal$ = new $TypeData().initClass({
  s_util_control_NonFatal$: 0
}, false, "scala.util.control.NonFatal$", {
  s_util_control_NonFatal$: 1,
  O: 1
});
$c_s_util_control_NonFatal$.prototype.$classData = $d_s_util_control_NonFatal$;
let $n_s_util_control_NonFatal$ = (void 0);
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$()
  };
  return $n_s_util_control_NonFatal$
}
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  tuple2Hash__I__I__I__I(x, y, seed) {
    let h = seed;
    h = this.mix__I__I__I(h, $f_T__hashCode__I("Tuple2"));
    h = this.mix__I__I__I(h, x);
    h = this.mix__I__I__I(h, y);
    return this.finalizeHash__I__I__I(h, 2)
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  unorderedHash__sc_IterableOnce__I__I(xs, seed) {
    let a = 0;
    let b = 0;
    let n = 0;
    let c = 1;
    const iterator = xs.iterator__sc_Iterator();
    while (iterator.hasNext__Z()) {
      const x = iterator.next__O();
      const h = $m_sr_Statics$().anyHash__O__I(x);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = $imul(c, (1 | h));
      n = ((1 + n) | 0)
    };
    let h$2 = seed;
    h$2 = this.mix__I__I__I(h$2, a);
    h$2 = this.mix__I__I__I(h$2, b);
    h$2 = this.mixLast__I__I__I(h$2, c);
    return this.finalizeHash__I__I__I(h$2, n)
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const tail = $as_sci_List(elems.tail__O());
      const hash = $m_sr_Statics$().anyHash__O__I(head);
      h = this.mix__I__I__I(h, hash);
      const x1 = rangeState;
      switch (x1) {
        case 0: {
          initial = hash;
          rangeState = 1;
          break
        }
        case 1: {
          rangeDiff = ((hash - prev) | 0);
          rangeState = 2;
          break
        }
        case 2: {
          if ((rangeDiff !== ((hash - prev) | 0))) {
            rangeState = 3
          };
          break
        }
      };
      prev = hash;
      n = ((1 + n) | 0);
      elems = tail
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
}
class $c_Lcom_kos_pathtrain_heroes_Hero$$anon$1 extends $c_Lcom_kos_pathtrain_heroes_Hero {
  constructor() {
    super();
    $ct_Lcom_kos_pathtrain_heroes_Hero__(this);
    this.Lcom_kos_pathtrain_heroes_Hero__f_massa = 0.0;
    this.Lcom_kos_pathtrain_heroes_Hero__f_radius = 0.0
  };
}
const $d_Lcom_kos_pathtrain_heroes_Hero$$anon$1 = new $TypeData().initClass({
  Lcom_kos_pathtrain_heroes_Hero$$anon$1: 0
}, false, "com.kos.pathtrain.heroes.Hero$$anon$1", {
  Lcom_kos_pathtrain_heroes_Hero$$anon$1: 1,
  Lcom_kos_pathtrain_heroes_Hero: 1,
  O: 1
});
$c_Lcom_kos_pathtrain_heroes_Hero$$anon$1.prototype.$classData = $d_Lcom_kos_pathtrain_heroes_Hero$$anon$1;
const $f_Lcom_kos_wormpad_game_AudioState__$init$__V = (function($thiz) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_soundPlay_ = true;
  $thiz.Lcom_kos_pathtrain_MainApp$__f_musicPlay_ = true;
  $thiz.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$AudioState$$soundPath = "audio/sound/";
  $thiz.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$AudioState$$musicPath = "audio/music/";
  $thiz.Lcom_kos_pathtrain_MainApp$__f_soundBank = $as_sci_Seq($m_sci_Seq$().apply__sci_Seq__sc_SeqOps($m_sci_Nil$()))
});
class $c_Lcom_kos_wormpad_game_GameState$$anon$1 extends $c_Lcom_kos_wormpad_game_GameListenerDelegate {
  constructor(outer) {
    super();
    this.Lcom_kos_wormpad_game_GameState$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lcom_kos_wormpad_game_GameState$$anon$1__f_$outer = outer
    }
  };
  onGameOver__V() {
    (0, this.Lcom_kos_wormpad_game_GameState$$anon$1__f_$outer.Lcom_kos_pathtrain_MainApp$__f_jslistener.Lcom_kos_wormpad_game_GameListener__f_onGameOver)()
  };
  onNewGame__V() {
    (0, this.Lcom_kos_wormpad_game_GameState$$anon$1__f_$outer.Lcom_kos_pathtrain_MainApp$__f_jslistener.Lcom_kos_wormpad_game_GameListener__f_onNewGame)()
  };
  onPause__Z__V(pause) {
    (0, this.Lcom_kos_wormpad_game_GameState$$anon$1__f_$outer.Lcom_kos_pathtrain_MainApp$__f_jslistener.Lcom_kos_wormpad_game_GameListener__f_onPause)(pause)
  };
}
const $d_Lcom_kos_wormpad_game_GameState$$anon$1 = new $TypeData().initClass({
  Lcom_kos_wormpad_game_GameState$$anon$1: 0
}, false, "com.kos.wormpad.game.GameState$$anon$1", {
  Lcom_kos_wormpad_game_GameState$$anon$1: 1,
  Lcom_kos_wormpad_game_GameListenerDelegate: 1,
  O: 1
});
$c_Lcom_kos_wormpad_game_GameState$$anon$1.prototype.$classData = $d_Lcom_kos_wormpad_game_GameState$$anon$1;
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : $uI(s.length));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & $uI(s.charCodeAt(0)));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= $uI(s.length))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return $uI((n | 0))
    } else {
      const n$1 = result;
      return $uI((n$1 | 0))
    }
  };
  bitCount__I__I(i) {
    const t1 = ((i - (1431655765 & (i >> 1))) | 0);
    const t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
    return ($imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
class $c_jl_StackTraceElement extends $c_O {
  constructor(declaringClass, methodName, fileName, lineNumber) {
    super();
    this.jl_StackTraceElement__f_declaringClass = null;
    this.jl_StackTraceElement__f_methodName = null;
    this.jl_StackTraceElement__f_fileName = null;
    this.jl_StackTraceElement__f_lineNumber = 0;
    this.jl_StackTraceElement__f_columnNumber = 0;
    this.jl_StackTraceElement__f_declaringClass = declaringClass;
    this.jl_StackTraceElement__f_methodName = methodName;
    this.jl_StackTraceElement__f_fileName = fileName;
    this.jl_StackTraceElement__f_lineNumber = lineNumber;
    this.jl_StackTraceElement__f_columnNumber = (-1)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_jl_StackTraceElement)) {
      const x2 = $as_jl_StackTraceElement(that);
      return ((((this.jl_StackTraceElement__f_fileName === x2.jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === x2.jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_declaringClass === x2.jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === x2.jl_StackTraceElement__f_methodName))
    } else {
      return false
    }
  };
  toString__T() {
    let result = "";
    if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
      result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".")
    };
    result = (("" + result) + this.jl_StackTraceElement__f_methodName);
    if ((this.jl_StackTraceElement__f_fileName === null)) {
      result = (result + "(Unknown Source)")
    } else {
      result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
      if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
        result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
        if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
          result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber)
        }
      };
      result = (result + ")")
    };
    return result
  };
  hashCode__I() {
    return ($f_T__hashCode__I(this.jl_StackTraceElement__f_declaringClass) ^ $f_T__hashCode__I(this.jl_StackTraceElement__f_methodName))
  };
}
function $as_jl_StackTraceElement(obj) {
  return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"))
}
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_StackTraceElement)))
}
function $asArrayOf_jl_StackTraceElement(obj, depth) {
  return (($isArrayOf_jl_StackTraceElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth))
}
const $d_jl_StackTraceElement = new $TypeData().initClass({
  jl_StackTraceElement: 0
}, false, "java.lang.StackTraceElement", {
  jl_StackTraceElement: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackTraceElement.prototype.$classData = $d_jl_StackTraceElement;
class $c_jl_String$ extends $c_O {
  constructor() {
    super();
    this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
    this.jl_String$__f_bitmap$0 = false
  };
  new__AC__I__I__T(value, offset, count) {
    const end = ((offset + count) | 0);
    if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
      throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException())
    };
    let result = "";
    let i = offset;
    while ((i !== end)) {
      const $$x1 = result;
      const this$1 = value.get(i);
      result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
      i = ((1 + i) | 0)
    };
    return result
  };
}
const $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
let $n_jl_String$ = (void 0);
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
class $c_jl_Thread extends $c_O {
  constructor(dummy) {
    super();
    this.jl_Thread__f_java$lang$Thread$$interruptedState = false;
    this.jl_Thread__f_name = null;
    this.jl_Thread__f_java$lang$Thread$$interruptedState = false;
    this.jl_Thread__f_name = "main"
  };
  run__V() {
    /*<skip>*/
  };
}
const $d_jl_Thread = new $TypeData().initClass({
  jl_Thread: 0
}, false, "java.lang.Thread", {
  jl_Thread: 1,
  O: 1,
  jl_Runnable: 1
});
$c_jl_Thread.prototype.$classData = $d_jl_Thread;
const $p_jl_Throwable__printStackTraceImpl__O__V = (function($thiz, sprintln) {
  $thiz.getStackTrace__Ajl_StackTraceElement();
  sprintln($thiz.toString__T());
  if (($thiz.jl_Throwable__f_stackTrace.u.length !== 0)) {
    let i = 0;
    while ((i < $thiz.jl_Throwable__f_stackTrace.u.length)) {
      sprintln(("  at " + $thiz.jl_Throwable__f_stackTrace.get(i)));
      i = ((1 + i) | 0)
    }
  } else {
    sprintln("  <no stack trace available>")
  };
  let wCause = $thiz;
  while (true) {
    const $$x3 = wCause;
    const this$1 = wCause;
    let $$x2;
    if (($$x3 !== this$1.jl_Throwable__f_e)) {
      const this$2 = wCause;
      $$x2 = (this$2.jl_Throwable__f_e !== null)
    } else {
      $$x2 = false
    };
    if ($$x2) {
      const parentTrace = wCause.getStackTrace__Ajl_StackTraceElement();
      const this$3 = wCause;
      wCause = this$3.jl_Throwable__f_e;
      const thisTrace = wCause.getStackTrace__Ajl_StackTraceElement();
      const thisLength = thisTrace.u.length;
      const parentLength = parentTrace.u.length;
      sprintln(("Caused by: " + wCause.toString__T()));
      if ((thisLength !== 0)) {
        let sameFrameCount = 0;
        while (true) {
          let $$x1;
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            const x = thisTrace.get((((-1) + ((thisLength - sameFrameCount) | 0)) | 0));
            const x$2 = parentTrace.get((((-1) + ((parentLength - sameFrameCount) | 0)) | 0));
            $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
          } else {
            $$x1 = false
          };
          if ($$x1) {
            sameFrameCount = ((1 + sameFrameCount) | 0)
          } else {
            break
          }
        };
        if ((sameFrameCount > 0)) {
          sameFrameCount = (((-1) + sameFrameCount) | 0)
        };
        const lengthToPrint = ((thisLength - sameFrameCount) | 0);
        let i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          sprintln(("  at " + thisTrace.get(i$2)));
          i$2 = ((1 + i$2) | 0)
        };
        if ((sameFrameCount > 0)) {
          sprintln((("  ... " + sameFrameCount) + " more"))
        }
      } else {
        sprintln("  <no stack trace available>")
      }
    } else {
      break
    }
  }
});
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      const e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  getStackTrace__Ajl_StackTraceElement() {
    if ((this.jl_Throwable__f_stackTrace === null)) {
      if (this.jl_Throwable__f_writableStackTrace) {
        const this$1 = $m_jl_StackTrace$();
        this.jl_Throwable__f_stackTrace = $p_jl_StackTrace$__extract__O__Ajl_StackTraceElement(this$1, this.jl_Throwable__f_stackTraceStateInternal)
      } else {
        this.jl_Throwable__f_stackTrace = $newArrayObject($d_jl_StackTraceElement.getArrayOf(), [0])
      }
    };
    return this.jl_Throwable__f_stackTrace
  };
  printStackTrace__Ljava_io_PrintStream__V(s) {
    $p_jl_Throwable__printStackTraceImpl__O__V(this, ((arg$outer, s$1) => ((arg1$2) => {
      const arg1 = $as_T(arg1$2);
      s$1.println__T__V(arg1)
    }))(this, s))
  };
  toString__T() {
    const className = $objectClassName(this);
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
const $p_ju_Random__loop$1__I__I = (function($thiz, n$1) {
  while (true) {
    const bits = $thiz.next__I__I(31);
    const value = $intMod(bits, n$1);
    if ((((((bits - value) | 0) + (((-1) + n$1) | 0)) | 0) < 0)) {
      /*<skip>*/
    } else {
      return value
    }
  }
});
const $ct_ju_Random__J__ = (function($thiz, seed_in) {
  $thiz.ju_Random__f_haveNextNextGaussian = false;
  $thiz.setSeed__J__V(seed_in);
  return $thiz
});
const $ct_ju_Random__ = (function($thiz) {
  $ct_ju_Random__J__($thiz, $m_ju_Random$().java$util$Random$$randomSeed__J());
  return $thiz
});
class $c_ju_Random extends $c_O {
  constructor() {
    super();
    this.ju_Random__f_seedHi = 0;
    this.ju_Random__f_seedLo = 0;
    this.ju_Random__f_nextNextGaussian = 0.0;
    this.ju_Random__f_haveNextNextGaussian = false
  };
  setSeed__J__V(seed_in) {
    const lo = ((-554899859) ^ seed_in.RTLong__f_lo);
    const hi = (5 ^ seed_in.RTLong__f_hi);
    const hi$1 = (65535 & hi);
    const lo$1 = (((lo >>> 24) | 0) | (hi$1 << 8));
    this.ju_Random__f_seedHi = lo$1;
    this.ju_Random__f_seedLo = (16777215 & lo);
    this.ju_Random__f_haveNextNextGaussian = false
  };
  next__I__I(bits) {
    const oldSeedHi = this.ju_Random__f_seedHi;
    const oldSeedLo = this.ju_Random__f_seedLo;
    const loProd = ((1.5525485E7 * oldSeedLo) + 11.0);
    const hiProd = ((1502.0 * oldSeedLo) + (1.5525485E7 * oldSeedHi));
    const x = (loProd / 1.6777216E7);
    const newSeedHi = (16777215 & (($uI((x | 0)) + (16777215 & $uI((hiProd | 0)))) | 0));
    const newSeedLo = (16777215 & $uI((loProd | 0)));
    this.ju_Random__f_seedHi = newSeedHi;
    this.ju_Random__f_seedLo = newSeedLo;
    const result32 = ((newSeedHi << 8) | (newSeedLo >> 16));
    return ((result32 >>> ((32 - bits) | 0)) | 0)
  };
  nextInt__I__I(n) {
    if ((n <= 0)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "n must be positive")
    } else {
      return (((n & ((-n) | 0)) === n) ? (this.next__I__I(31) >> $clz32(n)) : $p_ju_Random__loop$1__I__I(this, n))
    }
  };
}
const $d_ju_Random = new $TypeData().initClass({
  ju_Random: 0
}, false, "java.util.Random", {
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random.prototype.$classData = $d_ju_Random;
const $p_ju_Random$__randomInt__I = (function($thiz) {
  const a = (4.294967296E9 * $uD(Math.random()));
  return $doubleToInt(($uD(Math.floor(a)) - 2.147483648E9))
});
class $c_ju_Random$ extends $c_O {
  java$util$Random$$randomSeed__J() {
    const value = $p_ju_Random$__randomInt__I(this);
    const value$1 = $p_ju_Random$__randomInt__I(this);
    return new $c_RTLong(value$1, value)
  };
}
const $d_ju_Random$ = new $TypeData().initClass({
  ju_Random$: 0
}, false, "java.util.Random$", {
  ju_Random$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random$.prototype.$classData = $d_ju_Random$;
let $n_ju_Random$ = (void 0);
function $m_ju_Random$() {
  if ((!$n_ju_Random$)) {
    $n_ju_Random$ = new $c_ju_Random$()
  };
  return $n_ju_Random$
}
const $ct_ju_concurrent_atomic_AtomicReference__O__ = (function($thiz, value) {
  $thiz.ju_concurrent_atomic_AtomicReference__f_value = value;
  return $thiz
});
class $c_ju_concurrent_atomic_AtomicReference extends $c_O {
  constructor() {
    super();
    this.ju_concurrent_atomic_AtomicReference__f_value = null
  };
  compareAndSet__O__O__Z(expect, update) {
    if (Object.is(expect, this.ju_concurrent_atomic_AtomicReference__f_value)) {
      this.ju_concurrent_atomic_AtomicReference__f_value = update;
      return true
    } else {
      return false
    }
  };
  toString__T() {
    const obj = this.ju_concurrent_atomic_AtomicReference__f_value;
    return ("" + obj)
  };
}
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
class $c_s_$less$colon$less$ extends $c_O {
  constructor() {
    super();
    this.s_$less$colon$less$__f_singleton = null;
    $n_s_$less$colon$less$ = this;
    this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
  };
}
const $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
let $n_s_$less$colon$less$ = (void 0);
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_O {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_s_Console$ extends $c_O {
  constructor() {
    super();
    this.s_Console$__f_outVar = null;
    this.s_Console$__f_errVar = null;
    this.s_Console$__f_inVar = null;
    $n_s_Console$ = this;
    this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
    this.s_Console$__f_errVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_err);
    this.s_Console$__f_inVar = new $c_s_util_DynamicVariable(null)
  };
  out__Ljava_io_PrintStream() {
    return $as_Ljava_io_PrintStream(this.s_Console$__f_outVar.s_util_DynamicVariable__f_v)
  };
}
const $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
let $n_s_Console$ = (void 0);
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
class $c_s_LowPriorityImplicits extends $c_s_LowPriorityImplicits2 {
}
class $c_s_Option$ extends $c_O {
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
const $f_s_PartialFunction__applyOrElse__O__F1__O = (function($thiz, x, default$1) {
  return ($thiz.isDefinedAt__O__Z(x) ? $thiz.apply__O__O(x) : default$1.apply__O__O(x))
});
function $is_s_PartialFunction(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)))
}
function $as_s_PartialFunction(obj) {
  return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"))
}
function $isArrayOf_s_PartialFunction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_PartialFunction)))
}
function $asArrayOf_s_PartialFunction(obj, depth) {
  return (($isArrayOf_s_PartialFunction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.PartialFunction;", depth))
}
class $c_T2$ extends $c_O {
  toString__T() {
    return "Tuple2"
  };
}
const $d_T2$ = new $TypeData().initClass({
  T2$: 0
}, false, "scala.Tuple2$", {
  T2$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_T2$.prototype.$classData = $d_T2$;
let $n_T2$ = (void 0);
function $m_T2$() {
  if ((!$n_T2$)) {
    $n_T2$ = new $c_T2$()
  };
  return $n_T2$
}
class $c_sci_$colon$colon$ extends $c_O {
  toString__T() {
    return "::"
  };
}
const $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
let $n_sci_$colon$colon$ = (void 0);
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
class $c_sci_HashMapBuilder$$anon$1 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashMap__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_MapNode__O__O__I__I__I__V(outer.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getKey__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashMapBuilder$$anon$1 = new $TypeData().initClass({
  sci_HashMapBuilder$$anon$1: 0
}, false, "scala.collection.immutable.HashMapBuilder$$anon$1", {
  sci_HashMapBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashMapBuilder$$anon$1.prototype.$classData = $d_sci_HashMapBuilder$$anon$1;
class $c_sci_HashSetBuilder$$anon$1 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashSet__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_SetNode__O__I__I__I__V(outer.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, $as_sci_SetNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashSetBuilder$$anon$1 = new $TypeData().initClass({
  sci_HashSetBuilder$$anon$1: 0
}, false, "scala.collection.immutable.HashSetBuilder$$anon$1", {
  sci_HashSetBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashSetBuilder$$anon$1.prototype.$classData = $d_sci_HashSetBuilder$$anon$1;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
class $c_sci_MapNode extends $c_sci_Node {
}
function $as_sci_MapNode(obj) {
  return (((obj instanceof $c_sci_MapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapNode"))
}
function $isArrayOf_sci_MapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapNode)))
}
function $asArrayOf_sci_MapNode(obj, depth) {
  return (($isArrayOf_sci_MapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapNode;", depth))
}
class $c_sci_Range$ extends $c_O {
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_sci_SetNode extends $c_sci_Node {
}
function $as_sci_SetNode(obj) {
  return (((obj instanceof $c_sci_SetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SetNode"))
}
function $isArrayOf_sci_SetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetNode)))
}
function $asArrayOf_sci_SetNode(obj, depth) {
  return (($isArrayOf_sci_SetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SetNode;", depth))
}
const $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable = (function($thiz, xs) {
  const it = xs.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    $thiz.addOne__O__scm_Growable(it.next__O())
  };
  return $thiz
});
class $c_scm_StringBuilder$ extends $c_O {
}
const $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
let $n_scm_StringBuilder$ = (void 0);
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
const $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V = (function($thiz, runnable) {
  if ((runnable === null)) {
    throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "runnable is null")
  };
  const tl = $thiz.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal;
  const b = tl.get__O();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    $as_s_concurrent_BatchingExecutor$SyncBatch(b).push__jl_Runnable__V(runnable)
  } else {
    let i;
    if ((b !== null)) {
      const this$2 = $as_jl_Integer(b);
      i = $uI(this$2)
    } else {
      i = 0
    };
    if ((i < 16)) {
      const i$1 = ((1 + i) | 0);
      tl.set__O__V(i$1);
      try {
        runnable.run__V()
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 instanceof $c_jl_InterruptedException)) {
          const x2 = $as_jl_InterruptedException(e$2);
          $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(x2)
        } else if ((e$2 !== null)) {
          if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
            $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(e$2)
          } else {
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          throw e
        }
      } finally {
        tl.set__O__V(b)
      }
    } else {
      const batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.set__O__V(batch);
      batch.run__V();
      tl.set__O__V(b)
    }
  }
});
function $is_s_concurrent_Future(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_Future)))
}
function $as_s_concurrent_Future(obj) {
  return (($is_s_concurrent_Future(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.Future"))
}
function $isArrayOf_s_concurrent_Future(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_Future)))
}
function $asArrayOf_s_concurrent_Future(obj, depth) {
  return (($isArrayOf_s_concurrent_Future(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.Future;", depth))
}
class $c_s_concurrent_impl_Promise$ManyCallbacks extends $c_O {
  constructor(first, rest) {
    super();
    this.s_concurrent_impl_Promise$ManyCallbacks__f_first = null;
    this.s_concurrent_impl_Promise$ManyCallbacks__f_rest = null;
    this.s_concurrent_impl_Promise$ManyCallbacks__f_first = first;
    this.s_concurrent_impl_Promise$ManyCallbacks__f_rest = rest
  };
  toString__T() {
    return "ManyCallbacks"
  };
}
function $as_s_concurrent_impl_Promise$ManyCallbacks(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$ManyCallbacks) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$ManyCallbacks"))
}
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$ManyCallbacks)))
}
function $asArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$ManyCallbacks;", depth))
}
const $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().initClass({
  s_concurrent_impl_Promise$ManyCallbacks: 0
}, false, "scala.concurrent.impl.Promise$ManyCallbacks", {
  s_concurrent_impl_Promise$ManyCallbacks: 1,
  O: 1,
  s_concurrent_impl_Promise$Callbacks: 1
});
$c_s_concurrent_impl_Promise$ManyCallbacks.prototype.$classData = $d_s_concurrent_impl_Promise$ManyCallbacks;
class $c_s_math_Fractional$ extends $c_O {
}
const $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
let $n_s_math_Fractional$ = (void 0);
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
class $c_s_math_Integral$ extends $c_O {
}
const $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
let $n_s_math_Integral$ = (void 0);
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
class $c_s_math_Numeric$ extends $c_O {
}
const $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
let $n_s_math_Numeric$ = (void 0);
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
class $c_s_package$$anon$1 extends $c_O {
  toString__T() {
    return "object AnyRef"
  };
}
const $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
class $c_s_reflect_ClassTag$ extends $c_O {
  apply__jl_Class__s_reflect_ClassTag(runtimeClass1) {
    return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
  };
}
const $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
let $n_s_reflect_ClassTag$ = (void 0);
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
class $c_s_reflect_Manifest$ extends $c_O {
}
const $d_s_reflect_Manifest$ = new $TypeData().initClass({
  s_reflect_Manifest$: 0
}, false, "scala.reflect.Manifest$", {
  s_reflect_Manifest$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_Manifest$.prototype.$classData = $d_s_reflect_Manifest$;
let $n_s_reflect_Manifest$ = (void 0);
function $m_s_reflect_Manifest$() {
  if ((!$n_s_reflect_Manifest$)) {
    $n_s_reflect_Manifest$ = new $c_s_reflect_Manifest$()
  };
  return $n_s_reflect_Manifest$
}
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_AbstractFunction2 extends $c_O {
  toString__T() {
    return "<function2>"
  };
}
class $c_sr_BooleanRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_BooleanRef__f_elem = false;
    this.sr_BooleanRef__f_elem = elem
  };
  toString__T() {
    const b = this.sr_BooleanRef__f_elem;
    return ("" + b)
  };
}
const $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
class $c_sr_IntRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_IntRef__f_elem = 0;
    this.sr_IntRef__f_elem = elem
  };
  toString__T() {
    const i = this.sr_IntRef__f_elem;
    return ("" + i)
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
class $c_s_util_Either$ extends $c_O {
}
const $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
let $n_s_util_Either$ = (void 0);
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
class $c_s_util_Left$ extends $c_O {
  toString__T() {
    return "Left"
  };
}
const $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
let $n_s_util_Left$ = (void 0);
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
const $ct_s_util_Random__ju_Random__ = (function($thiz, self) {
  $thiz.s_util_Random__f_self = self;
  return $thiz
});
const $ct_s_util_Random__ = (function($thiz) {
  $ct_s_util_Random__ju_Random__($thiz, $ct_ju_Random__(new $c_ju_Random()));
  return $thiz
});
class $c_s_util_Random extends $c_O {
  constructor() {
    super();
    this.s_util_Random__f_self = null
  };
}
const $d_s_util_Random = new $TypeData().initClass({
  s_util_Random: 0
}, false, "scala.util.Random", {
  s_util_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Random.prototype.$classData = $d_s_util_Random;
class $c_s_util_Right$ extends $c_O {
  toString__T() {
    return "Right"
  };
}
const $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
let $n_s_util_Right$ = (void 0);
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
class $c_s_util_control_NoStackTrace$ extends $c_O {
  constructor() {
    super();
    this.s_util_control_NoStackTrace$__f__noSuppression = false;
    this.s_util_control_NoStackTrace$__f__noSuppression = false
  };
}
const $d_s_util_control_NoStackTrace$ = new $TypeData().initClass({
  s_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", {
  s_util_control_NoStackTrace$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_control_NoStackTrace$.prototype.$classData = $d_s_util_control_NoStackTrace$;
let $n_s_util_control_NoStackTrace$ = (void 0);
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$()
  };
  return $n_s_util_control_NoStackTrace$
}
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  tuple2Hash__O__O__I(x, y) {
    return this.tuple2Hash__I__I__I__I($m_sr_Statics$().anyHash__O__I(x), $m_sr_Statics$().anyHash__O__I(y), (-889275714))
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = $as_sc_IndexedSeq(xs);
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
  mapHash__sc_Map__I(xs) {
    if (xs.isEmpty__Z()) {
      return this.s_util_hashing_MurmurHash3$__f_emptyMapHash
    } else {
      const accum = new $c_s_util_hashing_MurmurHash3$accum$1();
      let h = this.s_util_hashing_MurmurHash3$__f_mapSeed;
      xs.foreachEntry__F2__V(accum);
      h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_a);
      h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_b);
      h = this.mixLast__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_c);
      return this.finalizeHash__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_n)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
class $c_s_util_hashing_MurmurHash3$accum$1 extends $c_O {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_c = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
    this.s_util_hashing_MurmurHash3$accum$1__f_c = 1
  };
  toString__T() {
    return "<function2>"
  };
  apply__O__O__V(k, v) {
    const h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(k, v);
    this.s_util_hashing_MurmurHash3$accum$1__f_a = ((this.s_util_hashing_MurmurHash3$accum$1__f_a + h) | 0);
    this.s_util_hashing_MurmurHash3$accum$1__f_b = (this.s_util_hashing_MurmurHash3$accum$1__f_b ^ h);
    this.s_util_hashing_MurmurHash3$accum$1__f_c = $imul(this.s_util_hashing_MurmurHash3$accum$1__f_c, (1 | h));
    this.s_util_hashing_MurmurHash3$accum$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$accum$1__f_n) | 0)
  };
  apply__O__O__O(v1, v2) {
    this.apply__O__O__V(v1, v2)
  };
}
const $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$accum$1: 0
}, false, "scala.util.hashing.MurmurHash3$accum$1", {
  s_util_hashing_MurmurHash3$accum$1: 1,
  O: 1,
  F2: 1
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.$classData = $d_s_util_hashing_MurmurHash3$accum$1;
const $ct_Lcom_kos_pathtrain_heroes_Ball__ = (function($thiz) {
  $ct_Lcom_kos_pathtrain_heroes_Hero__($thiz);
  $f_Lcom_kos_pathtrain_heroes_HeroNode__$init$__V($thiz);
  $thiz.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = 0.0;
  $thiz.Lcom_kos_pathtrain_heroes_Ball__f_kind = 1;
  $thiz.Lcom_kos_pathtrain_heroes_Ball__f_color = (-65281);
  return $thiz
});
class $c_Lcom_kos_pathtrain_heroes_Ball extends $c_Lcom_kos_pathtrain_heroes_Hero {
  constructor() {
    super();
    this.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = 0.0;
    this.Lcom_kos_pathtrain_heroes_Ball__f_kind = 0;
    this.Lcom_kos_pathtrain_heroes_Ball__f_color = 0;
    this.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$node = null;
    this.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$nodeTransform = null
  };
  com$kos$pathtrain$heroes$HeroNode$$node__Lorg_scalajs_dom_raw_SVGGElement() {
    return this.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$node
  };
  com$kos$pathtrain$heroes$HeroNode$$node_$eq__Lorg_scalajs_dom_raw_SVGGElement__V(x$1) {
    this.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$node = x$1
  };
  com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform() {
    return this.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$nodeTransform
  };
  com$kos$pathtrain$heroes$HeroNode$$nodeTransform_$eq__Lorg_scalajs_dom_raw_SVGTransform__V(x$1) {
    this.Lcom_kos_pathtrain_heroes_Ball__f_com$kos$pathtrain$heroes$HeroNode$$nodeTransform = x$1
  };
  move__D__V(timeDelta) {
    this.Lcom_kos_pathtrain_heroes_Hero__f_x = (this.Lcom_kos_pathtrain_heroes_Hero__f_x + (this.Lcom_kos_pathtrain_heroes_Hero__f_vx * timeDelta));
    this.Lcom_kos_pathtrain_heroes_Hero__f_y = (this.Lcom_kos_pathtrain_heroes_Hero__f_y + (this.Lcom_kos_pathtrain_heroes_Hero__f_vy * timeDelta));
    $f_Lcom_kos_pathtrain_heroes_HeroNode__transform__V(this)
  };
}
function $as_Lcom_kos_pathtrain_heroes_Ball(obj) {
  return (((obj instanceof $c_Lcom_kos_pathtrain_heroes_Ball) || (obj === null)) ? obj : $throwClassCastException(obj, "com.kos.pathtrain.heroes.Ball"))
}
function $isArrayOf_Lcom_kos_pathtrain_heroes_Ball(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_kos_pathtrain_heroes_Ball)))
}
function $asArrayOf_Lcom_kos_pathtrain_heroes_Ball(obj, depth) {
  return (($isArrayOf_Lcom_kos_pathtrain_heroes_Ball(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.kos.pathtrain.heroes.Ball;", depth))
}
const $d_Lcom_kos_pathtrain_heroes_Ball = new $TypeData().initClass({
  Lcom_kos_pathtrain_heroes_Ball: 0
}, false, "com.kos.pathtrain.heroes.Ball", {
  Lcom_kos_pathtrain_heroes_Ball: 1,
  Lcom_kos_pathtrain_heroes_Hero: 1,
  O: 1,
  Lcom_kos_pathtrain_heroes_HeroNode: 1
});
$c_Lcom_kos_pathtrain_heroes_Ball.prototype.$classData = $d_Lcom_kos_pathtrain_heroes_Ball;
class $c_Lcom_kos_pathtrain_heroes_Canon extends $c_Lcom_kos_pathtrain_heroes_Hero {
  constructor() {
    super();
    this.Lcom_kos_pathtrain_heroes_Canon__f_kind = 0;
    this.Lcom_kos_pathtrain_heroes_Canon__f_com$kos$pathtrain$heroes$HeroNode$$node = null;
    this.Lcom_kos_pathtrain_heroes_Canon__f_com$kos$pathtrain$heroes$HeroNode$$nodeTransform = null;
    $ct_Lcom_kos_pathtrain_heroes_Hero__(this);
    $f_Lcom_kos_pathtrain_heroes_HeroNode__$init$__V(this);
    this.Lcom_kos_pathtrain_heroes_Canon__f_kind = 2
  };
  com$kos$pathtrain$heroes$HeroNode$$node__Lorg_scalajs_dom_raw_SVGGElement() {
    return this.Lcom_kos_pathtrain_heroes_Canon__f_com$kos$pathtrain$heroes$HeroNode$$node
  };
  com$kos$pathtrain$heroes$HeroNode$$node_$eq__Lorg_scalajs_dom_raw_SVGGElement__V(x$1) {
    this.Lcom_kos_pathtrain_heroes_Canon__f_com$kos$pathtrain$heroes$HeroNode$$node = x$1
  };
  com$kos$pathtrain$heroes$HeroNode$$nodeTransform__Lorg_scalajs_dom_raw_SVGTransform() {
    return this.Lcom_kos_pathtrain_heroes_Canon__f_com$kos$pathtrain$heroes$HeroNode$$nodeTransform
  };
  com$kos$pathtrain$heroes$HeroNode$$nodeTransform_$eq__Lorg_scalajs_dom_raw_SVGTransform__V(x$1) {
    this.Lcom_kos_pathtrain_heroes_Canon__f_com$kos$pathtrain$heroes$HeroNode$$nodeTransform = x$1
  };
}
const $d_Lcom_kos_pathtrain_heroes_Canon = new $TypeData().initClass({
  Lcom_kos_pathtrain_heroes_Canon: 0
}, false, "com.kos.pathtrain.heroes.Canon", {
  Lcom_kos_pathtrain_heroes_Canon: 1,
  Lcom_kos_pathtrain_heroes_Hero: 1,
  O: 1,
  Lcom_kos_pathtrain_heroes_HeroNode: 1
});
$c_Lcom_kos_pathtrain_heroes_Canon.prototype.$classData = $d_Lcom_kos_pathtrain_heroes_Canon;
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
});
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
function $as_jl_Error(obj) {
  return (((obj instanceof $c_jl_Error) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Error"))
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Error)))
}
function $asArrayOf_jl_Error(obj, depth) {
  return (($isArrayOf_jl_Error(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Error;", depth))
}
const $ct_jl_Exception__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_Exception extends $c_jl_Throwable {
}
const $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
class $c_s_$less$colon$less extends $c_O {
}
class $c_s_Predef$ extends $c_s_LowPriorityImplicits {
  constructor() {
    super();
    this.s_Predef$__f_Map = null;
    this.s_Predef$__f_Set = null;
    this.s_Predef$__f_$minus$greater = null;
    this.s_Predef$__f_Manifest = null;
    this.s_Predef$__f_NoManifest = null;
    $n_s_Predef$ = this;
    $m_s_package$();
    $m_sci_List$();
    this.s_Predef$__f_Map = $m_sci_Map$();
    this.s_Predef$__f_Set = $m_sci_Set$();
    this.s_Predef$__f_$minus$greater = $m_T2$();
    this.s_Predef$__f_Manifest = $m_s_reflect_Manifest$();
    this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$()
  };
  require__Z__V(requirement) {
    if ((!requirement)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
    }
  };
}
const $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
let $n_s_Predef$ = (void 0);
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
});
const $ct_sc_IterableFactory$Delegate__sc_IterableFactory__ = (function($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_IterableFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_IterableFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_IterableFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
  newBuilder__scm_Builder() {
    return this.sc_IterableFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
}
const $f_sc_IterableOps__sizeCompare__I__I = (function($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    const known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      let i = 0;
      const it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return 1
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
});
const $f_sc_IterableOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $thiz, n))
});
const $f_sc_IterableOps__tail__O = (function($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return $thiz.drop__I__O(1)
});
const $f_sc_IterableOps__slice__I__I__O = (function($thiz, from, until) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $ct_sc_View$Take__sc_IterableOps__I__(new $c_sc_View$Take(), $thiz, until), from))
});
const $f_sc_IterableOps__concat__sc_IterableOnce__O = (function($thiz, suffix) {
  const $$x2 = $thiz.iterableFactory__sc_IterableFactory();
  let $$x1;
  if ($is_sc_Iterable(suffix)) {
    const x2 = $as_sc_Iterable(suffix);
    $$x1 = new $c_sc_View$Concat($thiz, x2)
  } else {
    const this$2 = $thiz.iterator__sc_Iterator();
    const xs = new $c_sjsr_AnonFunction0(((this$1, suffix$1) => (() => suffix$1.iterator__sc_Iterator()))($thiz, suffix));
    $$x1 = this$2.concat__F0__sc_Iterator(xs)
  };
  return $$x2.from__sc_IterableOnce__O($$x1)
});
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $as_sc_IterableOps(obj) {
  return (($is_sc_IterableOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOps"))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
function $asArrayOf_sc_IterableOps(obj, depth) {
  return (($isArrayOf_sc_IterableOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOps;", depth))
}
const $f_sc_Iterator__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  $thiz.drop__I__sc_Iterator(from);
  while ($thiz.hasNext__Z()) {
    if ($uZ(p.apply__O__O($thiz.next__O()))) {
      return i
    };
    i = ((1 + i) | 0)
  };
  return (-1)
});
const $f_sc_Iterator__concat__F0__sc_Iterator = (function($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs)
});
const $f_sc_Iterator__take__I__sc_Iterator = (function($thiz, n) {
  return $thiz.sliceIterator__I__I__sc_Iterator(0, ((n > 0) ? n : 0))
});
const $f_sc_Iterator__drop__I__sc_Iterator = (function($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
});
const $f_sc_Iterator__sliceIterator__I__I__sc_Iterator = (function($thiz, from, until) {
  const lo = ((from > 0) ? from : 0);
  const rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
});
const $f_sc_Iterator__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
});
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
  newBuilder__scm_Builder() {
    return new $c_sc_Iterator$$anon$21()
  };
  from__sc_IterableOnce__O(source) {
    return source.iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
const $ct_sc_MapFactory$Delegate__sc_MapFactory__ = (function($thiz, delegate) {
  $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_MapFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_MapFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_MapFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
}
class $c_sc_View$ extends $c_O {
  from__sc_IterableOnce__sc_View(it) {
    if ($is_sc_View(it)) {
      const x2 = $as_sc_View(it);
      return x2
    } else if ($is_sc_Iterable(it)) {
      const x3 = $as_sc_Iterable(it);
      const it$1 = new $c_sjsr_AnonFunction0(((this$1, x3$1) => (() => x3$1.iterator__sc_Iterator()))(this, x3));
      return new $c_sc_View$$anon$1(it$1)
    } else {
      const this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
      return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
    }
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ArrayBuffer$$anon$1();
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((it$2) => {
      const it = $as_sc_IterableOnce(it$2);
      return $m_sc_View$().from__sc_IterableOnce__sc_View(it)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_View(source)
  };
}
const $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
let $n_sc_View$ = (void 0);
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
class $c_sci_BitmapIndexedMapNode extends $c_sci_MapNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedMapNode__f_dataMap = 0;
    this.sci_BitmapIndexedMapNode__f_nodeMap = 0;
    this.sci_BitmapIndexedMapNode__f_content = null;
    this.sci_BitmapIndexedMapNode__f_originalHashes = null;
    this.sci_BitmapIndexedMapNode__f_size = 0;
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedMapNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedMapNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedMapNode__f_content = content;
    this.sci_BitmapIndexedMapNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedMapNode__f_size = size;
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedMapNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode
  };
  getKey__I__O(index) {
    return this.sci_BitmapIndexedMapNode__f_content.get((index << 1))
  };
  getValue__I__O(index) {
    return this.sci_BitmapIndexedMapNode__f_content.get(((1 + (index << 1)) | 0))
  };
  getPayload__I__T2(index) {
    return new $c_T2(this.sci_BitmapIndexedMapNode__f_content.get((index << 1)), this.sci_BitmapIndexedMapNode__f_content.get(((1 + (index << 1)) | 0)))
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedMapNode__f_originalHashes.get(index)
  };
  getNode__I__sci_MapNode(index) {
    return $as_sci_MapNode(this.sci_BitmapIndexedMapNode__f_content.get((((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - index) | 0)))
  };
  apply__O__I__I__I__O(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index))) {
        return this.getValue__I__O(index)
      } else {
        throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      return this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).apply__O__I__I__I__O(key, originalHash, keyHash, ((5 + shift) | 0))
    } else {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    }
  };
  getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, shift, f) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? this.getValue__I__O(index) : f.apply__O())
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_MapNode(index$2).getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, ((5 + shift) | 0), f)
    } else {
      return f.apply__O()
    }
  };
  containsKey__O__I__I__I__Z(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedMapNode__f_originalHashes.get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index)))
    } else {
      return (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0) && this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).containsKey__O__I__I__I__Z(key, originalHash, keyHash, ((5 + shift) | 0)))
    }
  };
  updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, keyHash, shift, replaceValue) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      const key0UnimprovedHash = this.getHash__I__I(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
        if (replaceValue) {
          const value0 = this.getValue__I__O(index);
          return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, key, value))
        } else {
          return this
        }
      } else {
        const value0$2 = this.getValue__I__O(index);
        const key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
        const subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        return this.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_MapNode(index$2);
      const subNodeNew$2 = subNode.updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
      return ((subNodeNew$2 === subNode) ? this : this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew$2))
    } else {
      return this.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value)
    }
  };
  removed__O__I__I__I__sci_BitmapIndexedMapNode(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key0, key)) {
        const i = this.sci_BitmapIndexedMapNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedMapNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(keyHash, 0)));
          if ((index === 0)) {
            const array = [this.getKey__I__O(1), this.getValue__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.set(i$2, iterator.next__O());
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedMapNode__f_originalHashes.get(1)]), 1, $m_sc_Hashing$().improve__I__I(this.getHash__I__I(1)))
          } else {
            const array$2 = [this.getKey__I__O(0), this.getValue__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.set(i$3, iterator$1.next__O());
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedMapNode__f_originalHashes.get(0)]), 1, $m_sc_Hashing$().improve__I__I(this.getHash__I__I(0)))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedMapNode(bitpos, keyHash)
        }
      } else {
        return this
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_MapNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_MapNode(key, originalHash, keyHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      return ((subNodeNewSize === 1) ? ((this.sci_BitmapIndexedMapNode__f_size === subNode.size__I()) ? $as_sci_BitmapIndexedMapNode(subNodeNew) : this.copyAndMigrateFromNodeToInline__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew)) : ((subNodeNewSize > 1) ? this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew) : this))
    } else {
      return this
    }
  };
  mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [new $c_T2(key0, value0), new $c_T2(key1, value1)];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      const newCachedHash = ((keyHash0 + keyHash1) | 0);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        if ((mask0 < mask1)) {
          const array$1 = [key0, value0, key1, value1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.set(i, iterator.next__O());
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash0, originalHash1]), 2, newCachedHash)
        } else {
          const array$3 = [key1, value1, key0, value0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.set(i$1, iterator$1.next__O());
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash1, originalHash0]), 2, newCachedHash)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.set(i$2, iterator$2.next__O());
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedMapNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedMapNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedMapNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedMapNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedMapNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, newKey, newValue) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(((1 + idx) | 0), newValue);
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
  };
  copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(idx, newNode);
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, ((((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((2 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idx);
    dst.set(idx, key);
    dst.set(((1 + idx) | 0), value);
    const destPos = ((2 + idx) | 0);
    const length = ((src.u.length - idx) | 0);
    $systemArraycopy(src, idx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedMapNode(bitpos, keyHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-2) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idx);
    const srcPos = ((2 + idx) | 0);
    const length = (((-2) + ((src.u.length - idx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, idx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxOld = (dataIx << 1);
    const idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxOld);
    const srcPos = ((2 + idxOld) | 0);
    const length = ((idxNew - idxOld) | 0);
    $systemArraycopy(src, srcPos, dst, idxOld, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((2 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedMapNode__f_nodeMap = (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedMapNode__f_content = dst;
    this.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
    this.sci_BitmapIndexedMapNode__f_size = (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxOld = (dataIx << 1);
    const idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxOld);
    const srcPos = ((2 + idxOld) | 0);
    const length = ((idxNew - idxOld) | 0);
    $systemArraycopy(src, srcPos, dst, idxOld, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((2 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndMigrateFromNodeToInline__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const idxNew = (dataIxNew << 1);
    const key = node.getKey__I__O(0);
    const value = node.getValue__I__O(0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxNew);
    dst.set(idxNew, key);
    dst.set(((1 + idxNew) | 0), value);
    const destPos = ((2 + idxNew) | 0);
    const length = ((idxOld - idxNew) | 0);
    $systemArraycopy(src, idxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((2 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  foreach__F1__V(f) {
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    const iN = $m_jl_Integer$().bitCount__I__I(i);
    let i$1 = 0;
    while ((i$1 < iN)) {
      f.apply__O__O(this.getPayload__I__T2(i$1));
      i$1 = ((1 + i$1) | 0)
    };
    const i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
    const jN = $m_jl_Integer$().bitCount__I__I(i$2);
    let j = 0;
    while ((j < jN)) {
      this.getNode__I__sci_MapNode(j).foreach__F1__V(f);
      j = ((1 + j) | 0)
    }
  };
  foreachEntry__F2__V(f) {
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    const iN = $m_jl_Integer$().bitCount__I__I(i);
    let i$1 = 0;
    while ((i$1 < iN)) {
      f.apply__O__O__O(this.getKey__I__O(i$1), this.getValue__I__O(i$1));
      i$1 = ((1 + i$1) | 0)
    };
    const i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
    const jN = $m_jl_Integer$().bitCount__I__I(i$2);
    let j = 0;
    while ((j < jN)) {
      this.getNode__I__sci_MapNode(j).foreachEntry__F2__V(f);
      j = ((1 + j) | 0)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
      const x2 = $as_sci_BitmapIndexedMapNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedMapNode__f_nodeMap === x2.sci_BitmapIndexedMapNode__f_nodeMap)) && (this.sci_BitmapIndexedMapNode__f_dataMap === x2.sci_BitmapIndexedMapNode__f_dataMap)) && (this.sci_BitmapIndexedMapNode__f_size === x2.sci_BitmapIndexedMapNode__f_size))) {
          const a = this.sci_BitmapIndexedMapNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedMapNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedMapNode__f_content;
          const a2 = x2.sci_BitmapIndexedMapNode__f_content;
          const length = this.sci_BitmapIndexedMapNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.get(i), a2.get(i));
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedMapNode() {
    const contentClone = $asArrayOf_O(this.sci_BitmapIndexedMapNode__f_content.clone__O(), 1);
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    let i$1 = ($m_jl_Integer$().bitCount__I__I(i) << 1);
    while ((i$1 < contentLength)) {
      contentClone.set(i$1, $as_sci_MapNode(contentClone.get(i$1)).copy__sci_MapNode());
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, contentClone, $asArrayOf_I(this.sci_BitmapIndexedMapNode__f_originalHashes.clone__O(), 1), this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
  };
  copy__sci_MapNode() {
    return this.copy__sci_BitmapIndexedMapNode()
  };
  removed__O__I__I__I__sci_MapNode(key, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedMapNode(key, originalHash, hash, shift)
  };
  updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, hash, shift, replaceValue) {
    return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, hash, shift, replaceValue)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_MapNode(index)
  };
}
function $as_sci_BitmapIndexedMapNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedMapNode"))
}
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedMapNode)))
}
function $asArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedMapNode;", depth))
}
const $d_sci_BitmapIndexedMapNode = new $TypeData().initClass({
  sci_BitmapIndexedMapNode: 0
}, false, "scala.collection.immutable.BitmapIndexedMapNode", {
  sci_BitmapIndexedMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedMapNode.prototype.$classData = $d_sci_BitmapIndexedMapNode;
class $c_sci_BitmapIndexedSetNode extends $c_sci_SetNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedSetNode__f_dataMap = 0;
    this.sci_BitmapIndexedSetNode__f_nodeMap = 0;
    this.sci_BitmapIndexedSetNode__f_content = null;
    this.sci_BitmapIndexedSetNode__f_originalHashes = null;
    this.sci_BitmapIndexedSetNode__f_size = 0;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedSetNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedSetNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedSetNode__f_content = content;
    this.sci_BitmapIndexedSetNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedSetNode__f_size = size;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedSetNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode
  };
  getPayload__I__O(index) {
    return this.sci_BitmapIndexedSetNode__f_content.get(index)
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedSetNode__f_originalHashes.get(index)
  };
  getNode__I__sci_SetNode(index) {
    return $as_sci_SetNode(this.sci_BitmapIndexedSetNode__f_content.get((((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - index) | 0)))
  };
  contains__O__I__I__I__Z(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedSetNode__f_originalHashes.get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element, this.getPayload__I__O(index)))
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_SetNode(index$2).contains__O__I__I__I__Z(element, originalHash, elementHash, ((5 + shift) | 0))
    };
    return false
  };
  updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if (Object.is(element0, element)) {
        return this
      } else {
        const element0UnimprovedHash = this.getHash__I__I(index);
        const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
        if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          return this
        } else {
          const subNodeNew = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          return this.copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew$2 = subNode.updated__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNode === subNodeNew$2)) {
        return this
      } else {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew$2)
      }
    };
    return this.copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, element, originalHash, elementHash)
  };
  removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(element0, element)) {
        const i = this.sci_BitmapIndexedSetNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedSetNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(elementHash, 0)));
          if ((index === 0)) {
            const array = [this.getPayload__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.set(i$2, iterator.next__O());
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.get(1)]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.get(1)))
          } else {
            const array$2 = [this.getPayload__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.set(i$3, iterator$1.next__O());
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.get(0)]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.get(0)))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash)
        }
      } else {
        return this
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      if ((subNodeNewSize === 1)) {
        if ((this.sci_BitmapIndexedSetNode__f_size === subNode.size__I())) {
          return $as_sci_BitmapIndexedSetNode(subNodeNew)
        } else {
          return this.copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, subNode, subNodeNew)
        }
      } else if ((subNodeNewSize > 1)) {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew)
      }
    };
    return this
  };
  mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [key0, key1];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        const newCachedHashCode = ((keyHash0 + keyHash1) | 0);
        if ((mask0 < mask1)) {
          const array$1 = [key0, key1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.set(i, iterator.next__O());
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash0, originalKeyHash1]), 2, newCachedHashCode)
        } else {
          const array$3 = [key1, key0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.set(i$1, iterator$1.next__O());
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash1, originalKeyHash0]), 2, newCachedHashCode)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.set(i$2, iterator$2.next__O());
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedSetNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedSetNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(idx, newNode);
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, dst, this.sci_BitmapIndexedSetNode__f_originalHashes, ((((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, key, originalHash, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    dst.set(dataIx, key);
    const destPos = ((1 + dataIx) | 0);
    const length = ((src.u.length - dataIx) | 0);
    $systemArraycopy(src, dataIx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + elementHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = (((-1) + ((src.u.length - dataIx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0))
  };
  copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((1 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-1) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const srcPos = ((1 + dataIx) | 0);
    const dest = this.sci_BitmapIndexedSetNode__f_content;
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dest, dataIx, length);
    this.sci_BitmapIndexedSetNode__f_content.set(idxNew, node);
    this.sci_BitmapIndexedSetNode__f_dataMap = (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedSetNode__f_nodeMap = (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedSetNode__f_originalHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedSetNode__f_size = (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIxNew);
    dst.set(dataIxNew, node.getPayload__I__O(0));
    const destPos = ((1 + dataIxNew) | 0);
    const length = ((idxOld - dataIxNew) | 0);
    $systemArraycopy(src, dataIxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((1 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  foreach__F1__V(f) {
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    const thisPayloadArity = $m_jl_Integer$().bitCount__I__I(i);
    let i$1 = 0;
    while ((i$1 < thisPayloadArity)) {
      f.apply__O__O(this.getPayload__I__O(i$1));
      i$1 = ((1 + i$1) | 0)
    };
    const i$2 = this.sci_BitmapIndexedSetNode__f_nodeMap;
    const thisNodeArity = $m_jl_Integer$().bitCount__I__I(i$2);
    let j = 0;
    while ((j < thisNodeArity)) {
      this.getNode__I__sci_SetNode(j).foreach__F1__V(f);
      j = ((1 + j) | 0)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = $as_sci_BitmapIndexedSetNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedSetNode__f_nodeMap === x2.sci_BitmapIndexedSetNode__f_nodeMap)) && (this.sci_BitmapIndexedSetNode__f_dataMap === x2.sci_BitmapIndexedSetNode__f_dataMap)) && (this.sci_BitmapIndexedSetNode__f_size === x2.sci_BitmapIndexedSetNode__f_size))) {
          const a = this.sci_BitmapIndexedSetNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedSetNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedSetNode__f_content;
          const a2 = x2.sci_BitmapIndexedSetNode__f_content;
          const length = this.sci_BitmapIndexedSetNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.get(i), a2.get(i));
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedSetNode() {
    const contentClone = $asArrayOf_O(this.sci_BitmapIndexedSetNode__f_content.clone__O(), 1);
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    let i$1 = $m_jl_Integer$().bitCount__I__I(i);
    while ((i$1 < contentLength)) {
      contentClone.set(i$1, $as_sci_SetNode(contentClone.get(i$1)).copy__sci_SetNode());
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, contentClone, $asArrayOf_I(this.sci_BitmapIndexedSetNode__f_originalHashes.clone__O(), 1), this.sci_BitmapIndexedSetNode__f_size, this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode)
  };
  copy__sci_SetNode() {
    return this.copy__sci_BitmapIndexedSetNode()
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_SetNode(index)
  };
}
function $as_sci_BitmapIndexedSetNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedSetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedSetNode"))
}
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedSetNode)))
}
function $asArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedSetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedSetNode;", depth))
}
const $d_sci_BitmapIndexedSetNode = new $TypeData().initClass({
  sci_BitmapIndexedSetNode: 0
}, false, "scala.collection.immutable.BitmapIndexedSetNode", {
  sci_BitmapIndexedSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedSetNode.prototype.$classData = $d_sci_BitmapIndexedSetNode;
class $c_sci_HashCollisionMapNode extends $c_sci_MapNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionMapNode__f_originalHash = 0;
    this.sci_HashCollisionMapNode__f_hash = 0;
    this.sci_HashCollisionMapNode__f_content = null;
    this.sci_HashCollisionMapNode__f_originalHash = originalHash;
    this.sci_HashCollisionMapNode__f_hash = hash;
    this.sci_HashCollisionMapNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionMapNode__f_content.length__I() >= 2))
  };
  indexOf__O__I(key) {
    const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
    let i = 0;
    while (iter.hasNext__Z()) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z($as_T2(iter.next__O())._1__O(), key)) {
        return i
      };
      i = ((1 + i) | 0)
    };
    return (-1)
  };
  size__I() {
    return this.sci_HashCollisionMapNode__f_content.length__I()
  };
  apply__O__I__I__I__O(key, originalHash, hash, shift) {
    const this$1 = this.get__O__I__I__I__s_Option(key, originalHash, hash, shift);
    if (this$1.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    } else {
      return this$1.get__O()
    }
  };
  get__O__I__I__I__s_Option(key, originalHash, hash, shift) {
    if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
      const index = this.indexOf__O__I(key);
      return ((index >= 0) ? new $c_s_Some($as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))._2__O()) : $m_s_None$())
    } else {
      return $m_s_None$()
    }
  };
  getOrElse__O__I__I__I__F0__O(key, originalHash, hash, shift, f) {
    if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
      const x1 = this.indexOf__O__I(key);
      return ((x1 === (-1)) ? f.apply__O() : $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(x1))._2__O())
    } else {
      return f.apply__O()
    }
  };
  containsKey__O__I__I__I__Z(key, originalHash, hash, shift) {
    return ((this.sci_HashCollisionMapNode__f_hash === hash) && (this.indexOf__O__I(key) >= 0))
  };
  updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, hash, shift, replaceValue) {
    const index = this.indexOf__O__I(key);
    return ((index >= 0) ? (replaceValue ? (Object.is($as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))._2__O(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.sci_HashCollisionMapNode__f_content.updated__I__O__sci_Vector(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector(new $c_T2(key, value))))
  };
  removed__O__I__I__I__sci_MapNode(key, originalHash, hash, shift) {
    if ((!this.containsKey__O__I__I__I__Z(key, originalHash, hash, shift))) {
      return this
    } else {
      const this$2 = this.sci_HashCollisionMapNode__f_content;
      const pred = new $c_sjsr_AnonFunction1(((this$1, key$1) => ((keyValuePair$2) => {
        const keyValuePair = $as_T2(keyValuePair$2);
        return $m_sr_BoxesRunTime$().equals__O__O__Z(keyValuePair._1__O(), key$1)
      }))(this, key));
      const updatedContent = this$2.filterImpl__F1__Z__sci_Vector(pred, true);
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const x1$2 = $as_T2(updatedContent.apply__I__O(0));
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2)
        };
        const k = x1$2._1__O();
        const v = x1$2._2__O();
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [k, v];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.set(i, iterator.next__O());
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionMapNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_MapNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionMapNode__f_content.length__I()
  };
  getKey__I__O(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))._1__O()
  };
  getValue__I__O(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))._2__O()
  };
  getPayload__I__T2(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionMapNode__f_originalHash
  };
  foreach__F1__V(f) {
    this.sci_HashCollisionMapNode__f_content.foreach__F1__V(f)
  };
  foreachEntry__F2__V(f) {
    this.sci_HashCollisionMapNode__f_content.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, f$1) => ((x0$1$2) => {
      const x0$1 = $as_T2(x0$1$2);
      if ((x0$1 !== null)) {
        const k = x0$1._1__O();
        const v = x0$1._2__O();
        return f$1.apply__O__O__O(k, v)
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, f)))
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionMapNode)) {
      const x2 = $as_sci_HashCollisionMapNode(that);
      if ((this === x2)) {
        return true
      } else if (((this.sci_HashCollisionMapNode__f_hash === x2.sci_HashCollisionMapNode__f_hash) && (this.sci_HashCollisionMapNode__f_content.length__I() === x2.sci_HashCollisionMapNode__f_content.length__I()))) {
        const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
        while (iter.hasNext__Z()) {
          const x1$2 = $as_T2(iter.next__O());
          if ((x1$2 === null)) {
            throw new $c_s_MatchError(x1$2)
          };
          const key = x1$2._1__O();
          const value = x1$2._2__O();
          const index = x2.indexOf__O__I(key);
          if (((index < 0) || (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, $as_T2(x2.sci_HashCollisionMapNode__f_content.apply__I__O(index))._2__O())))) {
            return false
          }
        };
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionMapNode__f_content.length__I(), this.sci_HashCollisionMapNode__f_hash)
  };
  copy__sci_MapNode() {
    return new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, this.sci_HashCollisionMapNode__f_content)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_MapNode(index)
  };
}
function $as_sci_HashCollisionMapNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionMapNode"))
}
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionMapNode)))
}
function $asArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionMapNode;", depth))
}
const $d_sci_HashCollisionMapNode = new $TypeData().initClass({
  sci_HashCollisionMapNode: 0
}, false, "scala.collection.immutable.HashCollisionMapNode", {
  sci_HashCollisionMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionMapNode.prototype.$classData = $d_sci_HashCollisionMapNode;
class $c_sci_HashCollisionSetNode extends $c_sci_SetNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionSetNode__f_originalHash = 0;
    this.sci_HashCollisionSetNode__f_hash = 0;
    this.sci_HashCollisionSetNode__f_content = null;
    this.sci_HashCollisionSetNode__f_originalHash = originalHash;
    this.sci_HashCollisionSetNode__f_hash = hash;
    this.sci_HashCollisionSetNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionSetNode__f_content.length__I() >= 2))
  };
  contains__O__I__I__I__Z(element, originalHash, hash, shift) {
    if ((this.sci_HashCollisionSetNode__f_hash === hash)) {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      return $f_sc_SeqOps__contains__O__Z(this$1, element)
    } else {
      return false
    }
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return (this.contains__O__I__I__I__Z(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)))
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    if ((!this.contains__O__I__I__I__Z(element, originalHash, hash, shift))) {
      return this
    } else {
      const this$2 = this.sci_HashCollisionSetNode__f_content;
      const pred = new $c_sjsr_AnonFunction1(((this$1, element$1) => ((element0$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(element0$2, element$1)))(this, element));
      const updatedContent = this$2.filterImpl__F1__Z__sci_Vector(pred, true);
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [updatedContent.apply__I__O(0)];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.set(i, iterator.next__O());
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionSetNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_SetNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  getPayload__I__O(index) {
    return this.sci_HashCollisionSetNode__f_content.apply__I__O(index)
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionSetNode__f_originalHash
  };
  size__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  foreach__F1__V(f) {
    const iter = this.sci_HashCollisionSetNode__f_content.iterator__sc_Iterator();
    while (iter.hasNext__Z()) {
      f.apply__O__O(iter.next__O())
    }
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionSetNode__f_content.length__I(), this.sci_HashCollisionSetNode__f_hash)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionSetNode)) {
      const x2 = $as_sci_HashCollisionSetNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if ((this.sci_HashCollisionSetNode__f_hash === x2.sci_HashCollisionSetNode__f_hash)) {
          const this$1 = this.sci_HashCollisionSetNode__f_content;
          const $$x2 = this$1.length__I();
          const this$2 = x2.sci_HashCollisionSetNode__f_content;
          $$x1 = ($$x2 === this$2.length__I())
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const this$3 = this.sci_HashCollisionSetNode__f_content;
          const eta$0$1 = x2.sci_HashCollisionSetNode__f_content;
          let res = true;
          const it = this$3.iterator__sc_Iterator();
          while ((res && it.hasNext__Z())) {
            const arg1 = it.next__O();
            res = $f_sc_SeqOps__contains__O__Z(eta$0$1, arg1)
          };
          return res
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_SetNode() {
    return new $c_sci_HashCollisionSetNode(this.sci_HashCollisionSetNode__f_originalHash, this.sci_HashCollisionSetNode__f_hash, this.sci_HashCollisionSetNode__f_content)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_SetNode(index)
  };
}
function $as_sci_HashCollisionSetNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionSetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionSetNode"))
}
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionSetNode)))
}
function $asArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionSetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionSetNode;", depth))
}
const $d_sci_HashCollisionSetNode = new $TypeData().initClass({
  sci_HashCollisionSetNode: 0
}, false, "scala.collection.immutable.HashCollisionSetNode", {
  sci_HashCollisionSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionSetNode.prototype.$classData = $d_sci_HashCollisionSetNode;
class $c_sci_HashMap$ extends $c_O {
  constructor() {
    super();
    this.sci_HashMap$__f_EmptyMap = null;
    $n_sci_HashMap$ = this;
    const this$1 = $m_sci_MapNode$();
    this.sci_HashMap$__f_EmptyMap = new $c_sci_HashMap(this$1.sci_MapNode$__f_EmptyMapNode)
  };
  from__sc_IterableOnce__sci_HashMap(source) {
    if ((source instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(source);
      return x2
    } else {
      const this$1 = new $c_sci_HashMapBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashMapBuilder(source);
      return this$2.result__sci_HashMap()
    }
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_HashMap(it)
  };
}
const $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
let $n_sci_HashMap$ = (void 0);
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
class $c_sci_HashSet$ extends $c_O {
  constructor() {
    super();
    this.sci_HashSet$__f_EmptySet = null;
    $n_sci_HashSet$ = this;
    const this$1 = $m_sci_SetNode$();
    this.sci_HashSet$__f_EmptySet = new $c_sci_HashSet(this$1.sci_SetNode$__f_EmptySetNode)
  };
  from__sc_IterableOnce__sci_HashSet(source) {
    if ((source instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(source);
      return x2
    } else if ((source.knownSize__I() === 0)) {
      return this.sci_HashSet$__f_EmptySet
    } else {
      const this$1 = new $c_sci_HashSetBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashSetBuilder(source);
      return this$2.result__sci_HashSet()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_HashSetBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_HashSet(source)
  };
}
const $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
let $n_sci_HashSet$ = (void 0);
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
class $c_sci_LazyList$State$Cons extends $c_O {
  constructor(head, tail) {
    super();
    this.sci_LazyList$State$Cons__f_head = null;
    this.sci_LazyList$State$Cons__f_tail = null;
    this.sci_LazyList$State$Cons__f_head = head;
    this.sci_LazyList$State$Cons__f_tail = tail
  };
  head__O() {
    return this.sci_LazyList$State$Cons__f_head
  };
  tail__sci_LazyList() {
    return this.sci_LazyList$State$Cons__f_tail
  };
}
const $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
class $c_sci_LazyList$State$Empty$ extends $c_O {
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list")
  };
  tail__sci_LazyList() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
let $n_sci_LazyList$State$Empty$ = (void 0);
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
class $c_sci_Map$ extends $c_O {
  from__sc_IterableOnce__sci_Map(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = $as_sci_Iterable(it);
      if (x2.isEmpty__Z()) {
        return $m_sci_Map$EmptyMap$()
      }
    };
    if ($is_sci_Map(it)) {
      const x3 = $as_sci_Map(it);
      return x3
    };
    const this$1 = new $c_sci_MapBuilderImpl();
    const this$2 = this$1.addAll__sc_IterableOnce__sci_MapBuilderImpl(it);
    return this$2.result__sci_Map()
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Map(it)
  };
}
const $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
let $n_sci_Map$ = (void 0);
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
class $c_sci_Set$ extends $c_O {
  from__sc_IterableOnce__sci_Set(it) {
    if ($is_sci_SortedSet(it)) {
      const this$1 = new $c_sci_SetBuilderImpl();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$2.result__sci_Set()
    } else if ((it.knownSize__I() === 0)) {
      return $m_sci_Set$EmptySet$()
    } else if ($is_sci_Set(it)) {
      const x3 = $as_sci_Set(it);
      return x3
    } else {
      const this$3 = new $c_sci_SetBuilderImpl();
      const this$4 = this$3.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$4.result__sci_Set()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_SetBuilderImpl()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Set(source)
  };
}
const $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
let $n_sci_Set$ = (void 0);
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
class $c_s_concurrent_BatchingExecutor$SyncBatch extends $c_s_concurrent_BatchingExecutor$AbstractBatch {
  constructor(outer, runnable) {
    super();
    $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__(this, outer, runnable, $m_s_concurrent_BatchingExecutorStatics$().s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray, 1)
  };
  run__V() {
    while (true) {
      try {
        this.runN__I__V(1024)
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 instanceof $c_jl_InterruptedException)) {
          const x2 = $as_jl_InterruptedException(e$2);
          $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(x2)
        } else if ((e$2 !== null)) {
          if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
            $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(e$2)
          } else {
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          throw e
        }
      };
      if ((this.s_concurrent_BatchingExecutor$AbstractBatch__f_size > 0)) {
        continue
      };
      break
    }
  };
}
function $as_s_concurrent_BatchingExecutor$SyncBatch(obj) {
  return (((obj instanceof $c_s_concurrent_BatchingExecutor$SyncBatch) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.BatchingExecutor$SyncBatch"))
}
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_BatchingExecutor$SyncBatch)))
}
function $asArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (($isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.BatchingExecutor$SyncBatch;", depth))
}
const $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().initClass({
  s_concurrent_BatchingExecutor$SyncBatch: 0
}, false, "scala.concurrent.BatchingExecutor$SyncBatch", {
  s_concurrent_BatchingExecutor$SyncBatch: 1,
  s_concurrent_BatchingExecutor$AbstractBatch: 1,
  O: 1,
  jl_Runnable: 1
});
$c_s_concurrent_BatchingExecutor$SyncBatch.prototype.$classData = $d_s_concurrent_BatchingExecutor$SyncBatch;
class $c_s_concurrent_impl_Promise$Link extends $c_ju_concurrent_atomic_AtomicReference {
  constructor(to) {
    super();
    $ct_ju_concurrent_atomic_AtomicReference__O__(this, to)
  };
  promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(owner) {
    const c = $as_s_concurrent_impl_Promise$DefaultPromise(this.ju_concurrent_atomic_AtomicReference__f_value);
    let current = c;
    let target = c;
    while (true) {
      const value = target.ju_concurrent_atomic_AtomicReference__f_value;
      if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
        if (this.compareAndSet__O__O__Z(current, target)) {
          return target
        } else {
          current = $as_s_concurrent_impl_Promise$DefaultPromise(this.ju_concurrent_atomic_AtomicReference__f_value)
        }
      } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
        target = $as_s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_impl_Promise$Link(value).ju_concurrent_atomic_AtomicReference__f_value)
      } else {
        owner.unlink__s_util_Try__V($as_s_util_Try(value));
        return owner
      }
    }
  };
}
function $as_s_concurrent_impl_Promise$Link(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$Link) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Link"))
}
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$Link)))
}
function $asArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$Link;", depth))
}
const $d_s_concurrent_impl_Promise$Link = new $TypeData().initClass({
  s_concurrent_impl_Promise$Link: 0
}, false, "scala.concurrent.impl.Promise$Link", {
  s_concurrent_impl_Promise$Link: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_concurrent_impl_Promise$Link.prototype.$classData = $d_s_concurrent_impl_Promise$Link;
class $c_s_math_Equiv$ extends $c_O {
}
const $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
let $n_s_math_Equiv$ = (void 0);
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
class $c_s_math_Ordering$ extends $c_O {
}
const $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
let $n_s_math_Ordering$ = (void 0);
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_s_reflect_NoManifest$ extends $c_O {
  toString__T() {
    return "<?>"
  };
}
const $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
let $n_s_reflect_NoManifest$ = (void 0);
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
class $c_sjs_js_Any$ extends $c_O {
  fromFunction0__F0__sjs_js_Function0(f) {
    return ((f$1) => (() => f$1.apply__O()))(f)
  };
}
const $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
let $n_sjs_js_Any$ = (void 0);
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_sjsr_AnonFunction2 extends $c_sr_AbstractFunction2 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction2__f_f = null;
    this.sjsr_AnonFunction2__f_f = f
  };
  apply__O__O__O(arg1, arg2) {
    return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
  };
}
const $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
class $c_s_util_control_ControlThrowable extends $c_jl_Throwable {
}
function $as_s_util_control_ControlThrowable(obj) {
  return (((obj instanceof $c_s_util_control_ControlThrowable) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.control.ControlThrowable"))
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_control_ControlThrowable)))
}
function $asArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (($isArrayOf_s_util_control_ControlThrowable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth))
}
class $c_Lcom_kos_pathtrain_heroes_FireBall extends $c_Lcom_kos_pathtrain_heroes_Ball {
  constructor() {
    super();
    this.Lcom_kos_pathtrain_heroes_FireBall__f_fired = false;
    $ct_Lcom_kos_pathtrain_heroes_Ball__(this);
    this.Lcom_kos_pathtrain_heroes_FireBall__f_fired = false
  };
  fire__D__D__V(vx, vy) {
    this.Lcom_kos_pathtrain_heroes_Hero__f_vx = vx;
    this.Lcom_kos_pathtrain_heroes_Hero__f_vy = vy;
    this.Lcom_kos_pathtrain_heroes_FireBall__f_fired = true
  };
}
const $d_Lcom_kos_pathtrain_heroes_FireBall = new $TypeData().initClass({
  Lcom_kos_pathtrain_heroes_FireBall: 0
}, false, "com.kos.pathtrain.heroes.FireBall", {
  Lcom_kos_pathtrain_heroes_FireBall: 1,
  Lcom_kos_pathtrain_heroes_Ball: 1,
  Lcom_kos_pathtrain_heroes_Hero: 1,
  O: 1,
  Lcom_kos_pathtrain_heroes_HeroNode: 1
});
$c_Lcom_kos_pathtrain_heroes_FireBall.prototype.$classData = $d_Lcom_kos_pathtrain_heroes_FireBall;
const $f_Lcom_kos_wormpad_game_GameState__pause__V = (function($thiz) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_pause_ = true;
  $thiz.Lcom_kos_pathtrain_MainApp$__f_listener_.onPause__Z__V($thiz.Lcom_kos_pathtrain_MainApp$__f_pause_)
});
const $f_Lcom_kos_wormpad_game_GameState__resume__V = (function($thiz) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_pause_ = false;
  $thiz.Lcom_kos_pathtrain_MainApp$__f_listener_.onPause__Z__V($thiz.Lcom_kos_pathtrain_MainApp$__f_pause_)
});
const $f_Lcom_kos_wormpad_game_GameState__togglePause__V = (function($thiz) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_pause_ = (!$thiz.Lcom_kos_pathtrain_MainApp$__f_pause_);
  $thiz.Lcom_kos_pathtrain_MainApp$__f_listener_.onPause__Z__V($thiz.Lcom_kos_pathtrain_MainApp$__f_pause_)
});
const $f_Lcom_kos_wormpad_game_GameState__$init$__V = (function($thiz) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_pause_ = false;
  $thiz.Lcom_kos_pathtrain_MainApp$__f_isGameOver_ = false;
  $thiz.Lcom_kos_pathtrain_MainApp$__f_listener_ = new $c_Lcom_kos_wormpad_game_GameState$$anon$1($thiz);
  $thiz.Lcom_kos_pathtrain_MainApp$__f_jslistener = new $c_Lcom_kos_wormpad_game_GameListener()
});
class $c_Ljava_io_OutputStream extends $c_O {
}
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return $uB($thiz)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = $uB($thiz);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = $uD($thiz);
  return ("" + d)
});
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = $uF($thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return $uI($thiz)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = $uI($thiz);
  return ("" + i)
});
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"))
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)))
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth))
}
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
class $c_jl_InterruptedException {
}
function $as_jl_InterruptedException(obj) {
  return (((obj instanceof $c_jl_InterruptedException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.InterruptedException"))
}
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_InterruptedException)))
}
function $asArrayOf_jl_InterruptedException(obj, depth) {
  return (($isArrayOf_jl_InterruptedException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth))
}
class $c_jl_LinkageError {
}
function $as_jl_LinkageError(obj) {
  return (((obj instanceof $c_jl_LinkageError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.LinkageError"))
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_LinkageError)))
}
function $asArrayOf_jl_LinkageError(obj, depth) {
  return (($isArrayOf_jl_LinkageError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth))
}
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
const $ct_jl_RuntimeException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return $uS($thiz)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = $uS($thiz);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__getChars__I__I__AC__I__V = (function($thiz, srcBegin, srcEnd, dst, dstBegin) {
  if (((((srcEnd > $uI($thiz.length)) || (srcBegin < 0)) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw $ct_jl_StringIndexOutOfBoundsException__T__(new $c_jl_StringIndexOutOfBoundsException(), "Index out of Bound")
  };
  const offset = ((dstBegin - srcBegin) | 0);
  let i = srcBegin;
  while ((i < srcEnd)) {
    const $$x1 = i;
    const index = i;
    dst.set((($$x1 + offset) | 0), (65535 & $uI($thiz.charCodeAt(index))));
    i = ((1 + i) | 0)
  }
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__T__ = (function($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  append__AC__jl_StringBuilder(str) {
    const this$1 = $m_jl_String$();
    const count = str.u.length;
    const str$1 = this$1.new__AC__I__I__T(str, 0, count);
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
    return this
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_ThreadDeath {
}
function $as_jl_ThreadDeath(obj) {
  return (((obj instanceof $c_jl_ThreadDeath) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ThreadDeath"))
}
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ThreadDeath)))
}
function $asArrayOf_jl_ThreadDeath(obj, depth) {
  return (($isArrayOf_jl_ThreadDeath(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth))
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_jl_VirtualMachineError(obj) {
  return (((obj instanceof $c_jl_VirtualMachineError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.VirtualMachineError"))
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_VirtualMachineError)))
}
function $asArrayOf_jl_VirtualMachineError(obj, depth) {
  return (($isArrayOf_jl_VirtualMachineError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth))
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_ju_concurrent_ExecutionException = new $TypeData().initClass({
  ju_concurrent_ExecutionException: 0
}, false, "java.util.concurrent.ExecutionException", {
  ju_concurrent_ExecutionException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_ExecutionException.prototype.$classData = $d_ju_concurrent_ExecutionException;
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
class $c_s_$eq$colon$eq extends $c_s_$less$colon$less {
}
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  take__I__sc_Iterator(n) {
    return $f_sc_Iterator__take__I__sc_Iterator(this, n)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
}
class $c_sc_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
  };
}
const $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
let $n_sc_Iterable$ = (void 0);
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
class $c_sc_Map$ extends $c_sc_MapFactory$Delegate {
  constructor() {
    super();
    this.sc_Map$__f_scala$collection$Map$$DefaultSentinel = null;
    $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
    $n_sc_Map$ = this;
    this.sc_Map$__f_scala$collection$Map$$DefaultSentinel = $ct_O__(new $c_O())
  };
}
const $d_sc_Map$ = new $TypeData().initClass({
  sc_Map$: 0
}, false, "scala.collection.Map$", {
  sc_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Map$.prototype.$classData = $d_sc_Map$;
let $n_sc_Map$ = (void 0);
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$()
  };
  return $n_sc_Map$
}
const $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ = (function($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_SeqFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_SeqFactory$Delegate__f_delegate = null
  };
  apply__sci_Seq__sc_SeqOps(elems) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.apply__sci_Seq__O(elems))
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it))
  };
  newBuilder__scm_Builder() {
    return this.sc_SeqFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_SeqOps(source)
  };
  apply__sci_Seq__O(elems) {
    return this.apply__sci_Seq__sc_SeqOps(elems)
  };
}
const $f_sc_SeqOps__appended__O__O = (function($thiz, elem) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O($ct_sc_View$Appended__sc_IterableOps__O__(new $c_sc_View$Appended(), $thiz, elem))
});
const $f_sc_SeqOps__isDefinedAt__I__Z = (function($thiz, idx) {
  return ((idx >= 0) && (idx < $thiz.length__I()))
});
const $f_sc_SeqOps__indexOf__O__I__I = (function($thiz, elem, from) {
  return $thiz.indexWhere__F1__I__I(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$1$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(elem$1, x$1$2)))($thiz, elem)), from)
});
const $f_sc_SeqOps__contains__O__Z = (function($thiz, elem) {
  return $thiz.exists__F1__Z(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$3$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(x$3$2, elem$1)))($thiz, elem)))
});
const $f_sc_SeqOps__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
const $f_sc_SeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
});
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
const $f_sc_StrictOptimizedIterableOps__map__F1__O = (function($thiz, f) {
  const b = $thiz.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder();
  const it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const elem = f.apply__O__O(it.next__O());
    b.addOne__O__scm_Growable(elem)
  };
  return b.result__O()
});
class $c_sci_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Iterable(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = $as_sci_Iterable(it);
      return x2
    } else {
      return $as_sci_Iterable($c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O.call(this, it))
    }
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Iterable(it)
  };
}
const $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
let $n_sci_Iterable$ = (void 0);
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
class $c_sci_LazyList$ extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$__f__empty = null;
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = null;
    $n_sci_LazyList$ = this;
    const state = new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this));
    this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = new $c_sjsr_AnonFunction1(((this$2) => ((x$10$2) => $m_sr_Statics$PFMarker$()))(this))
  };
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_LazyList(elems)
  };
  scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(ll, n) {
    const restRef = new $c_sr_ObjectRef(ll);
    const iRef = new $c_sr_IntRef(n);
    const state = new $c_sjsr_AnonFunction0(((this$3, restRef$1, iRef$1) => (() => {
      let rest = $as_sci_LazyList(restRef$1.sr_ObjectRef__f_elem);
      let i = iRef$1.sr_IntRef__f_elem;
      while (((i > 0) && (!rest.isEmpty__Z()))) {
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest;
        i = (((-1) + i) | 0);
        iRef$1.sr_IntRef__f_elem = i
      };
      return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
    }))(this, restRef, iRef));
    return new $c_sci_LazyList(state)
  };
  from__sc_IterableOnce__sci_LazyList(coll) {
    if ((coll instanceof $c_sci_LazyList)) {
      const x2 = $as_sci_LazyList(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return this.sci_LazyList$__f__empty
    } else {
      const state = new $c_sjsr_AnonFunction0(((this$1, coll$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll$1.iterator__sc_Iterator())))(this, coll));
      return new $c_sci_LazyList(state)
    }
  };
  scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1, suffix$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it$1, suffix$1)))(this, it, suffix));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $as_sci_LazyList$State(suffix.apply__O())
    }
  };
  scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it$1)))(this, it));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_LazyList$LazyBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_LazyList(source)
  };
}
const $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
let $n_sci_LazyList$ = (void 0);
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
class $c_sci_Stream$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_Stream(elems)
  };
  from__sc_IterableOnce__sci_Stream(coll) {
    if ((coll instanceof $c_sci_Stream)) {
      const x2 = $as_sci_Stream(coll);
      return x2
    } else {
      return this.fromIterator__sc_Iterator__sci_Stream(coll.iterator__sc_Iterator())
    }
  };
  fromIterator__sc_Iterator__sci_Stream(it) {
    return (it.hasNext__Z() ? new $c_sci_Stream$Cons(it.next__O(), new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_Stream$().fromIterator__sc_Iterator__sci_Stream(it$1)))(this, it))) : $m_sci_Stream$Empty$())
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ArrayBuffer$$anon$1();
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((array$2) => {
      const array = $as_scm_ArrayBuffer(array$2);
      return $m_sci_Stream$().from__sc_IterableOnce__sci_Stream(array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Stream(source)
  };
}
const $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
let $n_sci_Stream$ = (void 0);
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
class $c_sci_WrappedString$ extends $c_O {
  constructor() {
    super();
    this.sci_WrappedString$__f_empty = null;
    $n_sci_WrappedString$ = this;
    this.sci_WrappedString$__f_empty = new $c_sci_WrappedString("")
  };
  fromSpecific__sc_IterableOnce__sci_WrappedString(it) {
    const b = this.newBuilder__scm_Builder();
    const s = it.knownSize__I();
    if ((s >= 0)) {
      b.sizeHint__I__V(s)
    };
    b.addAll__sc_IterableOnce__scm_Growable(it);
    return $as_sci_WrappedString(b.result__O())
  };
  newBuilder__scm_Builder() {
    const this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_T(x$2);
      return new $c_sci_WrappedString(x)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$2, f)
  };
}
const $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
let $n_sci_WrappedString$ = (void 0);
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
class $c_scm_Builder$$anon$1 extends $c_O {
  constructor(outer, f$1) {
    super();
    this.scm_Builder$$anon$1__f_$outer = null;
    this.scm_Builder$$anon$1__f_f$1 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scm_Builder$$anon$1__f_$outer = outer
    };
    this.scm_Builder$$anon$1__f_f$1 = f$1
  };
  addOne__O__scm_Builder$$anon$1(x) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addOne__O__scm_Growable(x);
    return this
  };
  addAll__sc_IterableOnce__scm_Builder$$anon$1(xs) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  sizeHint__I__V(size) {
    this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
  };
  result__O() {
    return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_Builder$$anon$1(elem)
  };
}
const $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
const $ct_scm_GrowableBuilder__scm_Growable__ = (function($thiz, elems) {
  $thiz.scm_GrowableBuilder__f_elems = elems;
  return $thiz
});
class $c_scm_GrowableBuilder extends $c_O {
  constructor() {
    super();
    this.scm_GrowableBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addOne__O__scm_GrowableBuilder(elem) {
    const this$1 = this.scm_GrowableBuilder__f_elems;
    this$1.addOne__O__scm_Growable(elem);
    return this
  };
  addAll__sc_IterableOnce__scm_GrowableBuilder(xs) {
    this.scm_GrowableBuilder__f_elems.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_GrowableBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_GrowableBuilder(elem)
  };
  result__O() {
    return this.scm_GrowableBuilder__f_elems
  };
}
const $d_scm_GrowableBuilder = new $TypeData().initClass({
  scm_GrowableBuilder: 0
}, false, "scala.collection.mutable.GrowableBuilder", {
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_GrowableBuilder.prototype.$classData = $d_scm_GrowableBuilder;
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$4 = new $TypeData().initClass({
  s_concurrent_Future$$anon$4: 0
}, false, "scala.concurrent.Future$$anon$4", {
  s_concurrent_Future$$anon$4: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$4.prototype.$classData = $d_s_concurrent_Future$$anon$4;
const $ct_sr_NonLocalReturnControl__O__O__ = (function($thiz, key, value) {
  $thiz.sr_NonLocalReturnControl__f_key = key;
  $thiz.sr_NonLocalReturnControl__f_value = value;
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, false, false);
  return $thiz
});
class $c_sr_NonLocalReturnControl extends $c_s_util_control_ControlThrowable {
  constructor() {
    super();
    this.sr_NonLocalReturnControl__f_key = null;
    this.sr_NonLocalReturnControl__f_value = null
  };
  fillInStackTrace__jl_Throwable() {
    return this
  };
}
function $as_sr_NonLocalReturnControl(obj) {
  return (((obj instanceof $c_sr_NonLocalReturnControl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.runtime.NonLocalReturnControl"))
}
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sr_NonLocalReturnControl)))
}
function $asArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (($isArrayOf_sr_NonLocalReturnControl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl;", depth))
}
class $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = null;
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = Promise.resolve((void 0))
  };
  execute__jl_Runnable__V(runnable) {
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise.then(((arg$outer, runnable$2) => ((arg1$2) => {
      const arg1 = $as_jl_Void(arg1$2);
      return arg$outer.scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(arg1, runnable$2)
    }))(this, runnable))
  };
  reportFailure__jl_Throwable__V(t) {
    t.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
  scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(x$1, runnable$2) {
    try {
      runnable$2.run__V()
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
      } else {
        throw e
      }
    }
  };
}
const $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", {
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
class $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext extends $c_O {
  execute__jl_Runnable__V(runnable) {
    setTimeout($m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $c_sjsr_AnonFunction0(((this$1, runnable$1) => (() => {
      try {
        runnable$1.run__V()
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 !== null)) {
          e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
        } else {
          throw e
        }
      }
    }))(this, runnable))), 0)
  };
  reportFailure__jl_Throwable__V(t) {
    t.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
}
const $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", {
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
class $c_s_util_Try extends $c_O {
}
function $as_s_util_Try(obj) {
  return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"))
}
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Try)))
}
function $asArrayOf_s_util_Try(obj, depth) {
  return (($isArrayOf_s_util_Try(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Try;", depth))
}
const $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__ = (function($thiz, out) {
  $thiz.Ljava_io_FilterOutputStream__f_out = out;
  return $thiz
});
class $c_Ljava_io_FilterOutputStream extends $c_Ljava_io_OutputStream {
  constructor() {
    super();
    this.Ljava_io_FilterOutputStream__f_out = null
  };
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_IllegalArgumentException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_JSConsoleBasedPrintStream$DummyOutputStream extends $c_Ljava_io_OutputStream {
}
const $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
const $ct_jl_NullPointerException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_NullPointerException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_SecurityException {
}
function $as_jl_SecurityException(obj) {
  return (((obj instanceof $c_jl_SecurityException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_StackOverflowError = new $TypeData().initClass({
  jl_StackOverflowError: 0
}, false, "java.lang.StackOverflowError", {
  jl_StackOverflowError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackOverflowError.prototype.$classData = $d_jl_StackOverflowError;
const $ct_jl_UnsupportedOperationException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
const $ct_jl_UnsupportedOperationException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
const $ct_ju_NoSuchElementException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_ju_NoSuchElementException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    const message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
class $c_s_$less$colon$less$$anon$1 extends $c_s_$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
  toString__T() {
    return "generalized constraint"
  };
}
const $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    if (this.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      $m_sc_Iterator$();
      const a = this.get__O();
      return new $c_sc_Iterator$$anon$20(a)
    }
  };
}
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  _1__O() {
    return this.T2__f__1
  };
  _2__O() {
    return this.T2__f__2
  };
  toString__T() {
    return (((("(" + this._1__O()) + ",") + this._2__O()) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this._1__O(), Tuple2$1._1__O()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this._2__O(), Tuple2$1._2__O()))
    } else {
      return false
    }
  };
  _1$mcI$sp__I() {
    return $uI(this._1__O())
  };
  _2$mcI$sp__I() {
    return $uI(this._2__O())
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
const $f_sc_IndexedSeqOps__take__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Take($thiz, n))
});
const $f_sc_IndexedSeqOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Drop($thiz, n))
});
const $f_sc_IndexedSeqOps__map__F1__O = (function($thiz, f) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Map($thiz, f))
});
const $f_sc_IndexedSeqOps__slice__I__I__O = (function($thiz, from, until) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Slice($thiz, from, until))
});
const $f_sc_Iterable__toString__T = (function($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
});
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth))
}
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
class $c_sc_Iterator$$anon$9 extends $c_sc_AbstractIterator {
  constructor(outer, f$2) {
    super();
    this.sc_Iterator$$anon$9__f_$outer = null;
    this.sc_Iterator$$anon$9__f_f$2 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_Iterator$$anon$9__f_$outer = outer
    };
    this.sc_Iterator$$anon$9__f_f$2 = f$2
  };
  knownSize__I() {
    return this.sc_Iterator$$anon$9__f_$outer.knownSize__I()
  };
  hasNext__Z() {
    return this.sc_Iterator$$anon$9__f_$outer.hasNext__Z()
  };
  next__O() {
    return this.sc_Iterator$$anon$9__f_f$2.apply__O__O(this.sc_Iterator$$anon$9__f_$outer.next__O())
  };
}
const $d_sc_Iterator$$anon$9 = new $TypeData().initClass({
  sc_Iterator$$anon$9: 0
}, false, "scala.collection.Iterator$$anon$9", {
  sc_Iterator$$anon$9: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$9.prototype.$classData = $d_sc_Iterator$$anon$9;
const $p_sc_Iterator$ConcatIterator__merge$1__V = (function($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      const c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = c.sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = c.sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if ((c.sc_Iterator$ConcatIterator__f_tail !== null)) {
        if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
          $thiz.sc_Iterator$ConcatIterator__f_last = c.sc_Iterator$ConcatIterator__f_last
        };
        c.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = c.sc_Iterator$ConcatIterator__f_tail
      };
      continue
    };
    break
  }
});
const $p_sc_Iterator$ConcatIterator__advance$1__Z = (function($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $thiz.sc_Iterator$ConcatIterator__f_tail.headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $thiz.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail
      };
      $thiz.sc_Iterator$ConcatIterator__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail.sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $thiz.sc_Iterator$ConcatIterator__f_current.hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      }
    }
  }
});
class $c_sc_Iterator$ConcatIterator extends $c_sc_AbstractIterator {
  constructor(current) {
    super();
    this.sc_Iterator$ConcatIterator__f_current = null;
    this.sc_Iterator$ConcatIterator__f_tail = null;
    this.sc_Iterator$ConcatIterator__f_last = null;
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    this.sc_Iterator$ConcatIterator__f_current = current;
    this.sc_Iterator$ConcatIterator__f_tail = null;
    this.sc_Iterator$ConcatIterator__f_last = null;
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false
  };
  hasNext__Z() {
    if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
      return true
    } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
      if (this.sc_Iterator$ConcatIterator__f_current.hasNext__Z()) {
        this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      } else {
        return $p_sc_Iterator$ConcatIterator__advance$1__Z(this)
      }
    } else {
      return false
    }
  };
  next__O() {
    if (this.hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
      return this.sc_Iterator$ConcatIterator__f_current.next__O()
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  concat__F0__sc_Iterator(that) {
    const c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
    if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
      this.sc_Iterator$ConcatIterator__f_tail = c;
      this.sc_Iterator$ConcatIterator__f_last = c
    } else {
      this.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = c;
      this.sc_Iterator$ConcatIterator__f_last = c
    };
    if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
      this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    };
    return this
  };
}
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"))
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)))
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth))
}
const $d_sc_Iterator$ConcatIterator = new $TypeData().initClass({
  sc_Iterator$ConcatIterator: 0
}, false, "scala.collection.Iterator$ConcatIterator", {
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$ConcatIterator.prototype.$classData = $d_sc_Iterator$ConcatIterator;
const $p_sc_Iterator$SliceIterator__skip__V = (function($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($thiz.sc_Iterator$SliceIterator__f_underlying.hasNext__Z()) {
      $thiz.sc_Iterator$SliceIterator__f_underlying.next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
});
const $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I = (function($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    const that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
});
class $c_sc_Iterator$SliceIterator extends $c_sc_AbstractIterator {
  constructor(underlying, start, limit) {
    super();
    this.sc_Iterator$SliceIterator__f_underlying = null;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
    this.sc_Iterator$SliceIterator__f_dropping = 0;
    this.sc_Iterator$SliceIterator__f_underlying = underlying;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
    this.sc_Iterator$SliceIterator__f_dropping = start
  };
  knownSize__I() {
    const size = this.sc_Iterator$SliceIterator__f_underlying.knownSize__I();
    if ((size < 0)) {
      return (-1)
    } else {
      const that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
      const dropSize = ((that < 0) ? 0 : that);
      if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
        return dropSize
      } else {
        const x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
        return ((x < dropSize) ? x : dropSize)
      }
    }
  };
  hasNext__Z() {
    $p_sc_Iterator$SliceIterator__skip__V(this);
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && this.sc_Iterator$SliceIterator__f_underlying.hasNext__Z())
  };
  next__O() {
    $p_sc_Iterator$SliceIterator__skip__V(this);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
      this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
      return this.sc_Iterator$SliceIterator__f_underlying.next__O()
    } else {
      return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? this.sc_Iterator$SliceIterator__f_underlying.next__O() : $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    }
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    const lo = ((from > 0) ? from : 0);
    let rest;
    if ((until < 0)) {
      rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
    } else if ((until <= lo)) {
      rest = 0
    } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      rest = ((until - lo) | 0)
    } else {
      const x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
      const that = ((until - lo) | 0);
      rest = ((x < that) ? x : that)
    };
    if ((rest === 0)) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      this.sc_Iterator$SliceIterator__f_dropping = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
      this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
      return this
    }
  };
}
const $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
class $c_sc_LinearSeqIterator extends $c_sc_AbstractIterator {
  constructor(coll) {
    super();
    this.sc_LinearSeqIterator__f_coll = null;
    this.sc_LinearSeqIterator__f_these = null;
    this.sc_LinearSeqIterator__f_coll = coll;
    this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.sc_LinearSeqIterator__f_coll))(this)))
  };
  hasNext__Z() {
    const this$1 = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
    return (!this$1.isEmpty__Z())
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const cur = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
      const result = cur.head__O();
      this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => $as_sc_LinearSeq(cur$1.tail__O())))(this, cur)));
      return result
    }
  };
}
const $d_sc_LinearSeqIterator = new $TypeData().initClass({
  sc_LinearSeqIterator: 0
}, false, "scala.collection.LinearSeqIterator", {
  sc_LinearSeqIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_LinearSeqIterator.prototype.$classData = $d_sc_LinearSeqIterator;
const $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sc_LinearSeq(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sc_LinearSeq(a.tail__O());
        const temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
const $f_sc_LinearSeqOps__iterator__sc_Iterator = (function($thiz) {
  return (($thiz.knownSize__I() === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_LinearSeqIterator($thiz))
});
const $f_sc_LinearSeqOps__length__I = (function($thiz) {
  let these = $as_sc_LinearSeq($thiz);
  let len = 0;
  while (true) {
    const this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return len
});
const $f_sc_LinearSeqOps__lengthCompare__I__I = (function($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
});
const $f_sc_LinearSeqOps__isDefinedAt__I__Z = (function($thiz, x) {
  return ((x >= 0) && ($thiz.lengthCompare__I__I(x) > 0))
});
const $f_sc_LinearSeqOps__apply__I__O = (function($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
});
const $f_sc_LinearSeqOps__exists__F1__Z = (function($thiz, p) {
  let these = $as_sc_LinearSeq($thiz);
  while ((!these.isEmpty__Z())) {
    if ($uZ(p.apply__O__O(these.head__O()))) {
      return true
    };
    these = $as_sc_LinearSeq(these.tail__O())
  };
  return false
});
const $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
});
const $f_sc_LinearSeqOps__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  let these = $as_sc_LinearSeq($thiz.drop__I__O(from));
  while (true) {
    const this$3 = these;
    if ((!this$3.isEmpty__Z())) {
      if ($uZ(p.apply__O__O(these.head__O()))) {
        return i
      };
      i = ((1 + i) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return (-1)
});
function $is_sc_LinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOps)))
}
function $as_sc_LinearSeqOps(obj) {
  return (($is_sc_LinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOps"))
}
function $isArrayOf_sc_LinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOps)))
}
function $asArrayOf_sc_LinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOps;", depth))
}
class $c_sc_StrictOptimizedLinearSeqOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
  };
  hasNext__Z() {
    return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
  };
  next__O() {
    const r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_Iterable(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O());
    return r
  };
}
const $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
const $p_sci_HashMapBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashMapBuilder__f_aliased !== null)
});
const $p_sci_HashMapBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.set(ix, elem);
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V = (function($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const idx = (dataIx << 1);
  const src = bm.sci_BitmapIndexedMapNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((2 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, idx);
  dst.set(idx, key);
  dst.set(((1 + idx) | 0), value);
  const destPos = ((2 + idx) | 0);
  const length = ((src.u.length - idx) | 0);
  $systemArraycopy(src, idx, dst, destPos, length);
  const dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedMapNode__f_dataMap = (bm.sci_BitmapIndexedMapNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedMapNode__f_content = dst;
  bm.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedMapNode__f_size = ((1 + bm.sci_BitmapIndexedMapNode__f_size) | 0);
  bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashMapBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashMapBuilder__f_aliased = null
});
const $p_sci_HashMapBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.copy__sci_BitmapIndexedMapNode()
});
class $c_sci_HashMapBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashMapBuilder__f_aliased = null;
    this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = null;
    this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_MapNode__O__O__I__I__I__V(mapNode, key, value, originalHash, keyHash, shift) {
    if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
      const x2 = $as_sci_BitmapIndexedMapNode(mapNode);
      const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        const key0 = x2.getKey__I__O(index);
        const key0UnimprovedHash = x2.getHash__I__I(index);
        if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
          x2.sci_BitmapIndexedMapNode__f_content.set(((1 + (index << 1)) | 0), value)
        } else {
          const value0 = x2.getValue__I__O(index);
          const key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_MapNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHash = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_MapNode__O__O__I__I__I__V(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedMapNode__f_size = ((x2.sci_BitmapIndexedMapNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHash) | 0)) | 0)
      } else {
        $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, x2, bitpos, key, originalHash, keyHash, value)
      }
    } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
      const x3 = $as_sci_HashCollisionMapNode(mapNode);
      const index$3 = x3.indexOf__O__I(key);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionMapNode__f_content = x3.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector(new $c_T2(key, value))
      } else {
        x3.sci_HashCollisionMapNode__f_content = x3.sci_HashCollisionMapNode__f_content.updated__I__O__sci_Vector(index$3, new $c_T2(key, value))
      }
    } else {
      throw new $c_s_MatchError(mapNode)
    }
  };
  result__sci_HashMap() {
    if ((this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.sci_BitmapIndexedMapNode__f_size === 0)) {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap
    } else if ((this.sci_HashMapBuilder__f_aliased !== null)) {
      return this.sci_HashMapBuilder__f_aliased
    } else {
      this.sci_HashMapBuilder__f_aliased = new $c_sci_HashMap(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode);
      return this.sci_HashMapBuilder__f_aliased
    }
  };
  addOne__T2__sci_HashMapBuilder(elem) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    const x = elem._1__O();
    const h = $m_sr_Statics$().anyHash__O__I(x);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, elem._1__O(), elem._2__O(), h, im, 0);
    return this
  };
  addOne__O__O__sci_HashMapBuilder(key, value) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    const originalHash = $m_sr_Statics$().anyHash__O__I(key);
    this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, key, value, originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashMapBuilder(xs) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(xs);
      new $c_sci_HashMapBuilder$$anon$1(this, x2)
    } else if ((xs instanceof $c_scm_HashMap)) {
      const x3 = $as_scm_HashMap(xs);
      const iter = x3.nodeIterator__sc_Iterator();
      while (iter.hasNext__Z()) {
        const next = $as_scm_HashMap$Node(iter.next__O());
        const originalHash = x3.unimproveHash__I__I(next.hash__I());
        const hash = $m_sc_Hashing$().improve__I__I(originalHash);
        this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, next.key__O(), next.value__O(), originalHash, hash, 0)
      }
    } else if ($is_sci_Map(xs)) {
      const x4 = $as_sci_Map(xs);
      x4.foreachEntry__F2__V(new $c_sjsr_AnonFunction2(((this$1) => ((key$2, value$2) => this$1.addOne__O__O__sci_HashMapBuilder(key$2, value$2)))(this)))
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__T2__sci_HashMapBuilder($as_T2(it.next__O()))
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashMapBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__T2__sci_HashMapBuilder($as_T2(elem))
  };
  result__O() {
    return this.result__sci_HashMap()
  };
}
const $d_sci_HashMapBuilder = new $TypeData().initClass({
  sci_HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMapBuilder", {
  sci_HashMapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashMapBuilder.prototype.$classData = $d_sci_HashMapBuilder;
const $p_sci_HashSetBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashSetBuilder__f_aliased !== null)
});
const $p_sci_HashSetBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.set(ix, elem);
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V = (function($thiz, bm, bitpos, key, originalHash, keyHash) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const src = bm.sci_BitmapIndexedSetNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, dataIx);
  dst.set(dataIx, key);
  const destPos = ((1 + dataIx) | 0);
  const length = ((src.u.length - dataIx) | 0);
  $systemArraycopy(src, dataIx, dst, destPos, length);
  const dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedSetNode__f_dataMap = (bm.sci_BitmapIndexedSetNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedSetNode__f_content = dst;
  bm.sci_BitmapIndexedSetNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedSetNode__f_size = ((1 + bm.sci_BitmapIndexedSetNode__f_size) | 0);
  bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V = (function($thiz, bm, bitpos, elem) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  bm.sci_BitmapIndexedSetNode__f_content.set(dataIx, elem)
});
const $p_sci_HashSetBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashSetBuilder__f_aliased = null
});
const $p_sci_HashSetBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.copy__sci_BitmapIndexedSetNode()
});
class $c_sci_HashSetBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashSetBuilder__f_aliased = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_SetNode__O__I__I__I__V(setNode, element, originalHash, elementHash, shift) {
    if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = $as_sci_BitmapIndexedSetNode(setNode);
      const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
        const element0 = x2.getPayload__I__O(index);
        const element0UnimprovedHash = x2.getHash__I__I(index);
        if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, x2, bitpos, element0)
        } else {
          const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_SetNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHashCode = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_SetNode__O__I__I__I__V(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedSetNode__f_size = ((x2.sci_BitmapIndexedSetNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHashCode) | 0)) | 0)
      } else {
        $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, x2, bitpos, element, originalHash, elementHash)
      }
    } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
      const x3 = $as_sci_HashCollisionSetNode(setNode);
      const this$1 = x3.sci_HashCollisionSetNode__f_content;
      const index$3 = $f_sc_SeqOps__indexOf__O__I__I(this$1, element, 0);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionSetNode__f_content = x3.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)
      } else {
        x3.sci_HashCollisionSetNode__f_content = x3.sci_HashCollisionSetNode__f_content.updated__I__O__sci_Vector(index$3, element)
      }
    } else {
      throw new $c_s_MatchError(setNode)
    }
  };
  result__sci_HashSet() {
    if ((this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.sci_BitmapIndexedSetNode__f_size === 0)) {
      const this$1 = $m_sci_HashSet$();
      return this$1.sci_HashSet$__f_EmptySet
    } else if ((this.sci_HashSetBuilder__f_aliased !== null)) {
      return this.sci_HashSetBuilder__f_aliased
    } else {
      this.sci_HashSetBuilder__f_aliased = new $c_sci_HashSet(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode);
      return this.sci_HashSetBuilder__f_aliased
    }
  };
  addOne__O__sci_HashSetBuilder(elem) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    const h = $m_sr_Statics$().anyHash__O__I(elem);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_SetNode__O__I__I__I__V(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, elem, h, im, 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashSetBuilder(xs) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(xs);
      new $c_sci_HashSetBuilder$$anon$1(this, x2)
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__O__sci_HashSetBuilder(it.next__O())
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashSetBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_HashSetBuilder(elem)
  };
  result__O() {
    return this.result__sci_HashSet()
  };
}
const $d_sci_HashSetBuilder = new $TypeData().initClass({
  sci_HashSetBuilder: 0
}, false, "scala.collection.immutable.HashSetBuilder", {
  sci_HashSetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashSetBuilder.prototype.$classData = $d_sci_HashSetBuilder;
class $c_sci_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
  };
  from__sc_IterableOnce__sci_IndexedSeq(it) {
    if ($is_sci_IndexedSeq(it)) {
      const x2 = $as_sci_IndexedSeq(it);
      return x2
    } else {
      return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(it)
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_LazyList$LazyBuilder extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$LazyBuilder__f_next = null;
    this.sci_LazyList$LazyBuilder__f_list = null;
    this.clear__V()
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  clear__V() {
    const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    $m_sci_LazyList$();
    const state = new $c_sjsr_AnonFunction0(((this$1, deferred$1) => (() => deferred$1.eval__sci_LazyList$State()))(this, deferred));
    this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
    this.sci_LazyList$LazyBuilder__f_next = deferred
  };
  result__sci_LazyList() {
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this)));
    return this.sci_LazyList$LazyBuilder__f_list
  };
  addOne__O__sci_LazyList$LazyBuilder(elem) {
    const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1, elem$1, deferred$1) => (() => {
      $m_sci_LazyList$();
      $m_sci_LazyList$();
      const state = new $c_sjsr_AnonFunction0(((this$2, deferred$2) => (() => deferred$2.eval__sci_LazyList$State()))(this$1, deferred$1));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(elem$1, tl)
    }))(this, elem, deferred)));
    this.sci_LazyList$LazyBuilder__f_next = deferred;
    return this
  };
  addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs) {
    if ((xs.knownSize__I() !== 0)) {
      const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
      this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1, xs$1, deferred$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(xs$1.iterator__sc_Iterator(), new $c_sjsr_AnonFunction0(((this$2, deferred$3) => (() => deferred$3.eval__sci_LazyList$State()))(this$1, deferred$1)))))(this, xs, deferred)));
      this.sci_LazyList$LazyBuilder__f_next = deferred
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_LazyList$LazyBuilder(elem)
  };
  result__O() {
    return this.result__sci_LazyList()
  };
}
const $d_sci_LazyList$LazyBuilder = new $TypeData().initClass({
  sci_LazyList$LazyBuilder: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder", {
  sci_LazyList$LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_LazyList$LazyBuilder.prototype.$classData = $d_sci_LazyList$LazyBuilder;
class $c_sci_LazyList$LazyIterator extends $c_sc_AbstractIterator {
  constructor(lazyList) {
    super();
    this.sci_LazyList$LazyIterator__f_lazyList = null;
    this.sci_LazyList$LazyIterator__f_lazyList = lazyList
  };
  hasNext__Z() {
    return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
  };
  next__O() {
    if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
      const res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      const this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
      this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      return res
    }
  };
}
const $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
class $c_sci_List$ extends $c_O {
  constructor() {
    super();
    this.sci_List$__f_scala$collection$immutable$List$$TupleOfNil = null;
    this.sci_List$__f_partialNotApplied = null;
    $n_sci_List$ = this;
    this.sci_List$__f_scala$collection$immutable$List$$TupleOfNil = new $c_T2($m_sci_Nil$(), $m_sci_Nil$());
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  apply__sci_Seq__O(elems) {
    return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
  from__sc_IterableOnce__O(source) {
    return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
const $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map2$Map2Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map2$Map2Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map2$Map2Iterator__f_i = 0;
    this.sci_Map$Map2$Map2Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map2$Map2Iterator__f_i < 2)
  };
  next__O() {
    const x1 = this.sci_Map$Map2$Map2Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        const k = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1;
        const v = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
        result = new $c_T2(k, v);
        break
      }
      case 1: {
        const k$1 = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2;
        const v$1 = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
        result = new $c_T2(k$1, v$1);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map2$Map2Iterator__f_i = ((1 + this.sci_Map$Map2$Map2Iterator__f_i) | 0);
    return result
  };
}
const $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map3$Map3Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map3$Map3Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map3$Map3Iterator__f_i = 0;
    this.sci_Map$Map3$Map3Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map3$Map3Iterator__f_i < 3)
  };
  next__O() {
    const x1 = this.sci_Map$Map3$Map3Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        const k = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1;
        const v = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
        result = new $c_T2(k, v);
        break
      }
      case 1: {
        const k$1 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2;
        const v$1 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
        result = new $c_T2(k$1, v$1);
        break
      }
      case 2: {
        const k$2 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3;
        const v$2 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
        result = new $c_T2(k$2, v$2);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map3$Map3Iterator__f_i = ((1 + this.sci_Map$Map3$Map3Iterator__f_i) | 0);
    return result
  };
}
const $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map4$Map4Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map4$Map4Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map4$Map4Iterator__f_i = 0;
    this.sci_Map$Map4$Map4Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map4$Map4Iterator__f_i < 4)
  };
  next__O() {
    const x1 = this.sci_Map$Map4$Map4Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        const k = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1;
        const v = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
        result = new $c_T2(k, v);
        break
      }
      case 1: {
        const k$1 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2;
        const v$1 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
        result = new $c_T2(k$1, v$1);
        break
      }
      case 2: {
        const k$2 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3;
        const v$2 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
        result = new $c_T2(k$2, v$2);
        break
      }
      case 3: {
        const k$3 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4;
        const v$3 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
        result = new $c_T2(k$3, v$3);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map4$Map4Iterator__f_i = ((1 + this.sci_Map$Map4$Map4Iterator__f_i) | 0);
    return result
  };
}
class $c_sci_MapBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_MapBuilderImpl__f_elems = null;
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
    this.sci_MapBuilderImpl__f_hashMapBuilder = null;
    this.sci_MapBuilderImpl__f_elems = $m_sci_Map$EmptyMap$();
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Map() {
    return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? this.sci_MapBuilderImpl__f_hashMapBuilder.result__sci_HashMap() : this.sci_MapBuilderImpl__f_elems)
  };
  addOne__O__O__sci_MapBuilderImpl(key, value) {
    if (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder) {
      this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
    } else if ((this.sci_MapBuilderImpl__f_elems.size__I() < 4)) {
      this.sci_MapBuilderImpl__f_elems = $as_sci_Map(this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value))
    } else if (this.sci_MapBuilderImpl__f_elems.contains__O__Z(key)) {
      this.sci_MapBuilderImpl__f_elems = $as_sci_Map(this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value))
    } else {
      this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = true;
      if ((this.sci_MapBuilderImpl__f_hashMapBuilder === null)) {
        this.sci_MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMapBuilder()
      };
      $as_sci_Map$Map4(this.sci_MapBuilderImpl__f_elems).buildTo__sci_HashMapBuilder__sci_HashMapBuilder(this.sci_MapBuilderImpl__f_hashMapBuilder);
      this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_MapBuilderImpl(xs) {
    return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? (this.sci_MapBuilderImpl__f_hashMapBuilder.addAll__sc_IterableOnce__sci_HashMapBuilder(xs), this) : $as_sci_MapBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_MapBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    const elem$1 = $as_T2(elem);
    return this.addOne__O__O__sci_MapBuilderImpl(elem$1._1__O(), elem$1._2__O())
  };
  result__O() {
    return this.result__sci_Map()
  };
}
function $as_sci_MapBuilderImpl(obj) {
  return (((obj instanceof $c_sci_MapBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapBuilderImpl"))
}
function $isArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapBuilderImpl)))
}
function $asArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_MapBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapBuilderImpl;", depth))
}
const $d_sci_MapBuilderImpl = new $TypeData().initClass({
  sci_MapBuilderImpl: 0
}, false, "scala.collection.immutable.MapBuilderImpl", {
  sci_MapBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_MapBuilderImpl.prototype.$classData = $d_sci_MapBuilderImpl;
class $c_sci_MapKeyValueTupleHashIterator extends $c_sci_ChampBaseReverseIterator {
  constructor(rootNode) {
    super();
    this.sci_MapKeyValueTupleHashIterator__f_hash = 0;
    this.sci_MapKeyValueTupleHashIterator__f_value = null;
    $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
    this.sci_MapKeyValueTupleHashIterator__f_hash = 0
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  take__I__sc_Iterator(n) {
    return $f_sc_Iterator__take__I__sc_Iterator(this, n)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    const $$x2 = $m_s_util_hashing_MurmurHash3$();
    const $$x1 = this.sci_MapKeyValueTupleHashIterator__f_hash;
    const x = this.sci_MapKeyValueTupleHashIterator__f_value;
    return $$x2.tuple2Hash__I__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x), (-889275714))
  };
  next__sci_MapKeyValueTupleHashIterator() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_MapKeyValueTupleHashIterator__f_hash = this.sci_ChampBaseReverseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
    this.sci_MapKeyValueTupleHashIterator__f_value = $as_sci_MapNode(this.sci_ChampBaseReverseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
    this.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + this.sci_ChampBaseReverseIterator__f_currentValueCursor) | 0);
    return this
  };
  next__O() {
    return this.next__sci_MapKeyValueTupleHashIterator()
  };
}
const $d_sci_MapKeyValueTupleHashIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleHashIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleHashIterator", {
  sci_MapKeyValueTupleHashIterator: 1,
  sci_ChampBaseReverseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapKeyValueTupleHashIterator.prototype.$classData = $d_sci_MapKeyValueTupleHashIterator;
class $c_sci_MapKeyValueTupleIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  take__I__sc_Iterator(n) {
    return $f_sc_Iterator__take__I__sc_Iterator(this, n)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  next__T2() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__T2(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
  next__O() {
    return this.next__T2()
  };
}
const $d_sci_MapKeyValueTupleIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleIterator", {
  sci_MapKeyValueTupleIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapKeyValueTupleIterator.prototype.$classData = $d_sci_MapKeyValueTupleIterator;
const $p_sci_NewVectorIterator__advanceSlice__V = (function($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  let slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while ((slice.u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  const count = $thiz.sci_NewVectorIterator__f_sliceCount;
  const idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  const c = ((count / 2) | 0);
  const a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  const x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + $imul(slice.u.length, (1 << $imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << $imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
});
const $p_sci_NewVectorIterator__advance__V = (function($thiz) {
  const pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    const io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    const xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  const a = $thiz.sci_NewVectorIterator__f_a1.u.length;
  const b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
});
const $p_sci_NewVectorIterator__advanceA__I__I__V = (function($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  }
});
const $p_sci_NewVectorIterator__setA__I__I__V = (function($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  }
});
class $c_sci_NewVectorIterator extends $c_O {
  constructor(v, totalLength, sliceCount) {
    super();
    this.sci_NewVectorIterator__f_v = null;
    this.sci_NewVectorIterator__f_totalLength = 0;
    this.sci_NewVectorIterator__f_sliceCount = 0;
    this.sci_NewVectorIterator__f_a1 = null;
    this.sci_NewVectorIterator__f_a2 = null;
    this.sci_NewVectorIterator__f_a3 = null;
    this.sci_NewVectorIterator__f_a4 = null;
    this.sci_NewVectorIterator__f_a5 = null;
    this.sci_NewVectorIterator__f_a6 = null;
    this.sci_NewVectorIterator__f_a1len = 0;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
    this.sci_NewVectorIterator__f_oldPos = 0;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
    this.sci_NewVectorIterator__f_sliceIdx = 0;
    this.sci_NewVectorIterator__f_sliceDim = 0;
    this.sci_NewVectorIterator__f_sliceStart = 0;
    this.sci_NewVectorIterator__f_sliceEnd = 0;
    this.sci_NewVectorIterator__f_v = v;
    this.sci_NewVectorIterator__f_totalLength = totalLength;
    this.sci_NewVectorIterator__f_sliceCount = sliceCount;
    this.sci_NewVectorIterator__f_a1 = v.sci_Vector__f_prefix1;
    this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
    this.sci_NewVectorIterator__f_oldPos = 0;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
    this.sci_NewVectorIterator__f_sliceIdx = 0;
    this.sci_NewVectorIterator__f_sliceDim = 1;
    this.sci_NewVectorIterator__f_sliceStart = 0;
    this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
  };
  hasNext__Z() {
    return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
  };
  next__O() {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    const r = this.sci_NewVectorIterator__f_a1.get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    return r
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
      const a = ((oldpos + n) | 0);
      const b = this.sci_NewVectorIterator__f_totalLength;
      const newpos = ((a < b) ? a : b);
      if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
        this.sci_NewVectorIterator__f_a1len = 0
      } else {
        while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
          $p_sci_NewVectorIterator__advanceSlice__V(this)
        };
        const io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
        if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
          const xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
          $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
          this.sci_NewVectorIterator__f_oldPos = io
        };
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
        if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
          this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
        }
      }
    };
    return this
  };
  take__I__sc_Iterator(n) {
    if ((n < ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0))) {
      const trunc = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0) - ((n < 0) ? 0 : n)) | 0);
      this.sci_NewVectorIterator__f_totalLength = ((this.sci_NewVectorIterator__f_totalLength - trunc) | 0);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - trunc) | 0);
      if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 < this.sci_NewVectorIterator__f_a1len)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      };
      if ((this.sci_NewVectorIterator__f_totalLength < this.sci_NewVectorIterator__f_sliceEnd)) {
        this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_totalLength
      }
    };
    return this
  };
}
const $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
class $c_sci_Seq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Seq(it) {
    if ($is_sci_Seq(it)) {
      const x2 = $as_sci_Seq(it);
      return x2
    } else {
      return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Seq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_Seq(it)
  };
}
const $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
let $n_sci_Seq$ = (void 0);
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
class $c_sci_SetBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_SetBuilderImpl__f_elems = null;
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false;
    this.sci_SetBuilderImpl__f_hashSetBuilder = null;
    this.sci_SetBuilderImpl__f_elems = $m_sci_Set$EmptySet$();
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Set() {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? this.sci_SetBuilderImpl__f_hashSetBuilder.result__sci_HashSet() : this.sci_SetBuilderImpl__f_elems)
  };
  addOne__O__sci_SetBuilderImpl(elem) {
    if (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder) {
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    } else if ((this.sci_SetBuilderImpl__f_elems.size__I() < 4)) {
      const this$1 = this.sci_SetBuilderImpl__f_elems;
      this.sci_SetBuilderImpl__f_elems = $as_sci_Set(this$1.incl__O__sci_SetOps(elem))
    } else if ((!this.sci_SetBuilderImpl__f_elems.contains__O__Z(elem))) {
      this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = true;
      if ((this.sci_SetBuilderImpl__f_hashSetBuilder === null)) {
        this.sci_SetBuilderImpl__f_hashSetBuilder = new $c_sci_HashSetBuilder()
      };
      $as_sci_Set$Set4(this.sci_SetBuilderImpl__f_elems).buildTo__scm_Builder__scm_Builder(this.sci_SetBuilderImpl__f_hashSetBuilder);
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_SetBuilderImpl(xs) {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? (this.sci_SetBuilderImpl__f_hashSetBuilder.addAll__sc_IterableOnce__sci_HashSetBuilder(xs), this) : $as_sci_SetBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_SetBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_SetBuilderImpl(elem)
  };
  result__O() {
    return this.result__sci_Set()
  };
}
function $as_sci_SetBuilderImpl(obj) {
  return (((obj instanceof $c_sci_SetBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SetBuilderImpl"))
}
function $isArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetBuilderImpl)))
}
function $asArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_SetBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SetBuilderImpl;", depth))
}
const $d_sci_SetBuilderImpl = new $TypeData().initClass({
  sci_SetBuilderImpl: 0
}, false, "scala.collection.immutable.SetBuilderImpl", {
  sci_SetBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_SetBuilderImpl.prototype.$classData = $d_sci_SetBuilderImpl;
class $c_sci_SetHashIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    this.sci_SetHashIterator__f_hash = 0;
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
    this.sci_SetHashIterator__f_hash = 0
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  take__I__sc_Iterator(n) {
    return $f_sc_Iterator__take__I__sc_Iterator(this, n)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    return this.sci_SetHashIterator__f_hash
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_SetHashIterator__f_hash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return this
  };
}
const $d_sci_SetHashIterator = new $TypeData().initClass({
  sci_SetHashIterator: 0
}, false, "scala.collection.immutable.SetHashIterator", {
  sci_SetHashIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetHashIterator.prototype.$classData = $d_sci_SetHashIterator;
class $c_sci_SetIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  take__I__sc_Iterator(n) {
    return $f_sc_Iterator__take__I__sc_Iterator(this, n)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = $as_sci_SetNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
}
const $d_sci_SetIterator = new $TypeData().initClass({
  sci_SetIterator: 0
}, false, "scala.collection.immutable.SetIterator", {
  sci_SetIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetIterator.prototype.$classData = $d_sci_SetIterator;
const $p_sci_Vector$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 250
    } else {
      throw e
    }
  }
});
class $c_sci_Vector$ extends $c_O {
  constructor() {
    super();
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
    this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
  };
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_Vector(elems)
  };
  from__sc_IterableOnce__sci_Vector(it) {
    if ((it instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(it);
      return x2
    } else {
      const knownSize = it.knownSize__I();
      if ((knownSize === 0)) {
        return $m_sci_Vector0$()
      } else if (((knownSize > 0) && (knownSize <= 32))) {
        let a1$3;
        matchEnd5: {
          if ((it instanceof $c_sci_ArraySeq$ofRef)) {
            const x2$2 = $as_sci_ArraySeq$ofRef(it);
            const x = x2$2.elemTag__s_reflect_ClassTag();
            if (((x !== null) && x.equals__O__Z($d_O.getClassOf()))) {
              a1$3 = x2$2.unsafeArray__AO();
              break matchEnd5
            }
          };
          if ($is_sci_Iterable(it)) {
            const x3 = $as_sci_Iterable(it);
            const a1 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
            x3.copyToArray__O__I__I(a1, 0);
            a1$3 = a1;
            break matchEnd5
          };
          const a1$2 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
          const this$1 = it.iterator__sc_Iterator();
          $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, a1$2, 0);
          a1$3 = a1$2
        };
        return new $c_sci_Vector1(a1$3)
      } else {
        const this$2 = new $c_sci_VectorBuilder();
        const this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
        return this$3.result__sci_Vector()
      }
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_VectorBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Vector(source)
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
const $p_sci_VectorBuilder__addArr1__AO__V = (function($thiz, data) {
  const dl = data.u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    const a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    const copy1 = ((a < dl) ? a : dl);
    const copy2 = ((dl - copy1) | 0);
    const dest = $thiz.sci_VectorBuilder__f_a1;
    const destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopy(data, 0, dest, destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      const dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopy(data, copy1, dest$1, 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
});
const $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder = (function($thiz, xs) {
  const sliceCount = xs.vectorSliceCount__I();
  let sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    const slice = xs.vectorSlice__I__AO(sliceIdx);
    const idx = sliceIdx;
    const c = ((sliceCount / 2) | 0);
    const a = ((idx - c) | 0);
    const x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((this$3) => ((data$2) => {
        const data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V(this$3, data)
      }))($thiz)))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
});
const $p_sci_VectorBuilder__advance__V = (function($thiz) {
  const idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  const xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
});
const $p_sci_VectorBuilder__advance1__I__I__V = (function($thiz, idx, xor) {
  if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a2.set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1)
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a3.set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2)
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      $thiz.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a4.set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3)
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      $thiz.sci_VectorBuilder__f_a5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a5.set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $thiz.sci_VectorBuilder__f_a5.set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4)
  } else if ((xor < 1073741824)) {
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      $thiz.sci_VectorBuilder__f_a6 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [64]);
      $thiz.sci_VectorBuilder__f_a6.set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $thiz.sci_VectorBuilder__f_a5.set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $thiz.sci_VectorBuilder__f_a6.set((31 & ((idx >>> 25) | 0)), $thiz.sci_VectorBuilder__f_a5)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  }
});
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_a6 = null;
    this.sci_VectorBuilder__f_a5 = null;
    this.sci_VectorBuilder__f_a4 = null;
    this.sci_VectorBuilder__f_a3 = null;
    this.sci_VectorBuilder__f_a2 = null;
    this.sci_VectorBuilder__f_a1 = null;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
    this.sci_VectorBuilder__f_offset = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
    this.sci_VectorBuilder__f_offset = 0;
    this.sci_VectorBuilder__f_depth = 1
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  initFrom__AO__V(prefix1) {
    this.sci_VectorBuilder__f_depth = 1;
    const i = prefix1.u.length;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    this.sci_VectorBuilder__f_a1 = ((prefix1.u.length === 32) ? prefix1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(prefix1, 0, 32));
    if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
    }
  };
  initFrom__sci_Vector__sci_VectorBuilder(v) {
    const x1 = v.vectorSliceCount__I();
    switch (x1) {
      case 0: {
        break
      }
      case 1: {
        const v1 = $as_sci_Vector1(v);
        this.sci_VectorBuilder__f_depth = 1;
        const i = v1.sci_Vector__f_prefix1.u.length;
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        const a = v1.sci_Vector__f_prefix1;
        this.sci_VectorBuilder__f_a1 = ((a.u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
        break
      }
      case 3: {
        const v2 = $as_sci_Vector2(v);
        const d2 = v2.sci_Vector2__f_data2;
        const a$1 = v2.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$1.u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
        this.sci_VectorBuilder__f_depth = 2;
        this.sci_VectorBuilder__f_offset = ((32 - v2.sci_Vector2__f_len1) | 0);
        const i$1 = ((v2.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a2.set(0, v2.sci_Vector__f_prefix1);
        const dest = this.sci_VectorBuilder__f_a2;
        const length = d2.u.length;
        $systemArraycopy(d2, 0, dest, 1, length);
        this.sci_VectorBuilder__f_a2.set(((1 + d2.u.length) | 0), this.sci_VectorBuilder__f_a1);
        break
      }
      case 5: {
        const v3 = $as_sci_Vector3(v);
        const d3 = v3.sci_Vector3__f_data3;
        const s2 = v3.sci_Vector3__f_suffix2;
        const a$2 = v3.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$2.u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
        this.sci_VectorBuilder__f_depth = 3;
        this.sci_VectorBuilder__f_offset = ((1024 - v3.sci_Vector3__f_len12) | 0);
        const i$2 = ((v3.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a3.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v3.sci_Vector__f_prefix1, v3.sci_Vector3__f_prefix2), 2));
        const dest$1 = this.sci_VectorBuilder__f_a3;
        const length$1 = d3.u.length;
        $systemArraycopy(d3, 0, dest$1, 1, length$1);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
        this.sci_VectorBuilder__f_a3.set(((1 + d3.u.length) | 0), this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      case 7: {
        const v4 = $as_sci_Vector4(v);
        const d4 = v4.sci_Vector4__f_data4;
        const s3 = v4.sci_Vector4__f_suffix3;
        const s2$2 = v4.sci_Vector4__f_suffix2;
        const a$3 = v4.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$3.u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
        this.sci_VectorBuilder__f_depth = 4;
        this.sci_VectorBuilder__f_offset = ((32768 - v4.sci_Vector4__f_len123) | 0);
        const i$3 = ((v4.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a4.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v4.sci_Vector__f_prefix1, v4.sci_Vector4__f_prefix2), v4.sci_Vector4__f_prefix3), 3));
        const dest$2 = this.sci_VectorBuilder__f_a4;
        const length$2 = d4.u.length;
        $systemArraycopy(d4, 0, dest$2, 1, length$2);
        this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
        this.sci_VectorBuilder__f_a4.set(((1 + d4.u.length) | 0), this.sci_VectorBuilder__f_a3);
        this.sci_VectorBuilder__f_a3.set(s3.u.length, this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2$2.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      case 9: {
        const v5 = $as_sci_Vector5(v);
        const d5 = v5.sci_Vector5__f_data5;
        const s4 = v5.sci_Vector5__f_suffix4;
        const s3$2 = v5.sci_Vector5__f_suffix3;
        const s2$3 = v5.sci_Vector5__f_suffix2;
        const a$4 = v5.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$4.u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
        this.sci_VectorBuilder__f_depth = 5;
        this.sci_VectorBuilder__f_offset = ((1048576 - v5.sci_Vector5__f_len1234) | 0);
        const i$4 = ((v5.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a5.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v5.sci_Vector__f_prefix1, v5.sci_Vector5__f_prefix2), v5.sci_Vector5__f_prefix3), v5.sci_Vector5__f_prefix4), 4));
        const dest$3 = this.sci_VectorBuilder__f_a5;
        const length$3 = d5.u.length;
        $systemArraycopy(d5, 0, dest$3, 1, length$3);
        this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
        this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
        this.sci_VectorBuilder__f_a5.set(((1 + d5.u.length) | 0), this.sci_VectorBuilder__f_a4);
        this.sci_VectorBuilder__f_a4.set(s4.u.length, this.sci_VectorBuilder__f_a3);
        this.sci_VectorBuilder__f_a3.set(s3$2.u.length, this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2$3.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      case 11: {
        const v6 = $as_sci_Vector6(v);
        const d6 = v6.sci_Vector6__f_data6;
        const s5 = v6.sci_Vector6__f_suffix5;
        const s4$2 = v6.sci_Vector6__f_suffix4;
        const s3$3 = v6.sci_Vector6__f_suffix3;
        const s2$4 = v6.sci_Vector6__f_suffix2;
        const a$5 = v6.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$5.u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
        this.sci_VectorBuilder__f_depth = 6;
        this.sci_VectorBuilder__f_offset = ((33554432 - v6.sci_Vector6__f_len12345) | 0);
        const i$5 = ((v6.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a6 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a6.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v6.sci_Vector__f_prefix1, v6.sci_Vector6__f_prefix2), v6.sci_Vector6__f_prefix3), v6.sci_Vector6__f_prefix4), v6.sci_Vector6__f_prefix5), 5));
        const dest$4 = this.sci_VectorBuilder__f_a6;
        const length$4 = d6.u.length;
        $systemArraycopy(d6, 0, dest$4, 1, length$4);
        this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
        this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
        this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
        this.sci_VectorBuilder__f_a6.set(((1 + d6.u.length) | 0), this.sci_VectorBuilder__f_a5);
        this.sci_VectorBuilder__f_a5.set(s5.u.length, this.sci_VectorBuilder__f_a4);
        this.sci_VectorBuilder__f_a4.set(s4$2.u.length, this.sci_VectorBuilder__f_a3);
        this.sci_VectorBuilder__f_a3.set(s3$3.u.length, this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2$4.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      default: {
        throw new $c_s_MatchError(x1)
      }
    };
    if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
    };
    return this
  };
  addOne__O__sci_VectorBuilder(elem) {
    if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V(this)
    };
    this.sci_VectorBuilder__f_a1.set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    return this
  };
  addAll__sc_IterableOnce__sci_VectorBuilder(xs) {
    if ((xs instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(xs);
      return (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
    } else {
      return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
    }
  };
  result__sci_Vector() {
    const len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
    const realLen = ((len - this.sci_VectorBuilder__f_offset) | 0);
    if ((realLen === 0)) {
      $m_sci_Vector$();
      return $m_sci_Vector0$()
    } else if ((len <= 32)) {
      if ((realLen === 32)) {
        return new $c_sci_Vector1(this.sci_VectorBuilder__f_a1)
      } else {
        const original = this.sci_VectorBuilder__f_a1;
        return new $c_sci_Vector1($m_ju_Arrays$().copyOf__AO__I__AO(original, realLen))
      }
    } else if ((len <= 1024)) {
      const i1 = (31 & (((-1) + len) | 0));
      const i2 = (((((-1) + len) | 0) >>> 5) | 0);
      const original$1 = this.sci_VectorBuilder__f_a2;
      const data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i2), 2);
      const prefix1 = this.sci_VectorBuilder__f_a2.get(0);
      const a = this.sci_VectorBuilder__f_a2.get(i2);
      const len$1 = ((1 + i1) | 0);
      const suffix1 = ((a.u.length === len$1) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, len$1));
      return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_offset) | 0), data, suffix1, realLen)
    } else if ((len <= 32768)) {
      const i1$2 = (31 & (((-1) + len) | 0));
      const i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3 = (((((-1) + len) | 0) >>> 10) | 0);
      const original$2 = this.sci_VectorBuilder__f_a3;
      const data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, 1, i3), 3);
      const a$1 = this.sci_VectorBuilder__f_a3.get(0);
      const to = a$1.u.length;
      const prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 1, to), 2);
      const prefix1$2 = this.sci_VectorBuilder__f_a3.get(0).get(0);
      const original$3 = this.sci_VectorBuilder__f_a3.get(i3);
      const suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$3, i2$2), 2);
      const a$2 = this.sci_VectorBuilder__f_a3.get(i3).get(i2$2);
      const len$2 = ((1 + i1$2) | 0);
      const suffix1$2 = ((a$2.u.length === len$2) ? a$2 : $m_ju_Arrays$().copyOf__AO__I__AO(a$2, len$2));
      const len1 = prefix1$2.u.length;
      const len12 = ((len1 + (prefix2.u.length << 5)) | 0);
      return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
    } else if ((len <= 1048576)) {
      const i1$3 = (31 & (((-1) + len) | 0));
      const i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
      const i4 = (((((-1) + len) | 0) >>> 15) | 0);
      const original$4 = this.sci_VectorBuilder__f_a4;
      const data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, 1, i4), 4);
      const a$3 = this.sci_VectorBuilder__f_a4.get(0);
      const to$1 = a$3.u.length;
      const prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 1, to$1), 3);
      const a$4 = this.sci_VectorBuilder__f_a4.get(0).get(0);
      const to$2 = a$4.u.length;
      const prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$2), 2);
      const prefix1$3 = this.sci_VectorBuilder__f_a4.get(0).get(0).get(0);
      const original$5 = this.sci_VectorBuilder__f_a4.get(i4);
      const suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i3$2), 3);
      const original$6 = this.sci_VectorBuilder__f_a4.get(i4).get(i3$2);
      const suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$6, i2$3), 2);
      const a$5 = this.sci_VectorBuilder__f_a4.get(i4).get(i3$2).get(i2$3);
      const len$3 = ((1 + i1$3) | 0);
      const suffix1$3 = ((a$5.u.length === len$3) ? a$5 : $m_ju_Arrays$().copyOf__AO__I__AO(a$5, len$3));
      const len1$2 = prefix1$3.u.length;
      const len12$2 = ((len1$2 + (prefix2$2.u.length << 5)) | 0);
      const len123 = ((len12$2 + (prefix3.u.length << 10)) | 0);
      return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
    } else if ((len <= 33554432)) {
      const i1$4 = (31 & (((-1) + len) | 0));
      const i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
      const i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
      const i5 = (((((-1) + len) | 0) >>> 20) | 0);
      const original$7 = this.sci_VectorBuilder__f_a5;
      const data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$7, 1, i5), 5);
      const a$6 = this.sci_VectorBuilder__f_a5.get(0);
      const to$3 = a$6.u.length;
      const prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$6, 1, to$3), 4);
      const a$7 = this.sci_VectorBuilder__f_a5.get(0).get(0);
      const to$4 = a$7.u.length;
      const prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$4), 3);
      const a$8 = this.sci_VectorBuilder__f_a5.get(0).get(0).get(0);
      const to$5 = a$8.u.length;
      const prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$5), 2);
      const prefix1$4 = this.sci_VectorBuilder__f_a5.get(0).get(0).get(0).get(0);
      const original$8 = this.sci_VectorBuilder__f_a5.get(i5);
      const suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i4$2), 4);
      const original$9 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2);
      const suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i3$3), 3);
      const original$10 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2).get(i3$3);
      const suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$10, i2$4), 2);
      const a$9 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2).get(i3$3).get(i2$4);
      const len$4 = ((1 + i1$4) | 0);
      const suffix1$4 = ((a$9.u.length === len$4) ? a$9 : $m_ju_Arrays$().copyOf__AO__I__AO(a$9, len$4));
      const len1$3 = prefix1$4.u.length;
      const len12$3 = ((len1$3 + (prefix2$3.u.length << 5)) | 0);
      const len123$2 = ((len12$3 + (prefix3$2.u.length << 10)) | 0);
      const len1234 = ((len123$2 + (prefix4.u.length << 15)) | 0);
      return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
    } else {
      const i1$5 = (31 & (((-1) + len) | 0));
      const i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
      const i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
      const i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
      const i6 = (((((-1) + len) | 0) >>> 25) | 0);
      const original$11 = this.sci_VectorBuilder__f_a6;
      const data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$11, 1, i6), 6);
      const a$10 = this.sci_VectorBuilder__f_a6.get(0);
      const to$6 = a$10.u.length;
      const prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$10, 1, to$6), 5);
      const a$11 = this.sci_VectorBuilder__f_a6.get(0).get(0);
      const to$7 = a$11.u.length;
      const prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$7), 4);
      const a$12 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0);
      const to$8 = a$12.u.length;
      const prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$8), 3);
      const a$13 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0).get(0);
      const to$9 = a$13.u.length;
      const prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$9), 2);
      const prefix1$5 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0).get(0).get(0);
      const original$12 = this.sci_VectorBuilder__f_a6.get(i6);
      const suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i5$2), 5);
      const original$13 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2);
      const suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i4$3), 4);
      const original$14 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3);
      const suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i3$4), 3);
      const original$15 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3).get(i3$4);
      const suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$15, i2$5), 2);
      const a$14 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3).get(i3$4).get(i2$5);
      const len$5 = ((1 + i1$5) | 0);
      const suffix1$5 = ((a$14.u.length === len$5) ? a$14 : $m_ju_Arrays$().copyOf__AO__I__AO(a$14, len$5));
      const len1$4 = prefix1$5.u.length;
      const len12$4 = ((len1$4 + (prefix2$4.u.length << 5)) | 0);
      const len123$3 = ((len12$4 + (prefix3$3.u.length << 10)) | 0);
      const len1234$2 = ((len123$3 + (prefix4$2.u.length << 15)) | 0);
      const len12345 = ((len1234$2 + (prefix5.u.length << 20)) | 0);
      return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
    }
  };
  toString__T() {
    return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
  };
  result__O() {
    return this.result__sci_Vector()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_VectorBuilder(elem)
  };
}
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
const $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO = (function($thiz, arrayLength$1, n$1, end$1, array$2) {
  const lo = (arrayLength$1.RTLong__f_lo << 1);
  const hi = (((arrayLength$1.RTLong__f_lo >>> 31) | 0) | (arrayLength$1.RTLong__f_hi << 1));
  const t = (((hi === 0) ? (((-2147483648) ^ lo) > (-2147483632)) : (hi > 0)) ? new $c_RTLong(lo, hi) : new $c_RTLong(16, 0));
  const lo$1 = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  let newSize__lo = lo$1;
  let newSize__hi = hi$1;
  while (true) {
    const hi$2 = (n$1 >> 31);
    const b__lo = newSize__lo;
    const b__hi = newSize__hi;
    const bhi = b__hi;
    if (((hi$2 === bhi) ? (((-2147483648) ^ n$1) > ((-2147483648) ^ b__lo)) : (hi$2 > bhi))) {
      const this$4__lo = newSize__lo;
      const this$4__hi = newSize__hi;
      const lo$2 = (this$4__lo << 1);
      const hi$3 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
      const $$x1__lo = lo$2;
      const $$x1__hi = hi$3;
      newSize__lo = $$x1__lo;
      newSize__hi = $$x1__hi
    } else {
      break
    }
  };
  const this$5__lo = newSize__lo;
  const this$5__hi = newSize__hi;
  const ahi = this$5__hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
    if ((end$1 === 2147483647)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements"))
    };
    const $$x2__lo = 2147483647;
    const $$x2__hi = 0;
    newSize__lo = $$x2__lo;
    newSize__hi = $$x2__hi
  };
  const this$6__lo = newSize__lo;
  const this$6__hi = newSize__hi;
  const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
  $m_s_Array$().copy__O__I__O__I__I__V(array$2, 0, newArray, 0, end$1);
  return newArray
});
class $c_scm_ArrayBuffer$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(elems)
  };
  from__sc_IterableOnce__scm_ArrayBuffer(coll) {
    const k = coll.knownSize__I();
    if ((k >= 0)) {
      const array = $newArrayObject($d_O.getArrayOf(), [((k > 16) ? k : 16)]);
      const it = coll.iterator__sc_Iterator();
      const isEmpty = (k <= 0);
      const scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
      if ((!isEmpty)) {
        let i = 0;
        while (true) {
          const v1 = i;
          array.set(v1, it.next__O());
          if ((i === scala$collection$immutable$Range$$lastElement)) {
            break
          };
          i = ((1 + i) | 0)
        }
      };
      return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
    } else {
      const this$10 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
      return this$10.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
    }
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ArrayBuffer$$anon$1()
  };
  scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(array, end, n) {
    const value = array.u.length;
    const hi = (value >> 31);
    const hi$1 = (n >> 31);
    if (((hi$1 === hi) ? (((-2147483648) ^ n) <= ((-2147483648) ^ value)) : (hi$1 < hi))) {
      return array
    } else {
      return $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO(this, new $c_RTLong(value, hi), n, end, array)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_ArrayBuffer$$anon$1 extends $c_scm_GrowableBuilder {
  constructor() {
    super();
    $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()))
  };
  sizeHint__I__V(size) {
    $as_scm_ArrayBuffer(this.scm_GrowableBuilder__f_elems).ensureSize__I__V(size)
  };
}
const $d_scm_ArrayBuffer$$anon$1 = new $TypeData().initClass({
  scm_ArrayBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ArrayBuffer$$anon$1", {
  scm_ArrayBuffer$$anon$1: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_ArrayBuffer$$anon$1.prototype.$classData = $d_scm_ArrayBuffer$$anon$1;
const $ct_scm_ImmutableBuilder__sc_IterableOnce__ = (function($thiz, empty) {
  $thiz.scm_ImmutableBuilder__f_empty = empty;
  $thiz.scm_ImmutableBuilder__f_elems = empty;
  return $thiz
});
class $c_scm_ImmutableBuilder extends $c_O {
  constructor() {
    super();
    this.scm_ImmutableBuilder__f_empty = null;
    this.scm_ImmutableBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  result__O() {
    return this.scm_ImmutableBuilder__f_elems
  };
}
class $c_scm_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
class $c_scm_ListBuffer$ extends $c_O {
  apply__sci_Seq__O(elems) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(elems)
  };
  newBuilder__scm_Builder() {
    return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer())
  };
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(source)
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
class $c_s_concurrent_ExecutionContext$parasitic$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = null;
    $n_s_concurrent_ExecutionContext$parasitic$ = this;
    this.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = new $c_jl_ThreadLocal()
  };
  execute__jl_Runnable__V(runnable) {
    $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable)
  };
  reportFailure__jl_Throwable__V(t) {
    $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(t)
  };
}
const $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().initClass({
  s_concurrent_ExecutionContext$parasitic$: 0
}, false, "scala.concurrent.ExecutionContext$parasitic$", {
  s_concurrent_ExecutionContext$parasitic$: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1,
  s_concurrent_BatchingExecutor: 1
});
$c_s_concurrent_ExecutionContext$parasitic$.prototype.$classData = $d_s_concurrent_ExecutionContext$parasitic$;
let $n_s_concurrent_ExecutionContext$parasitic$ = (void 0);
function $m_s_concurrent_ExecutionContext$parasitic$() {
  if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
    $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$()
  };
  return $n_s_concurrent_ExecutionContext$parasitic$
}
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
const $f_s_reflect_ClassTag__equals__O__Z = (function($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    const x$2 = $thiz.runtimeClass__jl_Class();
    const x$3 = $as_s_reflect_ClassTag(x).runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
});
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth))
}
class $c_sr_NonLocalReturnControl$mcI$sp extends $c_sr_NonLocalReturnControl {
  constructor(key, value$mcI$sp) {
    super();
    this.sr_NonLocalReturnControl$mcI$sp__f_value$mcI$sp = 0;
    this.sr_NonLocalReturnControl$mcI$sp__f_value$mcI$sp = value$mcI$sp;
    $ct_sr_NonLocalReturnControl__O__O__(this, key, null)
  };
}
const $d_sr_NonLocalReturnControl$mcI$sp = new $TypeData().initClass({
  sr_NonLocalReturnControl$mcI$sp: 0
}, false, "scala.runtime.NonLocalReturnControl$mcI$sp", {
  sr_NonLocalReturnControl$mcI$sp: 1,
  sr_NonLocalReturnControl: 1,
  s_util_control_ControlThrowable: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_NonLocalReturnControl$mcI$sp.prototype.$classData = $d_sr_NonLocalReturnControl$mcI$sp;
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_sjs_js_WrappedArray$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems)
  };
  newBuilder__scm_Builder() {
    return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
  };
  from__sc_IterableOnce__sjs_js_WrappedArray(source) {
    const this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
    return $as_sjs_js_WrappedArray($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source)).result__O())
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
class $c_sjsr_WrappedVarArgs$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(elems)
  };
  from__sc_IterableOnce__sjsr_WrappedVarArgs(source) {
    const this$1 = this.newBuilder__scm_Builder();
    return $as_sjsr_WrappedVarArgs($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source)).result__O())
  };
  newBuilder__scm_Builder() {
    const array = [];
    const this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((x$1$2) => {
      const x$1 = $as_sjs_js_WrappedArray(x$1$2);
      return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$4, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
  };
}
const $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
let $n_sjsr_WrappedVarArgs$ = (void 0);
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
class $c_s_util_Failure extends $c_s_util_Try {
  constructor(exception) {
    super();
    this.s_util_Failure__f_exception = null;
    this.s_util_Failure__f_exception = exception
  };
  get__O() {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(this.s_util_Failure__f_exception)
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  recover__s_PartialFunction__s_util_Try(pf) {
    const marker = $m_sr_Statics$PFMarker$();
    try {
      const v = pf.applyOrElse__O__F1__O(this.s_util_Failure__f_exception, new $c_sjsr_AnonFunction1(((this$2, marker$1) => ((x$2) => {
        $as_jl_Throwable(x$2);
        return marker$1
      }))(this, marker)));
      return ((marker !== v) ? new $c_s_util_Success(v) : this)
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        if ((e$2 !== null)) {
          const o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
          if ((!o11.isEmpty__Z())) {
            const e$3 = $as_jl_Throwable(o11.get__O());
            return new $c_s_util_Failure(e$3)
          }
        };
        throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
      } else {
        throw e
      }
    }
  };
  productPrefix__T() {
    return "Failure"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_util_Failure__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Failure)) {
      const Failure$1 = $as_s_util_Failure(x$1);
      const x = this.s_util_Failure__f_exception;
      const x$2 = Failure$1.s_util_Failure__f_exception;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  };
}
function $as_s_util_Failure(obj) {
  return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"))
}
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Failure)))
}
function $asArrayOf_s_util_Failure(obj, depth) {
  return (($isArrayOf_s_util_Failure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Failure;", depth))
}
const $d_s_util_Failure = new $TypeData().initClass({
  s_util_Failure: 0
}, false, "scala.util.Failure", {
  s_util_Failure: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Failure.prototype.$classData = $d_s_util_Failure;
class $c_s_util_Success extends $c_s_util_Try {
  constructor(value) {
    super();
    this.s_util_Success__f_value = null;
    this.s_util_Success__f_value = value
  };
  get__O() {
    return this.s_util_Success__f_value
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.s_util_Success__f_value)
  };
  recover__s_PartialFunction__s_util_Try(pf) {
    return this
  };
  productPrefix__T() {
    return "Success"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Success)) {
      const Success$1 = $as_s_util_Success(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, Success$1.s_util_Success__f_value)
    } else {
      return false
    }
  };
}
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"))
}
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)))
}
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth))
}
const $d_s_util_Success = new $TypeData().initClass({
  s_util_Success: 0
}, false, "scala.util.Success", {
  s_util_Success: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Success.prototype.$classData = $d_s_util_Success;
const $p_Lcom_kos_pathtrain_MainApp$__setupDPad__Lorg_scalajs_dom_raw_SVGPoint__Lorg_scalajs_dom_raw_HTMLElement__V = (function($thiz, canon, dpadView) {
  $thiz.Lcom_kos_pathtrain_MainApp$__f_dpad = new $c_Lcom_kos_wormpad_dpad_DPad($uD(canon.x), $uD(canon.y), 1.0, 1.0);
  const x = (($thiz.Lcom_kos_pathtrain_MainApp$__f_dpad.Lcom_kos_wormpad_dpad_DPad__f_centerX + " :: ") + $thiz.Lcom_kos_pathtrain_MainApp$__f_dpad.Lcom_kos_wormpad_dpad_DPad__f_centerY);
  const this$2 = $m_s_Console$();
  const this$3 = this$2.out__Ljava_io_PrintStream();
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
  dpadView.onmousemove = ((arg1$2) => $m_Lcom_kos_pathtrain_MainApp$().com$kos$pathtrain$MainApp$$$anonfun$setupDPad$1__Lorg_scalajs_dom_raw_MouseEvent__O(arg1$2));
  dpadView.onmouseup = ((arg1$2$1) => {
    $m_Lcom_kos_pathtrain_MainApp$();
    $m_Lcom_kos_pathtrain_MainApp$().fire__V()
  });
  const this$5 = $thiz.Lcom_kos_pathtrain_MainApp$__f_dpad;
  this$5.Lcom_kos_wormpad_dpad_DPad__f_pressed = true;
  dpadView.ontouchmove = ((arg1$2$2) => $m_Lcom_kos_pathtrain_MainApp$().com$kos$pathtrain$MainApp$$$anonfun$setupDPad$5__Lorg_scalajs_dom_raw_TouchEvent__O(arg1$2$2))
});
class $c_Lcom_kos_pathtrain_MainApp$ extends $c_O {
  constructor() {
    super();
    this.Lcom_kos_pathtrain_MainApp$__f_gameTime = 0.0;
    this.Lcom_kos_pathtrain_MainApp$__f_dpad = null;
    this.Lcom_kos_pathtrain_MainApp$__f_screenView = null;
    this.Lcom_kos_pathtrain_MainApp$__f_roadLayer = null;
    this.Lcom_kos_pathtrain_MainApp$__f_svg = null;
    this.Lcom_kos_pathtrain_MainApp$__f_random = null;
    this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes = null;
    this.Lcom_kos_pathtrain_MainApp$__f_destroyIndex = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_comboMultiply = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_currentLevel = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_fireSpeed = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_speed = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_reverseSpeed = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_levelCount = 0;
    this.Lcom_kos_pathtrain_MainApp$__f_DIR_SCREEN = null;
    this.Lcom_kos_pathtrain_MainApp$__f_DIR_ROADS = null;
    this.Lcom_kos_pathtrain_MainApp$__f_DIR_HEROES = null;
    this.Lcom_kos_pathtrain_MainApp$__f_pause_ = false;
    this.Lcom_kos_pathtrain_MainApp$__f_isGameOver_ = false;
    this.Lcom_kos_pathtrain_MainApp$__f_listener_ = null;
    this.Lcom_kos_pathtrain_MainApp$__f_jslistener = null;
    this.Lcom_kos_pathtrain_MainApp$__f_soundPlay_ = false;
    this.Lcom_kos_pathtrain_MainApp$__f_musicPlay_ = false;
    this.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$AudioState$$soundPath = null;
    this.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$AudioState$$musicPath = null;
    this.Lcom_kos_pathtrain_MainApp$__f_soundBank = null;
    this.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$GameScore$$score_ = 0;
    $n_Lcom_kos_pathtrain_MainApp$ = this;
    this.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$GameScore$$score_ = 0;
    $f_Lcom_kos_wormpad_game_AudioState__$init$__V(this);
    $f_Lcom_kos_wormpad_game_GameState__$init$__V(this);
    $f_Lcom_kos_pathtrain_GameConst__$init$__V(this);
    this.Lcom_kos_pathtrain_MainApp$__f_gameTime = 0.0;
    this.Lcom_kos_pathtrain_MainApp$__f_dpad = new $c_Lcom_kos_wormpad_dpad_DPad(0.0, 0.0, 1.0, 1.0);
    this.Lcom_kos_pathtrain_MainApp$__f_screenView = null;
    this.Lcom_kos_pathtrain_MainApp$__f_roadLayer = null;
    this.Lcom_kos_pathtrain_MainApp$__f_svg = null;
    this.Lcom_kos_pathtrain_MainApp$__f_random = $ct_s_util_Random__(new $c_s_util_Random());
    this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes = new $c_Lcom_kos_pathtrain_GameHeroes(1);
    this.Lcom_kos_pathtrain_MainApp$__f_destroyIndex = (-1);
    this.Lcom_kos_pathtrain_MainApp$__f_comboMultiply = 1;
    this.Lcom_kos_pathtrain_MainApp$__f_currentLevel = 0
  };
  $js$exported$meth$isPause__O() {
    return this.Lcom_kos_pathtrain_MainApp$__f_pause_
  };
  $js$exported$meth$isGameOver__O() {
    return this.Lcom_kos_pathtrain_MainApp$__f_isGameOver_
  };
  $js$exported$meth$pause__O() {
    $f_Lcom_kos_wormpad_game_GameState__pause__V(this)
  };
  $js$exported$meth$resume__O() {
    $f_Lcom_kos_wormpad_game_GameState__resume__V(this)
  };
  $js$exported$meth$togglePause__O() {
    $f_Lcom_kos_wormpad_game_GameState__togglePause__V(this)
  };
  $js$exported$prop$listener___O() {
    return this.Lcom_kos_pathtrain_MainApp$__f_listener_
  };
  $js$exported$prop$listener___Lcom_kos_wormpad_game_GameListenerDelegate__O(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_listener_ = x$1
  };
  $js$exported$prop$jslistener__O() {
    return this.Lcom_kos_pathtrain_MainApp$__f_jslistener
  };
  $js$exported$prop$jslistener__Lcom_kos_wormpad_game_GameListener__O(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_jslistener = x$1
  };
  $js$exported$prop$listener__O() {
    return this.Lcom_kos_pathtrain_MainApp$__f_listener_
  };
  com$kos$pathtrain$GameConst$_setter_$fireSpeed_$eq__I__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_fireSpeed = x$1
  };
  com$kos$pathtrain$GameConst$_setter_$speed_$eq__I__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_speed = x$1
  };
  com$kos$pathtrain$GameConst$_setter_$reverseSpeed_$eq__I__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_reverseSpeed = x$1
  };
  com$kos$pathtrain$GameConst$_setter_$levelCount_$eq__I__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_levelCount = x$1
  };
  com$kos$pathtrain$GameConst$_setter_$DIR_SCREEN_$eq__T__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_DIR_SCREEN = x$1
  };
  com$kos$pathtrain$GameConst$_setter_$DIR_ROADS_$eq__T__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_DIR_ROADS = x$1
  };
  com$kos$pathtrain$GameConst$_setter_$DIR_HEROES_$eq__T__V(x$1) {
    this.Lcom_kos_pathtrain_MainApp$__f_DIR_HEROES = x$1
  };
  main__AT__V(args) {
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("display");
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("display");
    this.Lcom_kos_pathtrain_MainApp$__f_screenView = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("screens");
    this.Lcom_kos_pathtrain_MainApp$__f_roadLayer = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("roadLayer");
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().loadSvg__T__Lorg_scalajs_dom_raw_HTMLDivElement__F1__V((this.Lcom_kos_pathtrain_MainApp$__f_DIR_HEROES + "ball.svg"), $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("hideBalls"), new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => (void 0)))(this)));
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().loadSvg__T__Lorg_scalajs_dom_raw_HTMLDivElement__F1__V((this.Lcom_kos_pathtrain_MainApp$__f_DIR_SCREEN + "screen_game_over.svg"), this.Lcom_kos_pathtrain_MainApp$__f_screenView, new $c_sjsr_AnonFunction1(((this$2) => ((x$2$2) => {
      $m_Lcom_kos_wormpad_game_helpers_JSHelper$().addSvgOnClick__T__F0__V("gameOverBtnNewGame", new $c_sjsr_AnonFunction0(((this$3) => (() => {
        const this$5 = $m_s_Console$();
        const this$6 = this$5.out__Ljava_io_PrintStream();
        this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V("gameOverBtnNewGame click\n");
        $m_Lcom_kos_pathtrain_MainApp$().newGame__V()
      }))(this$2)))
    }))(this)));
    $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().onresize = ((arg1$2) => {
      $m_Lcom_kos_pathtrain_MainApp$();
      $m_Lcom_kos_pathtrain_MainApp$().resize__V()
    });
    this.resize__V();
    new $c_Lcom_kos_wormpad_game_GameLoop().start__F1__F0__V(new $c_sjsr_AnonFunction1(((this$3$1) => ((tick$2) => {
      const t = $uJ(tick$2);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      $m_Lcom_kos_pathtrain_MainApp$().update__J__V(new $c_RTLong(lo, hi))
    }))(this)), new $c_sjsr_AnonFunction0(((this$4$1) => (() => {
      $m_Lcom_kos_pathtrain_MainApp$()
    }))(this)))
  };
  inGameRect__Lcom_kos_pathtrain_heroes_Hero__Z(hero) {
    return ((((hero.Lcom_kos_pathtrain_heroes_Hero__f_x > (-20.0)) && (hero.Lcom_kos_pathtrain_heroes_Hero__f_y > (-20.0))) && (hero.Lcom_kos_pathtrain_heroes_Hero__f_x < 420.0)) && (hero.Lcom_kos_pathtrain_heroes_Hero__f_y < 320.0))
  };
  combo__I__I__I(insertPos, multi) {
    const x1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.combo__I__T2(insertPos);
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const l = x1._1$mcI$sp__I();
    const r = x1._2$mcI$sp__I();
    if ((((1 + ((r - l) | 0)) | 0) >= 3)) {
      const value = ((this.Lcom_kos_pathtrain_MainApp$__f_com$kos$wormpad$game$GameScore$$score_ + $imul(((r - l) | 0), multi)) | 0);
      $f_Lcom_kos_wormpad_game_GameScore__score_$eq__I__V(this, value);
      this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.babach__I__I__V(l, r);
      const ev$1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_moverBall;
      ev$1.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = (ev$1.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition - $imul(10, ((r - l) | 0)));
      this.Lcom_kos_pathtrain_MainApp$__f_comboMultiply = ((2 + multi) | 0);
      return l
    } else {
      this.Lcom_kos_pathtrain_MainApp$__f_comboMultiply = 1;
      return (-1)
    }
  };
  update__J__V(tick) {
    const timeDelta = (0.001 * $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(tick.RTLong__f_lo, tick.RTLong__f_hi));
    let $$x1;
    if (((!this.Lcom_kos_pathtrain_MainApp$__f_pause_) && (!this.Lcom_kos_pathtrain_MainApp$__f_isGameOver_))) {
      const this$1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes;
      $$x1 = this$1.Lcom_kos_pathtrain_GameHeroes__f_runned
    } else {
      $$x1 = false
    };
    if ($$x1) {
      const postgameOver = new $c_sr_BooleanRef(false);
      this.Lcom_kos_pathtrain_MainApp$__f_gameTime = (this.Lcom_kos_pathtrain_MainApp$__f_gameTime + timeDelta);
      const roadLength = $uD(this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_road.getTotalLength());
      const ev$1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_moverBall;
      ev$1.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = (ev$1.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition + (this.Lcom_kos_pathtrain_MainApp$__f_speed * timeDelta));
      const elem = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_moverBall;
      const predBall = new $c_sr_ObjectRef(elem);
      const i = new $c_sr_IntRef((-1));
      this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_balls.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$5, i$1, predBall$1, timeDelta$1, roadLength$1, postgameOver$1) => ((ball$2) => {
        const ball = $as_Lcom_kos_pathtrain_heroes_Ball(ball$2);
        i$1.sr_IntRef__f_elem = ((1 + i$1.sr_IntRef__f_elem) | 0);
        const minpos = (($as_Lcom_kos_pathtrain_heroes_Ball(predBall$1.sr_ObjectRef__f_elem).Lcom_kos_pathtrain_heroes_Ball__f_strokePosition + ball.Lcom_kos_pathtrain_heroes_Hero__f_radius) + $as_Lcom_kos_pathtrain_heroes_Ball(predBall$1.sr_ObjectRef__f_elem).Lcom_kos_pathtrain_heroes_Hero__f_radius);
        if ((ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition < minpos)) {
          ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = minpos;
          if ((i$1.sr_IntRef__f_elem === $m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_destroyIndex)) {
            $m_Lcom_kos_pathtrain_MainApp$().combo__I__I__I(i$1.sr_IntRef__f_elem, $m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_comboMultiply)
          }
        } else {
          const reversePosition = (ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition - (timeDelta$1 * $m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_reverseSpeed));
          if ((reversePosition > minpos)) {
            ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = reversePosition
          } else {
            ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition = minpos
          }
        };
        const point = $m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_road.getPointAtLength(ball.Lcom_kos_pathtrain_heroes_Ball__f_strokePosition);
        $f_Lcom_kos_pathtrain_heroes_HeroNode__transform__Lorg_scalajs_dom_raw_SVGPoint__V(ball, point);
        predBall$1.sr_ObjectRef__f_elem = ball;
        if ((minpos > roadLength$1)) {
          postgameOver$1.sr_BooleanRef__f_elem = true
        }
      }))(this, i, predBall, timeDelta, roadLength, postgameOver)));
      const angle = this.Lcom_kos_pathtrain_MainApp$__f_dpad.angle__D();
      const this$6 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_canon;
      $f_Lcom_kos_pathtrain_heroes_HeroNode__rotate__D__V(this$6, angle);
      if ((this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_fireBall !== null)) {
        this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_fireBall.move__D__V(timeDelta);
        const insertPos = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.intersectRoadFire__I();
        if ((insertPos >= 0)) {
          this.Lcom_kos_pathtrain_MainApp$__f_destroyIndex = this.combo__I__I__I(insertPos, 1);
          if (this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_balls.isEmpty__Z()) {
            postgameOver.sr_BooleanRef__f_elem = true
          }
        };
        if ((!this.inGameRect__Lcom_kos_pathtrain_heroes_Hero__Z(this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_fireBall))) {
          this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.nextFireBall__V()
        }
      };
      if (postgameOver.sr_BooleanRef__f_elem) {
        if ((this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_balls.isEmpty__Z() && (this.Lcom_kos_pathtrain_MainApp$__f_currentLevel < this.Lcom_kos_pathtrain_MainApp$__f_levelCount))) {
          this.nextLevel__I__V(((1 + this.Lcom_kos_pathtrain_MainApp$__f_currentLevel) | 0))
        } else {
          this.gameOver__V()
        }
      }
    }
  };
  fire__V() {
    const this$1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes;
    if (this$1.Lcom_kos_pathtrain_GameHeroes__f_runned) {
      if ((!this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_fireBall.Lcom_kos_pathtrain_heroes_FireBall__f_fired)) {
        this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes.Lcom_kos_pathtrain_GameHeroes__f_fireBall.fire__D__D__V((this.Lcom_kos_pathtrain_MainApp$__f_fireSpeed * this.Lcom_kos_pathtrain_MainApp$__f_dpad.boundedX__D()), (this.Lcom_kos_pathtrain_MainApp$__f_fireSpeed * this.Lcom_kos_pathtrain_MainApp$__f_dpad.boundedY__D()))
      }
    }
  };
  setupGameElements__V() {
    const heroes = new $c_Lcom_kos_pathtrain_GameHeroes(4);
    heroes.setup__Lorg_scalajs_dom_raw_SVGSVGElement__V(this.Lcom_kos_pathtrain_MainApp$__f_svg);
    $p_Lcom_kos_pathtrain_MainApp$__setupDPad__Lorg_scalajs_dom_raw_SVGPoint__Lorg_scalajs_dom_raw_HTMLElement__V(this, heroes.Lcom_kos_pathtrain_GameHeroes__f_canonPoint, this.Lcom_kos_pathtrain_MainApp$__f_roadLayer);
    heroes.Lcom_kos_pathtrain_GameHeroes__f_runned = true;
    this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes = heroes
  };
  nextLevel__I__V(value) {
    this.Lcom_kos_pathtrain_MainApp$__f_currentLevel = value;
    const this$1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes;
    this$1.Lcom_kos_pathtrain_GameHeroes__f_runned = false;
    this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes = new $c_Lcom_kos_pathtrain_GameHeroes(4);
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().clear__Lorg_scalajs_dom_raw_HTMLElement__V(this.Lcom_kos_pathtrain_MainApp$__f_roadLayer);
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().loadSvg__T__Lorg_scalajs_dom_raw_HTMLDivElement__F1__V(((this.Lcom_kos_pathtrain_MainApp$__f_DIR_ROADS + ("road_" + value)) + ".svg"), this.Lcom_kos_pathtrain_MainApp$__f_roadLayer, new $c_sjsr_AnonFunction1(((this$2) => ((element$2) => {
      $m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_svg = element$2;
      const element = $m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_roadLayer;
      $m_Lcom_kos_wormpad_game_helpers_JSHelper$().removeClass__Lorg_scalajs_dom_raw_HTMLElement__T__V(element, "gone");
      $m_Lcom_kos_pathtrain_MainApp$().setupGameElements__V()
    }))(this)))
  };
  newGame__V() {
    this.Lcom_kos_pathtrain_MainApp$__f_isGameOver_ = false;
    this.Lcom_kos_pathtrain_MainApp$__f_gameTime = 0.0;
    $f_Lcom_kos_wormpad_game_GameScore__score_$eq__I__V(this, 0);
    const element = this.Lcom_kos_pathtrain_MainApp$__f_screenView;
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().addClass__Lorg_scalajs_dom_raw_HTMLElement__T__V(element, "gone");
    this.Lcom_kos_pathtrain_MainApp$__f_listener_.onNewGame__V();
    this.nextLevel__I__V(1)
  };
  gameOver__V() {
    const this$1 = this.Lcom_kos_pathtrain_MainApp$__f_gameHeroes;
    this$1.Lcom_kos_pathtrain_GameHeroes__f_runned = false;
    this.Lcom_kos_pathtrain_MainApp$__f_isGameOver_ = true;
    const element = this.Lcom_kos_pathtrain_MainApp$__f_screenView;
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().removeClass__Lorg_scalajs_dom_raw_HTMLElement__T__V(element, "gone");
    const element$1 = this.Lcom_kos_pathtrain_MainApp$__f_roadLayer;
    $m_Lcom_kos_wormpad_game_helpers_JSHelper$().addClass__Lorg_scalajs_dom_raw_HTMLElement__T__V(element$1, "gone");
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("gameOverScore");
    this.Lcom_kos_pathtrain_MainApp$__f_listener_.onGameOver__V()
  };
  resize__V() {
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("display");
    const canvas = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("display");
    canvas.width = $doubleToInt($uD(canvas.offsetWidth));
    canvas.height = $doubleToInt($uD(canvas.offsetHeight))
  };
  cursorPoint__Lorg_scalajs_dom_raw_TouchEvent__Lorg_scalajs_dom_raw_SVGPoint(evt) {
    if ((this.Lcom_kos_pathtrain_MainApp$__f_svg !== null)) {
      const cursorPoint = this.Lcom_kos_pathtrain_MainApp$__f_svg.createSVGPoint();
      cursorPoint.x = $uD(evt.touches[0].clientX);
      cursorPoint.y = $uD(evt.touches[0].clientY);
      return cursorPoint.matrixTransform(this.Lcom_kos_pathtrain_MainApp$__f_svg.getScreenCTM().inverse())
    } else {
      return null
    }
  };
  cursorPoint__Lorg_scalajs_dom_raw_MouseEvent__Lorg_scalajs_dom_raw_SVGPoint(evt) {
    if ((this.Lcom_kos_pathtrain_MainApp$__f_svg !== null)) {
      const cursorPoint = this.Lcom_kos_pathtrain_MainApp$__f_svg.createSVGPoint();
      cursorPoint.x = $uD(evt.clientX);
      cursorPoint.y = $uD(evt.clientY);
      return cursorPoint.matrixTransform(this.Lcom_kos_pathtrain_MainApp$__f_svg.getScreenCTM().inverse())
    } else {
      return null
    }
  };
  $js$exported$meth$newGame__O() {
    this.newGame__V()
  };
  $js$exported$meth$gameOver__O() {
    this.gameOver__V()
  };
  $js$exported$meth$resize__O() {
    this.resize__V()
  };
  com$kos$pathtrain$MainApp$$$anonfun$setupDPad$1__Lorg_scalajs_dom_raw_MouseEvent__O(e) {
    const p = $m_Lcom_kos_pathtrain_MainApp$().cursorPoint__Lorg_scalajs_dom_raw_MouseEvent__Lorg_scalajs_dom_raw_SVGPoint(e);
    return (($m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_svg !== null) ? ($m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_dpad.touchMove__D__D__V($uD(p.x), $uD(p.y)), (void 0)) : (void 0))
  };
  com$kos$pathtrain$MainApp$$$anonfun$setupDPad$5__Lorg_scalajs_dom_raw_TouchEvent__O(e) {
    const p = $m_Lcom_kos_pathtrain_MainApp$().cursorPoint__Lorg_scalajs_dom_raw_TouchEvent__Lorg_scalajs_dom_raw_SVGPoint(e);
    return (($m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_svg !== null) ? ($m_Lcom_kos_pathtrain_MainApp$().Lcom_kos_pathtrain_MainApp$__f_dpad.touchMove__D__D__V($uD(p.x), $uD(p.y)), (void 0)) : (void 0))
  };
  get "listener"() {
    return this.$js$exported$prop$listener__O()
  };
  get "jslistener"() {
    return this.$js$exported$prop$jslistener__O()
  };
  set "jslistener"(arg) {
    const prep0 = $as_Lcom_kos_wormpad_game_GameListener(arg);
    this.$js$exported$prop$jslistener__Lcom_kos_wormpad_game_GameListener__O(prep0)
  };
  get "listener_"() {
    return this.$js$exported$prop$listener___O()
  };
  set "listener_"(arg) {
    const prep0 = $as_Lcom_kos_wormpad_game_GameListenerDelegate(arg);
    this.$js$exported$prop$listener___Lcom_kos_wormpad_game_GameListenerDelegate__O(prep0)
  };
  "togglePause"() {
    return this.$js$exported$meth$togglePause__O()
  };
  "resume"() {
    return this.$js$exported$meth$resume__O()
  };
  "pause"() {
    return this.$js$exported$meth$pause__O()
  };
  "isGameOver"() {
    return this.$js$exported$meth$isGameOver__O()
  };
  "isPause"() {
    return this.$js$exported$meth$isPause__O()
  };
  "resize"() {
    return this.$js$exported$meth$resize__O()
  };
  "gameOver"() {
    return this.$js$exported$meth$gameOver__O()
  };
  "newGame"() {
    return this.$js$exported$meth$newGame__O()
  };
}
const $d_Lcom_kos_pathtrain_MainApp$ = new $TypeData().initClass({
  Lcom_kos_pathtrain_MainApp$: 0
}, false, "com.kos.pathtrain.MainApp$", {
  Lcom_kos_pathtrain_MainApp$: 1,
  O: 1,
  Lcom_kos_wormpad_game_GameState: 1,
  Lcom_kos_wormpad_game_GameScore: 1,
  Lcom_kos_wormpad_game_AudioState: 1,
  Lcom_kos_wormpad_game_GameStateDelegate: 1,
  Lcom_kos_pathtrain_GameConst: 1
});
$c_Lcom_kos_pathtrain_MainApp$.prototype.$classData = $d_Lcom_kos_pathtrain_MainApp$;
let $n_Lcom_kos_pathtrain_MainApp$ = (void 0);
function $m_Lcom_kos_pathtrain_MainApp$() {
  if ((!$n_Lcom_kos_pathtrain_MainApp$)) {
    $n_Lcom_kos_pathtrain_MainApp$ = new $c_Lcom_kos_pathtrain_MainApp$()
  };
  return $n_Lcom_kos_pathtrain_MainApp$
}
const $ct_jl_ArrayIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_ArrayIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
const $ct_jl_StringIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_StringIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
const $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_Lorg_scalajs_dom_ext_AjaxException extends $c_jl_Exception {
  constructor(xhr) {
    super();
    this.Lorg_scalajs_dom_ext_AjaxException__f_xhr = null;
    this.Lorg_scalajs_dom_ext_AjaxException__f_xhr = xhr;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  productPrefix__T() {
    return "AjaxException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lorg_scalajs_dom_ext_AjaxException__f_xhr : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lorg_scalajs_dom_ext_AjaxException)) {
      const AjaxException$1 = $as_Lorg_scalajs_dom_ext_AjaxException(x$1);
      const x = this.Lorg_scalajs_dom_ext_AjaxException__f_xhr;
      const y = AjaxException$1.Lorg_scalajs_dom_ext_AjaxException__f_xhr;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
}
function $as_Lorg_scalajs_dom_ext_AjaxException(obj) {
  return (((obj instanceof $c_Lorg_scalajs_dom_ext_AjaxException) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.dom.ext.AjaxException"))
}
function $isArrayOf_Lorg_scalajs_dom_ext_AjaxException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_dom_ext_AjaxException)))
}
function $asArrayOf_Lorg_scalajs_dom_ext_AjaxException(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_dom_ext_AjaxException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.dom.ext.AjaxException;", depth))
}
const $d_Lorg_scalajs_dom_ext_AjaxException = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_AjaxException: 0
}, false, "org.scalajs.dom.ext.AjaxException", {
  Lorg_scalajs_dom_ext_AjaxException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lorg_scalajs_dom_ext_AjaxException.prototype.$classData = $d_Lorg_scalajs_dom_ext_AjaxException;
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_sc_AbstractIterable extends $c_O {
  className__T() {
    return this.stringPrefix__T()
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(coll))
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  sizeCompare__I__I(otherSize) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, otherSize)
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  slice__I__I__O(from, until) {
    return $f_sc_IterableOps__slice__I__I__O(this, from, until)
  };
  foreach__F1__V(f) {
    $f_sc_IterableOnceOps__foreach__F1__V(this, f)
  };
  forall__F1__Z(p) {
    return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  isEmpty__Z() {
    return $f_sc_IterableOnceOps__isEmpty__Z(this)
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__sc_IterableOps(coll)
  };
}
const $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I = (function($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder : value))
});
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
  sliceIterator__I__I__sc_Iterator(from, until) {
    const formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
    const formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
    const b = ((formatUntil - formatFrom) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
class $c_sc_Iterator$$anon$21 extends $c_scm_ImmutableBuilder {
  constructor() {
    super();
    $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty)
  };
  addOne__O__sc_Iterator$$anon$21(elem) {
    const this$3 = $as_sc_Iterator(this.scm_ImmutableBuilder__f_elems);
    const xs = new $c_sjsr_AnonFunction0(((this$1, elem$1) => (() => {
      $m_sc_Iterator$();
      return new $c_sc_Iterator$$anon$20(elem$1)
    }))(this, elem));
    this.scm_ImmutableBuilder__f_elems = this$3.concat__F0__sc_Iterator(xs);
    return this
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sc_Iterator$$anon$21(elem)
  };
}
const $d_sc_Iterator$$anon$21 = new $TypeData().initClass({
  sc_Iterator$$anon$21: 0
}, false, "scala.collection.Iterator$$anon$21", {
  sc_Iterator$$anon$21: 1,
  scm_ImmutableBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sc_Iterator$$anon$21.prototype.$classData = $d_sc_Iterator$$anon$21;
const $f_sc_MapOps__applyOrElse__O__F1__O = (function($thiz, x, default$1) {
  return $thiz.getOrElse__O__F0__O(x, new $c_sjsr_AnonFunction0(((this$1, default$2, x$1) => (() => default$2.apply__O__O(x$1)))($thiz, default$1, x)))
});
const $f_sc_MapOps__foreachEntry__F2__V = (function($thiz, f) {
  const it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const next = $as_T2(it.next__O());
    f.apply__O__O__O(next._1__O(), next._2__O())
  }
});
const $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, sb, start, sep, end) {
  const this$2 = $thiz.iterator__sc_Iterator();
  const f = new $c_sjsr_AnonFunction1(((this$1) => ((x0$1$2) => {
    const x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      const k = x0$1._1__O();
      const v = x0$1._2__O();
      return ((k + " -> ") + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))($thiz));
  const this$3 = new $c_sc_Iterator$$anon$9(this$2, f);
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, sb, start, sep, end)
});
const $f_sc_StrictOptimizedSeqOps__appended__O__O = (function($thiz, elem) {
  const b = $thiz.iterableFactory__sc_SeqFactory().newBuilder__scm_Builder();
  if (($thiz.knownSize__I() >= 0)) {
    b.sizeHint__I__V(((1 + $thiz.length__I()) | 0))
  };
  b.addAll__sc_IterableOnce__scm_Growable($thiz);
  b.addOne__O__scm_Growable(elem);
  return b.result__O()
});
const $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O = (function($thiz, suffix) {
  const b = $thiz.iterableFactory__sc_SeqFactory().newBuilder__scm_Builder();
  b.addAll__sc_IterableOnce__scm_Growable($thiz);
  b.addAll__sc_IterableOnce__scm_Growable(suffix);
  return b.result__O()
});
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
class $c_sci_Map$Map2$$anon$1 extends $c_sci_Map$Map2$Map2Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
  };
}
const $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass({
  sci_Map$Map2$$anon$1: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$1", {
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map2$$anon$1.prototype.$classData = $d_sci_Map$Map2$$anon$1;
class $c_sci_Map$Map3$$anon$4 extends $c_sci_Map$Map3$Map3Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
  };
}
const $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass({
  sci_Map$Map3$$anon$4: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$4", {
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map3$$anon$4.prototype.$classData = $d_sci_Map$Map3$$anon$4;
class $c_sci_Map$Map4$$anon$7 extends $c_sci_Map$Map4$Map4Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
  };
}
const $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass({
  sci_Map$Map4$$anon$7: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$7", {
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map4$$anon$7.prototype.$classData = $d_sci_Map$Map4$$anon$7;
class $c_sci_RangeIterator extends $c_sc_AbstractIterator {
  constructor(start, step, lastElement, initiallyEmpty) {
    super();
    this.sci_RangeIterator__f_step = 0;
    this.sci_RangeIterator__f_lastElement = 0;
    this.sci_RangeIterator__f__hasNext = false;
    this.sci_RangeIterator__f__next = 0;
    this.sci_RangeIterator__f_step = step;
    this.sci_RangeIterator__f_lastElement = lastElement;
    this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
    this.sci_RangeIterator__f__next = start
  };
  knownSize__I() {
    return (this.sci_RangeIterator__f__hasNext ? ((1 + $intDiv(((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0), this.sci_RangeIterator__f_step)) | 0) : 0)
  };
  hasNext__Z() {
    return this.sci_RangeIterator__f__hasNext
  };
  next__I() {
    if ((!this.sci_RangeIterator__f__hasNext)) {
      $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    };
    const value = this.sci_RangeIterator__f__next;
    this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
    this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
    return value
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_RangeIterator__f__next;
      const hi = (value >> 31);
      const value$1 = $imul(this.sci_RangeIterator__f_step, n);
      const hi$1 = (value$1 >> 31);
      const lo = ((value + value$1) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      if ((this.sci_RangeIterator__f_step > 0)) {
        const value$2 = this.sci_RangeIterator__f_lastElement;
        const hi$3 = (value$2 >> 31);
        let this$6__lo;
        let this$6__hi;
        if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
          const $$x1__lo = value$2;
          const $$x1__hi = hi$3;
          this$6__lo = $$x1__lo;
          this$6__hi = $$x1__hi
        } else {
          const $$x2__lo = lo;
          const $$x2__hi = hi$2;
          this$6__lo = $$x2__lo;
          this$6__hi = $$x2__hi
        };
        this.sci_RangeIterator__f__next = this$6__lo;
        const value$3 = this.sci_RangeIterator__f_lastElement;
        const hi$4 = (value$3 >> 31);
        this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4))
      } else if ((this.sci_RangeIterator__f_step < 0)) {
        const value$4 = this.sci_RangeIterator__f_lastElement;
        const hi$5 = (value$4 >> 31);
        let this$10__lo;
        let this$10__hi;
        if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
          const $$x3__lo = value$4;
          const $$x3__hi = hi$5;
          this$10__lo = $$x3__lo;
          this$10__hi = $$x3__hi
        } else {
          const $$x4__lo = lo;
          const $$x4__hi = hi$2;
          this$10__lo = $$x4__lo;
          this$10__hi = $$x4__hi
        };
        this.sci_RangeIterator__f__next = this$10__lo;
        const value$5 = this.sci_RangeIterator__f_lastElement;
        const hi$6 = (value$5 >> 31);
        this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6))
      }
    };
    return this
  };
  next__O() {
    return this.next__I()
  };
}
const $d_sci_RangeIterator = new $TypeData().initClass({
  sci_RangeIterator: 0
}, false, "scala.collection.immutable.RangeIterator", {
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_RangeIterator.prototype.$classData = $d_sci_RangeIterator;
const $ct_sci_Set$SetNIterator__I__ = (function($thiz, n) {
  $thiz.sci_Set$SetNIterator__f_current = 0;
  $thiz.sci_Set$SetNIterator__f_remainder = n;
  return $thiz
});
class $c_sci_Set$SetNIterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Set$SetNIterator__f_current = 0;
    this.sci_Set$SetNIterator__f_remainder = 0
  };
  knownSize__I() {
    return this.sci_Set$SetNIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sci_Set$SetNIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.apply__I__O(this.sci_Set$SetNIterator__f_current);
      this.sci_Set$SetNIterator__f_current = ((1 + this.sci_Set$SetNIterator__f_current) | 0);
      this.sci_Set$SetNIterator__f_remainder = (((-1) + this.sci_Set$SetNIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sci_Set$SetNIterator__f_current = ((this.sci_Set$SetNIterator__f_current + n) | 0);
      const b = ((this.sci_Set$SetNIterator__f_remainder - n) | 0);
      this.sci_Set$SetNIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
  };
  equals__O__Z(x) {
    return $f_s_reflect_ClassTag__equals__O__Z(this, x)
  };
  hashCode__I() {
    const x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  toString__T() {
    return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
  };
  runtimeClass__jl_Class() {
    return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
  };
  newArray__I__O(len) {
    const componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, len)
  };
}
const $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
const $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__ = (function($thiz, _out, autoFlush, charset) {
  $thiz.Ljava_io_PrintStream__f_autoFlush = autoFlush;
  $thiz.Ljava_io_PrintStream__f_charset = charset;
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  $thiz.Ljava_io_PrintStream__f_closing = false;
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  $thiz.Ljava_io_PrintStream__f_errorFlag = false;
  return $thiz
});
class $c_Ljava_io_PrintStream extends $c_Ljava_io_FilterOutputStream {
  constructor() {
    super();
    this.Ljava_io_PrintStream__f_encoder = null;
    this.Ljava_io_PrintStream__f_autoFlush = false;
    this.Ljava_io_PrintStream__f_charset = null;
    this.Ljava_io_PrintStream__f_closing = false;
    this.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
    this.Ljava_io_PrintStream__f_errorFlag = false;
    this.Ljava_io_PrintStream__f_bitmap$0 = false
  };
  println__T__V(s) {
    this.print__T__V(s);
    this.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n")
  };
}
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"))
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)))
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth))
}
const $f_sc_View__toString__T = (function($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
});
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $as_sc_View(obj) {
  return (($is_sc_View(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.View"))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
function $asArrayOf_sc_View(obj, depth) {
  return (($isArrayOf_sc_View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.View;", depth))
}
const $f_sci_IndexedSeqOps__slice__I__I__O = (function($thiz, from, until) {
  return (((from <= 0) && (until >= $thiz.length__I())) ? $thiz : $f_sc_IndexedSeqOps__slice__I__I__O($thiz, from, until))
});
class $c_sci_Set$Set2$$anon$1 extends $c_sci_Set$SetNIterator {
  constructor(outer) {
    super();
    this.sci_Set$Set2$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_Set$Set2$$anon$1__f_$outer = outer
    };
    $ct_sci_Set$SetNIterator__I__(this, 2)
  };
  apply__I__O(i) {
    return this.sci_Set$Set2$$anon$1__f_$outer.scala$collection$immutable$Set$Set2$$getElem__I__O(i)
  };
}
const $d_sci_Set$Set2$$anon$1 = new $TypeData().initClass({
  sci_Set$Set2$$anon$1: 0
}, false, "scala.collection.immutable.Set$Set2$$anon$1", {
  sci_Set$Set2$$anon$1: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2$$anon$1.prototype.$classData = $d_sci_Set$Set2$$anon$1;
class $c_sci_Set$Set3$$anon$2 extends $c_sci_Set$SetNIterator {
  constructor(outer) {
    super();
    this.sci_Set$Set3$$anon$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_Set$Set3$$anon$2__f_$outer = outer
    };
    $ct_sci_Set$SetNIterator__I__(this, 3)
  };
  apply__I__O(i) {
    return this.sci_Set$Set3$$anon$2__f_$outer.scala$collection$immutable$Set$Set3$$getElem__I__O(i)
  };
}
const $d_sci_Set$Set3$$anon$2 = new $TypeData().initClass({
  sci_Set$Set3$$anon$2: 0
}, false, "scala.collection.immutable.Set$Set3$$anon$2", {
  sci_Set$Set3$$anon$2: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3$$anon$2.prototype.$classData = $d_sci_Set$Set3$$anon$2;
class $c_sci_Set$Set4$$anon$3 extends $c_sci_Set$SetNIterator {
  constructor(outer) {
    super();
    this.sci_Set$Set4$$anon$3__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_Set$Set4$$anon$3__f_$outer = outer
    };
    $ct_sci_Set$SetNIterator__I__(this, 4)
  };
  apply__I__O(i) {
    return this.sci_Set$Set4$$anon$3__f_$outer.scala$collection$immutable$Set$Set4$$getElem__I__O(i)
  };
}
const $d_sci_Set$Set4$$anon$3 = new $TypeData().initClass({
  sci_Set$Set4$$anon$3: 0
}, false, "scala.collection.immutable.Set$Set4$$anon$3", {
  sci_Set$Set4$$anon$3: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4$$anon$3.prototype.$classData = $d_sci_Set$Set4$$anon$3;
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    const s = ("Future.collect partial function is not defined at: " + t$2);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$1 = new $TypeData().initClass({
  s_concurrent_Future$$anon$1: 0
}, false, "scala.concurrent.Future$$anon$1", {
  s_concurrent_Future$$anon$1: 1,
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$1.prototype.$classData = $d_s_concurrent_Future$$anon$1;
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$2 = new $TypeData().initClass({
  s_concurrent_Future$$anon$2: 0
}, false, "scala.concurrent.Future$$anon$2", {
  s_concurrent_Future$$anon$2: 1,
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$2.prototype.$classData = $d_s_concurrent_Future$$anon$2;
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$3 = new $TypeData().initClass({
  s_concurrent_Future$$anon$3: 0
}, false, "scala.concurrent.Future$$anon$3", {
  s_concurrent_Future$$anon$3: 1,
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$3.prototype.$classData = $d_s_concurrent_Future$$anon$3;
const $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try = (function($thiz) {
  let _$this = $thiz;
  while (true) {
    const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
    if ((state instanceof $c_s_util_Try)) {
      return $as_s_util_Try(state)
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      _$this = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this)
    } else {
      return null
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks = (function($thiz, state, callbacks) {
  let _$this = $thiz;
  while (true) {
    if ((state instanceof $c_s_util_Try)) {
      $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(_$this, callbacks, $as_s_util_Try(state));
      return callbacks
    } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
      if (_$this.compareAndSet__O__O__Z(state, ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(_$this, callbacks, $as_s_concurrent_impl_Promise$Callbacks(state)) : callbacks))) {
        return callbacks
      } else {
        state = _$this.ju_concurrent_atomic_AtomicReference__f_value
      }
    } else {
      const p = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
      const temp$state$2 = p.ju_concurrent_atomic_AtomicReference__f_value;
      _$this = p;
      state = temp$state$2
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks = (function($thiz, left, right) {
  while (true) {
    if ((left instanceof $c_s_concurrent_impl_Promise$Transformation)) {
      return new $c_s_concurrent_impl_Promise$ManyCallbacks($as_s_concurrent_impl_Promise$Transformation(left), right)
    } else {
      const m = $as_s_concurrent_impl_Promise$ManyCallbacks(left);
      const temp$left = m.s_concurrent_impl_Promise$ManyCallbacks__f_rest;
      const temp$right = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.s_concurrent_impl_Promise$ManyCallbacks__f_first, right);
      left = temp$left;
      right = temp$right
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V = (function($thiz, callbacks, resolved) {
  while (true) {
    if ((callbacks instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      const m = $as_s_concurrent_impl_Promise$ManyCallbacks(callbacks);
      m.s_concurrent_impl_Promise$ManyCallbacks__f_first.submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved);
      callbacks = m.s_concurrent_impl_Promise$ManyCallbacks__f_rest;
      continue
    } else {
      $as_s_concurrent_impl_Promise$Transformation(callbacks).submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved)
    };
    break
  }
});
const $ct_s_concurrent_impl_Promise$DefaultPromise__O__ = (function($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz
});
const $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__ = (function($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(result));
  return $thiz
});
const $ct_s_concurrent_impl_Promise$DefaultPromise__ = (function($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop);
  return $thiz
});
class $c_s_concurrent_impl_Promise$DefaultPromise extends $c_ju_concurrent_atomic_AtomicReference {
  onComplete__F1__s_concurrent_ExecutionContext__V(func, executor) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.ju_concurrent_atomic_AtomicReference__f_value, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor))
  };
  toString__T() {
    let _$this = this;
    while (true) {
      const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
      if ((state instanceof $c_s_util_Try)) {
        return (("Future(" + state) + ")")
      } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
        _$this = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this)
      } else {
        return "Future(<not completed>)"
      }
    }
  };
  tryComplete__s_util_Try__Z(value) {
    const state = this.ju_concurrent_atomic_AtomicReference__f_value;
    return ((!(state instanceof $c_s_util_Try)) && this.tryComplete0__O__s_util_Try__Z(state, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(value)))
  };
  tryComplete0__O__s_util_Try__Z(state, resolved) {
    let _$this = this;
    while (true) {
      if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        if (_$this.compareAndSet__O__O__Z(state, resolved)) {
          if ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(_$this, $as_s_concurrent_impl_Promise$Callbacks(state), resolved)
          };
          return true
        } else {
          state = _$this.ju_concurrent_atomic_AtomicReference__f_value
        }
      } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
        const p = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
        if ((p !== _$this)) {
          const temp$state$2 = p.ju_concurrent_atomic_AtomicReference__f_value;
          _$this = p;
          state = temp$state$2
        } else {
          return false
        }
      } else {
        return false
      }
    }
  };
  completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise(other) {
    if ((other !== this)) {
      const state = this.ju_concurrent_atomic_AtomicReference__f_value;
      if ((!(state instanceof $c_s_util_Try))) {
        let resolved;
        if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($as_s_concurrent_impl_Promise$DefaultPromise(other))
        } else {
          const this$2 = $m_s_Option$().apply__O__s_Option($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
          $m_s_$less$colon$less$();
          resolved = $as_s_util_Try((this$2.isEmpty__Z() ? null : this$2.get__O()))
        };
        if ((resolved !== null)) {
          this.tryComplete0__O__s_util_Try__Z(state, resolved)
        } else {
          other.onComplete__F1__s_concurrent_ExecutionContext__V(this, $m_s_concurrent_ExecutionContext$parasitic$())
        }
      }
    };
    return this
  };
  linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(target, link) {
    let _$this = this;
    while (true) {
      if ((_$this !== target)) {
        const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
        if ((state instanceof $c_s_util_Try)) {
          if ((!target.tryComplete0__O__s_util_Try__Z(target.ju_concurrent_atomic_AtomicReference__f_value, $as_s_util_Try(state)))) {
            throw new $c_jl_IllegalStateException("Cannot link completed promises together")
          }
        } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
          const l = ((link !== null) ? link : new $c_s_concurrent_impl_Promise$Link(target));
          const p = l.promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
          if (((_$this !== p) && _$this.compareAndSet__O__O__Z(state, l))) {
            if ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop)) {
              $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.ju_concurrent_atomic_AtomicReference__f_value, $as_s_concurrent_impl_Promise$Callbacks(state))
            }
          } else {
            target = p;
            link = l;
            continue
          }
        } else {
          _$this = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
          continue
        }
      };
      break
    }
  };
  unlink__s_util_Try__V(resolved) {
    let _$this = this;
    while (true) {
      const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
      if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
        const next = (_$this.compareAndSet__O__O__Z(state, resolved) ? $as_s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_impl_Promise$Link(state).ju_concurrent_atomic_AtomicReference__f_value) : _$this);
        _$this = next;
        continue
      } else {
        _$this.tryComplete0__O__s_util_Try__Z(state, resolved)
      };
      break
    }
  };
  apply__O__O(v1) {
    const resolved = $as_s_util_Try(v1);
    this.tryComplete0__O__s_util_Try__Z(this.ju_concurrent_atomic_AtomicReference__f_value, resolved)
  };
}
function $as_s_concurrent_impl_Promise$DefaultPromise(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$DefaultPromise) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$DefaultPromise"))
}
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$DefaultPromise)))
}
function $asArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$DefaultPromise;", depth))
}
const $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().initClass({
  s_concurrent_impl_Promise$DefaultPromise: 0
}, false, "scala.concurrent.impl.Promise$DefaultPromise", {
  s_concurrent_impl_Promise$DefaultPromise: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_concurrent_Promise: 1,
  s_concurrent_Future: 1,
  s_concurrent_Awaitable: 1,
  F1: 1
});
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.$classData = $d_s_concurrent_impl_Promise$DefaultPromise;
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null;
    this.s_reflect_AnyValManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_AnyValManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ClassTypeManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
  };
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
const $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V = (function($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    let $$x1;
    if ($thiz.jl_JSConsoleBasedPrintStream__f_isErr) {
      const x = console.error;
      $$x1 = $uZ((!(!x)))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
});
class $c_jl_JSConsoleBasedPrintStream extends $c_Ljava_io_PrintStream {
  constructor(isErr) {
    super();
    this.jl_JSConsoleBasedPrintStream__f_isErr = false;
    this.jl_JSConsoleBasedPrintStream__f_flushed = false;
    this.jl_JSConsoleBasedPrintStream__f_buffer = null;
    this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
    const out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
    $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
    this.jl_JSConsoleBasedPrintStream__f_flushed = true;
    this.jl_JSConsoleBasedPrintStream__f_buffer = ""
  };
  print__T__V(s) {
    this.java$lang$JSConsoleBasedPrintStream$$printString__T__V(((s === null) ? "null" : s))
  };
  java$lang$JSConsoleBasedPrintStream$$printString__T__V(s) {
    let rest = s;
    while ((rest !== "")) {
      const this$1 = rest;
      const nlPos = $uI(this$1.indexOf("\n"));
      if ((nlPos < 0)) {
        this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
        this.jl_JSConsoleBasedPrintStream__f_flushed = false;
        rest = ""
      } else {
        const $$x1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
        const this$3 = rest;
        $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $$x1) + $as_T(this$3.substring(0, nlPos))));
        this.jl_JSConsoleBasedPrintStream__f_buffer = "";
        this.jl_JSConsoleBasedPrintStream__f_flushed = true;
        const this$4 = rest;
        const beginIndex = ((1 + nlPos) | 0);
        rest = $as_T(this$4.substring(beginIndex))
      }
    }
  };
}
const $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
});
class $c_s_reflect_ManifestFactory$BooleanManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$ByteManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$CharManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$DoubleManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$FloatManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$IntManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$LongManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$UnitManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  };
}
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_View$()
  };
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
  stringPrefix__T() {
    return "View"
  };
}
const $f_sc_Set__equals__O__Z = (function($thiz, that) {
  if ($is_sc_Set(that)) {
    const x2 = $as_sc_Set(that);
    return (($thiz === x2) || (($thiz.size__I() === x2.size__I()) && $thiz.subsetOf__sc_Set__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
class $c_s_reflect_ManifestFactory$AnyManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
let $n_s_reflect_ManifestFactory$AnyManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_ManifestFactory$BooleanManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
let $n_s_reflect_ManifestFactory$BooleanManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_ManifestFactory$ByteManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
let $n_s_reflect_ManifestFactory$ByteManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_ManifestFactory$CharManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
let $n_s_reflect_ManifestFactory$CharManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_ManifestFactory$DoubleManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
let $n_s_reflect_ManifestFactory$DoubleManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_ManifestFactory$FloatManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
let $n_s_reflect_ManifestFactory$FloatManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_ManifestFactory$IntManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
let $n_s_reflect_ManifestFactory$IntManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_ManifestFactory$LongManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
let $n_s_reflect_ManifestFactory$LongManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Nothing$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
let $n_s_reflect_ManifestFactory$NothingManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
class $c_s_reflect_ManifestFactory$NullManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Null$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
let $n_s_reflect_ManifestFactory$NullManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
class $c_s_reflect_ManifestFactory$ObjectManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
let $n_s_reflect_ManifestFactory$ObjectManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_ManifestFactory$ShortManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
let $n_s_reflect_ManifestFactory$ShortManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_ManifestFactory$UnitManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
let $n_s_reflect_ManifestFactory$UnitManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
const $f_sc_Seq__equals__O__Z = (function($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = $as_sc_Seq(o);
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
class $c_sc_View$$anon$1 extends $c_sc_AbstractView {
  constructor(it$1) {
    super();
    this.sc_View$$anon$1__f_it$1 = null;
    this.sc_View$$anon$1__f_it$1 = it$1
  };
  iterator__sc_Iterator() {
    return $as_sc_Iterator(this.sc_View$$anon$1__f_it$1.apply__O())
  };
}
const $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
const $ct_sc_View$Appended__sc_IterableOps__O__ = (function($thiz, underlying, elem) {
  $thiz.sc_View$Appended__f_underlying = underlying;
  $thiz.sc_View$Appended__f_elem = elem;
  return $thiz
});
class $c_sc_View$Appended extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Appended__f_underlying = null;
    this.sc_View$Appended__f_elem = null
  };
  iterator__sc_Iterator() {
    return new $c_sc_View$Concat(this.sc_View$Appended__f_underlying, new $c_sc_View$Single(this.sc_View$Appended__f_elem)).iterator__sc_Iterator()
  };
  knownSize__I() {
    const size = this.sc_View$Appended__f_underlying.knownSize__I();
    return ((size >= 0) ? ((1 + size) | 0) : (-1))
  };
  isEmpty__Z() {
    return false
  };
}
const $d_sc_View$Appended = new $TypeData().initClass({
  sc_View$Appended: 0
}, false, "scala.collection.View$Appended", {
  sc_View$Appended: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Appended.prototype.$classData = $d_sc_View$Appended;
class $c_sc_View$Concat extends $c_sc_AbstractView {
  constructor(prefix, suffix) {
    super();
    this.sc_View$Concat__f_prefix = null;
    this.sc_View$Concat__f_suffix = null;
    this.sc_View$Concat__f_prefix = prefix;
    this.sc_View$Concat__f_suffix = suffix
  };
  iterator__sc_Iterator() {
    const this$2 = this.sc_View$Concat__f_prefix.iterator__sc_Iterator();
    const xs = new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.sc_View$Concat__f_suffix.iterator__sc_Iterator()))(this));
    return this$2.concat__F0__sc_Iterator(xs)
  };
  knownSize__I() {
    const prefixSize = this.sc_View$Concat__f_prefix.knownSize__I();
    if ((prefixSize >= 0)) {
      const suffixSize = this.sc_View$Concat__f_suffix.knownSize__I();
      return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1))
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    return (this.sc_View$Concat__f_prefix.isEmpty__Z() && this.sc_View$Concat__f_suffix.isEmpty__Z())
  };
}
const $d_sc_View$Concat = new $TypeData().initClass({
  sc_View$Concat: 0
}, false, "scala.collection.View$Concat", {
  sc_View$Concat: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Concat.prototype.$classData = $d_sc_View$Concat;
const $ct_sc_View$Drop__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Drop__f_underlying = underlying;
  $thiz.sc_View$Drop__f_n = n;
  $thiz.sc_View$Drop__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Drop extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Drop__f_underlying = null;
    this.sc_View$Drop__f_n = 0;
    this.sc_View$Drop__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Drop__f_underlying.iterator__sc_Iterator().drop__I__sc_Iterator(this.sc_View$Drop__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Drop__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const x = ((size - this.sc_View$Drop__f_normN) | 0);
      return ((x > 0) ? x : 0)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Drop = new $TypeData().initClass({
  sc_View$Drop: 0
}, false, "scala.collection.View$Drop", {
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Drop.prototype.$classData = $d_sc_View$Drop;
const $ct_sc_View$Map__sc_IterableOps__F1__ = (function($thiz, underlying, f) {
  $thiz.sc_View$Map__f_underlying = underlying;
  $thiz.sc_View$Map__f_f = f;
  return $thiz
});
class $c_sc_View$Map extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Map__f_underlying = null;
    this.sc_View$Map__f_f = null
  };
}
class $c_sc_View$Single extends $c_sc_AbstractView {
  constructor(a) {
    super();
    this.sc_View$Single__f_a = null;
    this.sc_View$Single__f_a = a
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = this.sc_View$Single__f_a;
    return new $c_sc_Iterator$$anon$20(a)
  };
  knownSize__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
}
const $d_sc_View$Single = new $TypeData().initClass({
  sc_View$Single: 0
}, false, "scala.collection.View$Single", {
  sc_View$Single: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Single.prototype.$classData = $d_sc_View$Single;
const $ct_sc_View$Take__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Take__f_underlying = underlying;
  $thiz.sc_View$Take__f_n = n;
  $thiz.sc_View$Take__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Take extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Take__f_underlying = null;
    this.sc_View$Take__f_n = 0;
    this.sc_View$Take__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Take__f_underlying.iterator__sc_Iterator().take__I__sc_Iterator(this.sc_View$Take__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Take__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const that = this.sc_View$Take__f_normN;
      return ((size < that) ? size : that)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Take = new $TypeData().initClass({
  sc_View$Take: 0
}, false, "scala.collection.View$Take", {
  sc_View$Take: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Take.prototype.$classData = $d_sc_View$Take;
class $c_sc_AbstractSet extends $c_sc_AbstractIterable {
  equals__O__Z(that) {
    return $f_sc_Set__equals__O__Z(this, that)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_IterableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
  };
  stringPrefix__T() {
    return "Set"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  subsetOf__sc_Set__Z(that) {
    return this.forall__F1__Z(that)
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
}
const $f_sc_Map__equals__O__Z = (function($thiz, o) {
  if ($is_sc_Map(o)) {
    const x2 = $as_sc_Map(o);
    if (($thiz === x2)) {
      return true
    } else if (($thiz.size__I() === x2.size__I())) {
      try {
        return $thiz.forall__F1__Z(new $c_sjsr_AnonFunction1(((this$1, x2$1) => ((x0$1$2) => {
          const x0$1 = $as_T2(x0$1$2);
          if ((x0$1 !== null)) {
            const k = x0$1._1__O();
            const v = x0$1._2__O();
            return $m_sr_BoxesRunTime$().equals__O__O__Z(x2$1.getOrElse__O__F0__O(k, new $c_sjsr_AnonFunction0(((this$2) => (() => $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinel))(this$1))), v)
          } else {
            throw new $c_s_MatchError(x0$1)
          }
        }))($thiz, x2)))
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false
        } else {
          throw e
        }
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth))
}
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  appended__O__O(elem) {
    return $f_sc_SeqOps__appended__O__O(this, elem)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
  };
  size__I() {
    return this.length__I()
  };
  isDefinedAt__I__Z(idx) {
    return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  sizeCompare__I__I(otherSize) {
    return this.lengthCompare__I__I(otherSize)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
  };
  isDefinedAt__O__Z(x) {
    return this.isDefinedAt__I__Z($uI(x))
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
  appended__O__sc_SeqView(elem) {
    return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem)
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
  appended__O__O(elem) {
    return this.appended__O__sc_SeqView(elem)
  };
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $as_sci_Set(obj) {
  return (($is_sci_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set"))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
function $asArrayOf_sci_Set(obj, depth) {
  return (($isArrayOf_sci_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth))
}
const $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V = (function($thiz, t, e) {
  const wasInterrupted = (t instanceof $c_jl_InterruptedException);
  if ((wasInterrupted || $m_s_util_control_NonFatal$().apply__jl_Throwable__Z(t))) {
    const completed = $thiz.tryComplete0__O__s_util_Try__Z($thiz.ju_concurrent_atomic_AtomicReference__f_value, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(new $c_s_util_Failure(t)));
    if ((completed && wasInterrupted)) {
      const this$1 = $m_jl_Thread$().jl_Thread$__f_SingleThread;
      this$1.jl_Thread__f_java$lang$Thread$$interruptedState = true
    };
    if (((($thiz.s_concurrent_impl_Promise$Transformation__f__xform === 5) || ($thiz.s_concurrent_impl_Promise$Transformation__f__xform === 6)) || (!completed))) {
      e.reportFailure__jl_Throwable__V(t)
    }
  } else {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(t)
  }
});
const $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__ = (function($thiz, _fun, _ec, _arg, _xform) {
  $thiz.s_concurrent_impl_Promise$Transformation__f__fun = _fun;
  $thiz.s_concurrent_impl_Promise$Transformation__f__ec = _ec;
  $thiz.s_concurrent_impl_Promise$Transformation__f__arg = _arg;
  $thiz.s_concurrent_impl_Promise$Transformation__f__xform = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz
});
const $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__ = (function($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz
});
class $c_s_concurrent_impl_Promise$Transformation extends $c_s_concurrent_impl_Promise$DefaultPromise {
  constructor() {
    super();
    this.s_concurrent_impl_Promise$Transformation__f__fun = null;
    this.s_concurrent_impl_Promise$Transformation__f__ec = null;
    this.s_concurrent_impl_Promise$Transformation__f__arg = null;
    this.s_concurrent_impl_Promise$Transformation__f__xform = 0
  };
  submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved) {
    this.s_concurrent_impl_Promise$Transformation__f__arg = resolved;
    const e = this.s_concurrent_impl_Promise$Transformation__f__ec;
    try {
      e.execute__jl_Runnable__V(this)
    } catch (e$2) {
      const e$3 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e$2);
      if ((e$3 !== null)) {
        this.s_concurrent_impl_Promise$Transformation__f__fun = null;
        this.s_concurrent_impl_Promise$Transformation__f__arg = null;
        this.s_concurrent_impl_Promise$Transformation__f__ec = null;
        $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e)
      } else {
        throw e$2
      }
    };
    return this
  };
  run__V() {
    const v = this.s_concurrent_impl_Promise$Transformation__f__arg;
    const fun = this.s_concurrent_impl_Promise$Transformation__f__fun;
    const ec = this.s_concurrent_impl_Promise$Transformation__f__ec;
    this.s_concurrent_impl_Promise$Transformation__f__fun = null;
    this.s_concurrent_impl_Promise$Transformation__f__arg = null;
    this.s_concurrent_impl_Promise$Transformation__f__ec = null;
    try {
      const x1 = this.s_concurrent_impl_Promise$Transformation__f__xform;
      let resolvedResult;
      switch (x1) {
        case 0: {
          resolvedResult = null;
          break
        }
        case 1: {
          resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success(fun.apply__O__O(v.get__O())) : v);
          break
        }
        case 2: {
          if ((v instanceof $c_s_util_Success)) {
            const f = fun.apply__O__O(v.get__O());
            if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
              $as_s_concurrent_impl_Promise$DefaultPromise(f).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null)
            } else {
              this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_Future(f))
            };
            resolvedResult = null
          } else {
            resolvedResult = v
          };
          break
        }
        case 3: {
          resolvedResult = $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try($as_s_util_Try(fun.apply__O__O(v)));
          break
        }
        case 4: {
          const f$2 = fun.apply__O__O(v);
          if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            $as_s_concurrent_impl_Promise$DefaultPromise(f$2).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null)
          } else {
            this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_Future(f$2))
          };
          resolvedResult = null;
          break
        }
        case 5: {
          v.foreach__F1__V(fun);
          resolvedResult = null;
          break
        }
        case 6: {
          fun.apply__O__O(v);
          resolvedResult = null;
          break
        }
        case 7: {
          resolvedResult = ((v instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(v.recover__s_PartialFunction__s_util_Try($as_s_PartialFunction(fun))) : v);
          break
        }
        case 8: {
          if ((v instanceof $c_s_util_Failure)) {
            const f$3 = $as_s_concurrent_Future($as_s_PartialFunction(fun).applyOrElse__O__F1__O($as_s_util_Failure(v).s_util_Failure__f_exception, $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailed));
            resolvedResult = ((f$3 !== $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailedMarker) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? $as_s_concurrent_impl_Promise$DefaultPromise(f$3).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null) : this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise(f$3)), null) : v)
          } else {
            resolvedResult = v
          };
          break
        }
        case 9: {
          resolvedResult = (((v instanceof $c_s_util_Failure) || $uZ(fun.apply__O__O(v.get__O()))) ? v : $m_s_concurrent_Future$().s_concurrent_Future$__f_filterFailure);
          break
        }
        case 10: {
          resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success($as_s_PartialFunction(fun).applyOrElse__O__F1__O(v.get__O(), $m_s_concurrent_Future$().s_concurrent_Future$__f_collectFailed)) : v);
          break
        }
        default: {
          resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.s_concurrent_impl_Promise$Transformation__f__xform)))
        }
      };
      if ((resolvedResult !== null)) {
        this.tryComplete0__O__s_util_Try__Z(this.ju_concurrent_atomic_AtomicReference__f_value, resolvedResult)
      }
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$2, ec)
      } else {
        throw e
      }
    }
  };
}
function $as_s_concurrent_impl_Promise$Transformation(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$Transformation) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Transformation"))
}
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$Transformation)))
}
function $asArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$Transformation;", depth))
}
const $d_s_concurrent_impl_Promise$Transformation = new $TypeData().initClass({
  s_concurrent_impl_Promise$Transformation: 0
}, false, "scala.concurrent.impl.Promise$Transformation", {
  s_concurrent_impl_Promise$Transformation: 1,
  s_concurrent_impl_Promise$DefaultPromise: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_concurrent_Promise: 1,
  s_concurrent_Future: 1,
  s_concurrent_Awaitable: 1,
  F1: 1,
  s_concurrent_impl_Promise$Callbacks: 1,
  jl_Runnable: 1,
  s_concurrent_Batchable: 1,
  s_concurrent_OnCompleteRunnable: 1
});
$c_s_concurrent_impl_Promise$Transformation.prototype.$classData = $d_s_concurrent_impl_Promise$Transformation;
class $c_sc_AbstractMap extends $c_sc_AbstractIterable {
  equals__O__Z(o) {
    return $f_sc_Map__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().mapHash__sc_Map__I(this)
  };
  stringPrefix__T() {
    return "Map"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.mapFactory__sc_MapFactory().from__sc_IterableOnce__O(coll))
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1)
  };
  foreachEntry__F2__V(f) {
    $f_sc_MapOps__foreachEntry__F2__V(this, f)
  };
  isDefinedAt__O__Z(key) {
    return this.contains__O__Z(key)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $as_sc_IterableOps(this.mapFactory__sc_MapFactory().from__sc_IterableOnce__O(coll))
  };
}
const $ct_sc_SeqView$Appended__sc_SeqOps__O__ = (function($thiz, underlying, elem) {
  $thiz.sc_SeqView$Appended__f_underlying = underlying;
  $thiz.sc_SeqView$Appended__f_elem = elem;
  $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem);
  return $thiz
});
class $c_sc_SeqView$Appended extends $c_sc_View$Appended {
  constructor() {
    super();
    this.sc_SeqView$Appended__f_underlying = null;
    this.sc_SeqView$Appended__f_elem = null
  };
  appended__O__sc_SeqView(elem) {
    return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem)
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  apply__I__O(idx) {
    return ((idx === this.sc_SeqView$Appended__f_underlying.length__I()) ? this.sc_SeqView$Appended__f_elem : this.sc_SeqView$Appended__f_underlying.apply__I__O(idx))
  };
  length__I() {
    return ((1 + this.sc_SeqView$Appended__f_underlying.length__I()) | 0)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
  appended__O__O(elem) {
    return this.appended__O__sc_SeqView(elem)
  };
}
const $d_sc_SeqView$Appended = new $TypeData().initClass({
  sc_SeqView$Appended: 0
}, false, "scala.collection.SeqView$Appended", {
  sc_SeqView$Appended: 1,
  sc_View$Appended: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Appended.prototype.$classData = $d_sc_SeqView$Appended;
const $ct_sc_SeqView$Drop__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Drop__f_underlying = underlying;
  $thiz.sc_SeqView$Drop__f_n = n;
  $ct_sc_View$Drop__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Drop extends $c_sc_View$Drop {
  constructor() {
    super();
    this.sc_SeqView$Drop__f_underlying = null;
    this.sc_SeqView$Drop__f_n = 0
  };
  appended__O__sc_SeqView(elem) {
    return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  length__I() {
    const this$1 = this.sc_SeqView$Drop__f_underlying;
    const x = ((this$1.length__I() - this.sc_View$Drop__f_normN) | 0);
    return ((x > 0) ? x : 0)
  };
  apply__I__O(i) {
    return this.sc_SeqView$Drop__f_underlying.apply__I__O(((i + this.sc_View$Drop__f_normN) | 0))
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this.sc_SeqView$Drop__f_underlying, ((this.sc_SeqView$Drop__f_n + n) | 0))
  };
  appended__O__O(elem) {
    return this.appended__O__sc_SeqView(elem)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
const $d_sc_SeqView$Drop = new $TypeData().initClass({
  sc_SeqView$Drop: 0
}, false, "scala.collection.SeqView$Drop", {
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Drop.prototype.$classData = $d_sc_SeqView$Drop;
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  iterator__sc_Iterator() {
    return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
  };
  knownSize__I() {
    return this.sc_SeqView$Id__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
const $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
const $ct_sc_SeqView$Map__sc_SeqOps__F1__ = (function($thiz, underlying, f) {
  $thiz.sc_SeqView$Map__f_underlying = underlying;
  $thiz.sc_SeqView$Map__f_f = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz
});
class $c_sc_SeqView$Map extends $c_sc_View$Map {
  constructor() {
    super();
    this.sc_SeqView$Map__f_underlying = null;
    this.sc_SeqView$Map__f_f = null
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Map__f_f.apply__O__O(this.sc_SeqView$Map__f_underlying.apply__I__O(idx))
  };
  length__I() {
    return this.sc_SeqView$Map__f_underlying.length__I()
  };
}
const $ct_sc_SeqView$Take__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Take__f_underlying = underlying;
  $thiz.sc_SeqView$Take__f_n = n;
  $ct_sc_View$Take__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Take extends $c_sc_View$Take {
  constructor() {
    super();
    this.sc_SeqView$Take__f_underlying = null;
    this.sc_SeqView$Take__f_n = 0
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  apply__I__O(idx) {
    if ((idx < this.sc_SeqView$Take__f_n)) {
      return this.sc_SeqView$Take__f_underlying.apply__I__O(idx)
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + ((this.sc_SeqView$Take__f_underlying.knownSize__I() >= 0) ? (((-1) + this.knownSize__I()) | 0) : "unknown")) + ")"))
    }
  };
  length__I() {
    const x = this.sc_SeqView$Take__f_underlying.length__I();
    const that = this.sc_View$Take__f_normN;
    return ((x < that) ? x : that)
  };
}
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Map)))
}
function $as_sci_Map(obj) {
  return (($is_sci_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map"))
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map)))
}
function $asArrayOf_sci_Map(obj, depth) {
  return (($isArrayOf_sci_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map;", depth))
}
class $c_sc_AbstractIndexedSeqView extends $c_sc_AbstractSeqView {
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  appended__O__O(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
  appended__O__sc_SeqView(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
}
class $c_sci_AbstractSet extends $c_sc_AbstractSet {
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Set$()
  };
}
class $c_sc_IndexedSeqView$Appended extends $c_sc_SeqView$Appended {
  constructor(underlying, elem) {
    super();
    $ct_sc_SeqView$Appended__sc_SeqOps__O__(this, underlying, elem)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  appended__O__O(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
  appended__O__sc_SeqView(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
}
const $d_sc_IndexedSeqView$Appended = new $TypeData().initClass({
  sc_IndexedSeqView$Appended: 0
}, false, "scala.collection.IndexedSeqView$Appended", {
  sc_IndexedSeqView$Appended: 1,
  sc_SeqView$Appended: 1,
  sc_View$Appended: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Appended.prototype.$classData = $d_sc_IndexedSeqView$Appended;
class $c_sc_IndexedSeqView$Drop extends $c_sc_SeqView$Drop {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Drop__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  appended__O__O(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
  appended__O__sc_SeqView(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
}
const $d_sc_IndexedSeqView$Drop = new $TypeData().initClass({
  sc_IndexedSeqView$Drop: 0
}, false, "scala.collection.IndexedSeqView$Drop", {
  sc_IndexedSeqView$Drop: 1,
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Drop.prototype.$classData = $d_sc_IndexedSeqView$Drop;
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  appended__O__O(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
  appended__O__sc_SeqView(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sc_IndexedSeqView$Map extends $c_sc_SeqView$Map {
  constructor(underlying, f) {
    super();
    $ct_sc_SeqView$Map__sc_SeqOps__F1__(this, underlying, f)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  appended__O__O(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
}
const $d_sc_IndexedSeqView$Map = new $TypeData().initClass({
  sc_IndexedSeqView$Map: 0
}, false, "scala.collection.IndexedSeqView$Map", {
  sc_IndexedSeqView$Map: 1,
  sc_SeqView$Map: 1,
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Map.prototype.$classData = $d_sc_IndexedSeqView$Map;
class $c_sc_IndexedSeqView$Slice extends $c_sc_AbstractIndexedSeqView {
  constructor(underlying, from, until) {
    super();
    this.sc_IndexedSeqView$Slice__f_underlying = null;
    this.sc_IndexedSeqView$Slice__f_lo = 0;
    this.sc_IndexedSeqView$Slice__f_hi = 0;
    this.sc_IndexedSeqView$Slice__f_len = 0;
    this.sc_IndexedSeqView$Slice__f_underlying = underlying;
    this.sc_IndexedSeqView$Slice__f_lo = ((from > 0) ? from : 0);
    const x = ((until > 0) ? until : 0);
    const that = underlying.length__I();
    this.sc_IndexedSeqView$Slice__f_hi = ((x < that) ? x : that);
    const x$1 = ((this.sc_IndexedSeqView$Slice__f_hi - this.sc_IndexedSeqView$Slice__f_lo) | 0);
    this.sc_IndexedSeqView$Slice__f_len = ((x$1 > 0) ? x$1 : 0)
  };
  apply__I__O(i) {
    return this.sc_IndexedSeqView$Slice__f_underlying.apply__I__O(((this.sc_IndexedSeqView$Slice__f_lo + i) | 0))
  };
  length__I() {
    return this.sc_IndexedSeqView$Slice__f_len
  };
}
const $d_sc_IndexedSeqView$Slice = new $TypeData().initClass({
  sc_IndexedSeqView$Slice: 0
}, false, "scala.collection.IndexedSeqView$Slice", {
  sc_IndexedSeqView$Slice: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Slice.prototype.$classData = $d_sc_IndexedSeqView$Slice;
class $c_sc_IndexedSeqView$Take extends $c_sc_SeqView$Take {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Take__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  appended__O__O(elem) {
    return new $c_sc_IndexedSeqView$Appended(this, elem)
  };
}
const $d_sc_IndexedSeqView$Take = new $TypeData().initClass({
  sc_IndexedSeqView$Take: 0
}, false, "scala.collection.IndexedSeqView$Take", {
  sc_IndexedSeqView$Take: 1,
  sc_SeqView$Take: 1,
  sc_View$Take: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Take.prototype.$classData = $d_sc_IndexedSeqView$Take;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_scm_ArrayBufferView extends $c_sc_AbstractIndexedSeqView {
  constructor(array, length) {
    super();
    this.scm_ArrayBufferView__f_array = null;
    this.scm_ArrayBufferView__f_length = 0;
    this.scm_ArrayBufferView__f_array = array;
    this.scm_ArrayBufferView__f_length = length
  };
  length__I() {
    return this.scm_ArrayBufferView__f_length
  };
  apply__I__O(n) {
    if ((n < this.scm_ArrayBufferView__f_length)) {
      return this.scm_ArrayBufferView__f_array.get(n)
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBufferView__f_length) | 0)) + ")"))
    }
  };
  className__T() {
    return "ArrayBufferView"
  };
}
const $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
class $c_sci_AbstractMap extends $c_sc_AbstractMap {
  mapFactory__sc_MapFactory() {
    return $m_sci_Map$()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Iterable$()
  };
}
const $f_sci_IndexedSeq__canEqual__O__Z = (function($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
});
const $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z = (function($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
class $c_sci_Set$EmptySet$ extends $c_sci_AbstractSet {
  size__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  knownSize__I() {
    return 0
  };
  subsetOf__sc_Set__Z(that) {
    return true
  };
  contains__O__Z(elem) {
    return false
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  incl__O__sci_SetOps(elem) {
    return new $c_sci_Set$Set1(elem)
  };
}
const $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
let $n_sci_Set$EmptySet$ = (void 0);
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
class $c_sc_StringView extends $c_sc_AbstractIndexedSeqView {
  constructor(s) {
    super();
    this.sc_StringView__f_s = null;
    this.sc_StringView__f_s = s
  };
  length__I() {
    const this$1 = this.sc_StringView__f_s;
    return $uI(this$1.length)
  };
  toString__T() {
    return (("StringView(" + this.sc_StringView__f_s) + ")")
  };
  productPrefix__T() {
    return "StringView"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sc_StringView)) {
      const StringView$1 = $as_sc_StringView(x$1);
      return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
    } else {
      return false
    }
  };
  apply__I__O(i) {
    const this$1 = this.sc_StringView__f_s;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sc_StringView(obj) {
  return (((obj instanceof $c_sc_StringView) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StringView"))
}
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
function $asArrayOf_sc_StringView(obj, depth) {
  return (($isArrayOf_sc_StringView(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StringView;", depth))
}
const $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
class $c_sci_Set$Set1 extends $c_sci_AbstractSet {
  constructor(elem1) {
    super();
    this.sci_Set$Set1__f_elem1 = null;
    this.sci_Set$Set1__f_elem1 = elem1
  };
  size__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 1
  };
  contains__O__Z(elem) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = this.sci_Set$Set1__f_elem1;
    return new $c_sc_Iterator$$anon$20(a)
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set1__f_elem1)
  };
  forall__F1__Z(p) {
    return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
  };
  head__O() {
    return this.sci_Set$Set1__f_elem1
  };
  tail__O() {
    return $m_sci_Set$EmptySet$()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
class $c_sci_Set$Set2 extends $c_sci_AbstractSet {
  constructor(elem1, elem2) {
    super();
    this.sci_Set$Set2__f_elem1 = null;
    this.sci_Set$Set2__f_elem2 = null;
    this.sci_Set$Set2__f_elem1 = elem1;
    this.sci_Set$Set2__f_elem2 = elem2
  };
  size__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 2
  };
  contains__O__Z(elem) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Set$Set2$$anon$1(this)
  };
  scala$collection$immutable$Set$Set2$$getElem__I__O(i) {
    switch (i) {
      case 0: {
        return this.sci_Set$Set2__f_elem1;
        break
      }
      case 1: {
        return this.sci_Set$Set2__f_elem2;
        break
      }
      default: {
        throw new $c_s_MatchError(i)
      }
    }
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set2__f_elem1);
    f.apply__O__O(this.sci_Set$Set2__f_elem2)
  };
  forall__F1__Z(p) {
    return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
  };
  head__O() {
    return this.sci_Set$Set2__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set1(this.sci_Set$Set2__f_elem2)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
class $c_sci_Set$Set3 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3) {
    super();
    this.sci_Set$Set3__f_elem1 = null;
    this.sci_Set$Set3__f_elem2 = null;
    this.sci_Set$Set3__f_elem3 = null;
    this.sci_Set$Set3__f_elem1 = elem1;
    this.sci_Set$Set3__f_elem2 = elem2;
    this.sci_Set$Set3__f_elem3 = elem3
  };
  size__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 3
  };
  contains__O__Z(elem) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Set$Set3$$anon$2(this)
  };
  scala$collection$immutable$Set$Set3$$getElem__I__O(i) {
    switch (i) {
      case 0: {
        return this.sci_Set$Set3__f_elem1;
        break
      }
      case 1: {
        return this.sci_Set$Set3__f_elem2;
        break
      }
      case 2: {
        return this.sci_Set$Set3__f_elem3;
        break
      }
      default: {
        throw new $c_s_MatchError(i)
      }
    }
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set3__f_elem1);
    f.apply__O__O(this.sci_Set$Set3__f_elem2);
    f.apply__O__O(this.sci_Set$Set3__f_elem3)
  };
  forall__F1__Z(p) {
    return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
  };
  head__O() {
    return this.sci_Set$Set3__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
class $c_sci_Set$Set4 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3, elem4) {
    super();
    this.sci_Set$Set4__f_elem1 = null;
    this.sci_Set$Set4__f_elem2 = null;
    this.sci_Set$Set4__f_elem3 = null;
    this.sci_Set$Set4__f_elem4 = null;
    this.sci_Set$Set4__f_elem1 = elem1;
    this.sci_Set$Set4__f_elem2 = elem2;
    this.sci_Set$Set4__f_elem3 = elem3;
    this.sci_Set$Set4__f_elem4 = elem4
  };
  size__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 4
  };
  contains__O__Z(elem) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
  };
  incl__O__sci_Set(elem) {
    if (this.contains__O__Z(elem)) {
      return this
    } else {
      const this$1 = $m_sci_HashSet$();
      const this$2 = this$1.sci_HashSet$__f_EmptySet;
      const elem$1 = this.sci_Set$Set4__f_elem1;
      const this$3 = this$2.incl__O__sci_HashSet(elem$1);
      const elem$2 = this.sci_Set$Set4__f_elem2;
      const this$4 = this$3.incl__O__sci_HashSet(elem$2);
      const elem$3 = this.sci_Set$Set4__f_elem3;
      const this$5 = this$4.incl__O__sci_HashSet(elem$3);
      const elem$4 = this.sci_Set$Set4__f_elem4;
      const this$6 = this$5.incl__O__sci_HashSet(elem$4);
      return this$6.incl__O__sci_HashSet(elem)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sci_Set$Set4$$anon$3(this)
  };
  scala$collection$immutable$Set$Set4$$getElem__I__O(i) {
    switch (i) {
      case 0: {
        return this.sci_Set$Set4__f_elem1;
        break
      }
      case 1: {
        return this.sci_Set$Set4__f_elem2;
        break
      }
      case 2: {
        return this.sci_Set$Set4__f_elem3;
        break
      }
      case 3: {
        return this.sci_Set$Set4__f_elem4;
        break
      }
      default: {
        throw new $c_s_MatchError(i)
      }
    }
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set4__f_elem1);
    f.apply__O__O(this.sci_Set$Set4__f_elem2);
    f.apply__O__O(this.sci_Set$Set4__f_elem3);
    f.apply__O__O(this.sci_Set$Set4__f_elem4)
  };
  forall__F1__Z(p) {
    return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
  };
  head__O() {
    return this.sci_Set$Set4__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4)
  };
  buildTo__scm_Builder__scm_Builder(builder) {
    return $as_scm_Builder(builder.addOne__O__scm_Growable(this.sci_Set$Set4__f_elem1).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem2).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem3).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem4))
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set4(obj) {
  return (((obj instanceof $c_sci_Set$Set4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set4"))
}
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set4)))
}
function $asArrayOf_sci_Set$Set4(obj, depth) {
  return (($isArrayOf_sci_Set$Set4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set4;", depth))
}
const $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $is_sci_SortedSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_SortedSet)))
}
function $as_sci_SortedSet(obj) {
  return (($is_sci_SortedSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SortedSet"))
}
function $isArrayOf_sci_SortedSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SortedSet)))
}
function $asArrayOf_sci_SortedSet(obj, depth) {
  return (($isArrayOf_sci_SortedSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SortedSet;", depth))
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_sci_Map$EmptyMap$ extends $c_sci_AbstractMap {
  size__I() {
    return 0
  };
  knownSize__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  apply__O__E(key) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  };
  contains__O__Z(key) {
    return false
  };
  getOrElse__O__F0__O(key, default$1) {
    return default$1.apply__O()
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  updated__O__O__sci_MapOps(key, value) {
    return new $c_sci_Map$Map1(key, value)
  };
  apply__O__O(key) {
    this.apply__O__E(key)
  };
}
const $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
let $n_sci_Map$EmptyMap$ = (void 0);
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
class $c_sci_Map$Map1 extends $c_sci_AbstractMap {
  constructor(key1, value1) {
    super();
    this.sci_Map$Map1__f_key1 = null;
    this.sci_Map$Map1__f_value1 = null;
    this.sci_Map$Map1__f_key1 = key1;
    this.sci_Map$Map1__f_value1 = value1
  };
  size__I() {
    return 1
  };
  knownSize__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
      return this.sci_Map$Map1__f_value1
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : default$1.apply__O())
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
    return new $c_sc_Iterator$$anon$20(a)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1))
  };
  forall__F1__Z(p) {
    return $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    let h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
class $c_sci_Map$Map2 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2) {
    super();
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = key1;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = value1;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = key2;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = value2
  };
  size__I() {
    return 2
  };
  knownSize__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1)) {
      return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2)) {
      return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 : default$1.apply__O()))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map2$$anon$1(this)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, value, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2, key, value)))
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1));
    f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2))
  };
  forall__F1__Z(p) {
    return ($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2))))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    let h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
class $c_sci_Map$Map3 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3) {
    super();
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = key1;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = value1;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = key2;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = value2;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = key3;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = value3
  };
  size__I() {
    return 3
  };
  knownSize__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 : default$1.apply__O())))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map3$$anon$4(this)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3, key, value))))
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1));
    f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2));
    f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3))
  };
  forall__F1__Z(p) {
    return (($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3))))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    let h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
class $c_sci_Map$Map4 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3, key4, value4) {
    super();
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = key1;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = value1;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = key2;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = value2;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = key3;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = value3;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = key4;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = value4
  };
  size__I() {
    return 4
  };
  knownSize__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 : default$1.apply__O()))))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map4$$anon$7(this)
  };
  updated__O__O__sci_Map(key, value) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, value)
    } else {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap.updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4).updated__O__O__sci_HashMap(key, value)
    }
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1));
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2));
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3));
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4))
  };
  forall__F1__Z(p) {
    return ((($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4))))
  };
  buildTo__sci_HashMapBuilder__sci_HashMapBuilder(builder) {
    return builder.addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    let h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = $imul(c, (1 | h));
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
function $as_sci_Map$Map4(obj) {
  return (((obj instanceof $c_sci_Map$Map4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map4"))
}
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map4)))
}
function $asArrayOf_sci_Map$Map4(obj, depth) {
  return (($isArrayOf_sci_Map$Map4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map4;", depth))
}
const $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
const $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet = (function($thiz, newRootNode) {
  return (($thiz.sci_HashSet__f_rootNode === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode))
});
class $c_sci_HashSet extends $c_sci_AbstractSet {
  constructor(rootNode) {
    super();
    this.sci_HashSet__f_rootNode = null;
    this.sci_HashSet__f_rootNode = rootNode
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_HashSet$()
  };
  knownSize__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  size__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_SetIterator(this.sci_HashSet__f_rootNode))
  };
  contains__O__Z(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    return this.sci_HashSet__f_rootNode.contains__O__I__I__I__Z(element, elementUnimprovedHash, elementHash, 0)
  };
  incl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  excl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  foreach__F1__V(f) {
    this.sci_HashSet__f_rootNode.foreach__F1__V(f)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(that);
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashSet__f_rootNode;
        const x$2 = x2.sci_HashSet__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Set__equals__O__Z(this, that)
    }
  };
  className__T() {
    return "HashSet"
  };
  hashCode__I() {
    const it = new $c_sci_SetHashIterator(this.sci_HashSet__f_rootNode);
    const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(it, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_setSeed);
    return hash
  };
  drop__I__O(n) {
    return $as_sci_HashSet($f_sc_IterableOps__drop__I__O(this, n))
  };
  tail__O() {
    const elem = this.iterator__sc_Iterator().next__O();
    return this.excl__O__sci_HashSet(elem)
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_HashSet(elem)
  };
}
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
const $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sci_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
const $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State = (function($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements"))
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    let res;
    try {
      res = $as_sci_LazyList$State($thiz.sci_LazyList__f_lazyState.apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
});
const $p_sci_LazyList__takeImpl__I__sci_LazyList = (function($thiz, n) {
  if ((n <= 0)) {
    return $m_sci_LazyList$().sci_LazyList$__f__empty
  } else {
    $m_sci_LazyList$();
    const state = new $c_sjsr_AnonFunction0(((this$1, n$1) => (() => {
      if (this$1.isEmpty__Z()) {
        return $m_sci_LazyList$State$Empty$()
      } else {
        $m_sci_LazyList$();
        const hd = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        const tl = $p_sci_LazyList__takeImpl__I__sci_LazyList(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList(), (((-1) + n$1) | 0));
        return new $c_sci_LazyList$State$Cons(hd, tl)
      }
    }))($thiz, n));
    return new $c_sci_LazyList(state)
  }
});
const $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    const elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    let elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
        const this$3 = $as_sci_LazyList(elem$2);
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) && ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$4 = $as_sci_LazyList(elem);
          const obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          const this$5 = $as_sci_LazyList(elem);
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$6 = $as_sci_LazyList(elem$2);
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
            const this$7 = $as_sci_LazyList(elem$2);
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$8 = $as_sci_LazyList(elem);
        const obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        const this$9 = $as_sci_LazyList(elem);
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!$as_sci_LazyList(elem).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      let runner = $thiz;
      let k = 0;
      while (true) {
        const a = runner;
        const b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          const this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$11 = $as_sci_LazyList(elem$2);
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      const a$1 = $as_sci_LazyList(elem);
      const b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$12 = $as_sci_LazyList(elem);
        const obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        const this$13 = $as_sci_LazyList(elem);
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        const a$2 = $as_sci_LazyList(elem);
        const b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$14 = $as_sci_LazyList(elem);
          const obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          const this$15 = $as_sci_LazyList(elem);
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_LazyList extends $c_sci_AbstractSeq {
  constructor(lazyState) {
    super();
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
    this.sci_LazyList__f_lazyState = null;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_midEvaluation = false;
    this.sci_LazyList__f_bitmap$0 = false;
    this.sci_LazyList__f_lazyState = lazyState;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_midEvaluation = false
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  isDefinedAt__I__Z(x) {
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  scala$collection$immutable$LazyList$$state__sci_LazyList$State() {
    return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
  };
  isEmpty__Z() {
    return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
  };
  knownSize__I() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
  };
  head__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
  };
  force__sci_LazyList() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      const this$1 = these;
      these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      const this$2 = these;
      these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if (these.isEmpty__Z()) {
        return this
      };
      const this$3 = these;
      these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if ((these === those)) {
        return this
      };
      const this$4 = those;
      those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return this
  };
  iterator__sc_Iterator() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
  };
  foreach__F1__V(f) {
    let _$this = this;
    while (true) {
      if ((!_$this.isEmpty__Z())) {
        const this$1 = _$this;
        f.apply__O__O(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
        const this$2 = _$this;
        _$this = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        continue
      };
      break
    }
  };
  className__T() {
    return "LazyList"
  };
  lazyAppendedAll__F0__sci_LazyList(suffix) {
    $m_sci_LazyList$();
    const state = new $c_sjsr_AnonFunction0(((this$1, suffix$1) => (() => {
      if (this$1.isEmpty__Z()) {
        const x1 = $as_sc_IterableOnce(suffix$1.apply__O());
        if ((x1 instanceof $c_sci_LazyList)) {
          const x2 = $as_sci_LazyList(x1);
          return x2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
        } else {
          return ((x1.knownSize__I() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(x1.iterator__sc_Iterator()))
        }
      } else {
        $m_sci_LazyList$();
        const hd = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        const tl = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList().lazyAppendedAll__F0__sci_LazyList(suffix$1);
        return new $c_sci_LazyList$State$Cons(hd, tl)
      }
    }))(this, suffix));
    return new $c_sci_LazyList(state)
  };
  appendedAll__sc_IterableOnce__sci_LazyList(suffix) {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(suffix) : this.lazyAppendedAll__F0__sci_LazyList(new $c_sjsr_AnonFunction0(((this$1, suffix$1) => (() => suffix$1))(this, suffix))))
  };
  appended__O__sci_LazyList(elem) {
    if ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z())) {
      $m_sci_LazyList$();
      const state = new $c_sjsr_AnonFunction0(((this$1, elem$1) => (() => {
        $m_sci_LazyList$();
        const tl = $m_sci_LazyList$().sci_LazyList$__f__empty;
        return new $c_sci_LazyList$State$Cons(elem$1, tl)
      }))(this, elem));
      return new $c_sci_LazyList(state)
    } else {
      return this.lazyAppendedAll__F0__sci_LazyList(new $c_sjsr_AnonFunction0(((this$2$1, elem$2) => (() => {
        $m_sc_Iterator$();
        return new $c_sc_Iterator$$anon$20(elem$2)
      }))(this, elem)))
    }
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  drop__I__sci_LazyList(n) {
    return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
  };
  take__I__sci_LazyList(n) {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $p_sci_LazyList__takeImpl__I__sci_LazyList(this, n))
  };
  slice__I__I__sci_LazyList(from, until) {
    return this.take__I__sci_LazyList(until).drop__I__sci_LazyList(from)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_LazyList();
    $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  isDefinedAt__O__Z(x) {
    const x$1 = $uI(x);
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
  };
  slice__I__I__O(from, until) {
    return this.slice__I__I__sci_LazyList(from, until)
  };
  take__I__O(n) {
    return this.take__I__sci_LazyList(n)
  };
  drop__I__O(n) {
    return this.drop__I__sci_LazyList(n)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_LazyList(elem)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return this.appendedAll__sc_IterableOnce__sci_LazyList(suffix)
  };
  tail__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_LazyList$()
  };
}
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
const $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
const $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    if ($thiz.tailDefined__Z()) {
      let scout = $as_sci_Stream($thiz.tail__O());
      if (($as_sci_Stream(elem) !== scout)) {
        elem = scout;
        if (scout.tailDefined__Z()) {
          scout = $as_sci_Stream(scout.tail__O());
          while ((($as_sci_Stream(elem) !== scout) && scout.tailDefined__Z())) {
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
            const obj$1 = $as_sci_Stream(elem).head__O();
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
            elem = $as_sci_Stream($as_sci_Stream(elem).tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            if (scout.tailDefined__Z()) {
              scout = $as_sci_Stream(scout.tail__O())
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while (($as_sci_Stream(elem) !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$2 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        };
        const this$2 = $as_sci_Stream(elem);
        if ((!this$2.isEmpty__Z())) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$3 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3)
        }
      } else {
        let runner = $thiz;
        let k = 0;
        while ((runner !== scout)) {
          runner = $as_sci_Stream(runner.tail__O());
          scout = $as_sci_Stream(scout.tail__O());
          k = ((1 + k) | 0)
        };
        if ((($as_sci_Stream(elem) === scout) && (k > 0))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$4 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        };
        while (($as_sci_Stream(elem) !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$5 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$5);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        }
      }
    };
    const this$3 = $as_sci_Stream(elem);
    if ((!this$3.isEmpty__Z())) {
      if ((!$as_sci_Stream(elem).tailDefined__Z())) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      } else {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
      }
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_Stream extends $c_sci_AbstractSeq {
  stringPrefix__T() {
    return "LinearSeq"
  };
  iterator__sc_Iterator() {
    return $f_sc_LinearSeqOps__iterator__sc_Iterator(this)
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  isDefinedAt__I__Z(x) {
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  className__T() {
    return "Stream"
  };
  foreach__F1__V(f) {
    let _$this = this;
    while (true) {
      if ((!_$this.isEmpty__Z())) {
        f.apply__O__O(_$this.head__O());
        _$this = $as_sci_Stream(_$this.tail__O());
        continue
      };
      break
    }
  };
  take__I__sci_Stream(n) {
    return (((n <= 0) || this.isEmpty__Z()) ? $m_sci_Stream$Empty$() : ((n === 1) ? new $c_sci_Stream$Cons(this.head__O(), new $c_sjsr_AnonFunction0(((this$2) => (() => $m_sci_Stream$Empty$()))(this))) : new $c_sci_Stream$Cons(this.head__O(), new $c_sjsr_AnonFunction0(((this$2$1, n$1) => (() => $as_sci_Stream(this$2$1.tail__O()).take__I__sci_Stream((((-1) + n$1) | 0))))(this, n)))))
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_Stream();
    $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "Stream"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  isDefinedAt__O__Z(x) {
    const x$1 = $uI(x);
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
  };
  take__I__O(n) {
    return this.take__I__sci_Stream(n)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Stream$()
  };
}
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
class $c_sci_WrappedString extends $c_sci_AbstractSeq {
  constructor(self) {
    super();
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  take__I__O(n) {
    return $f_sc_IndexedSeqOps__take__I__O(this, n)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  map__F1__O(f) {
    return $f_sc_IndexedSeqOps__map__F1__O(this, f)
  };
  head__O() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(0))))
  };
  lengthCompare__I__I(len) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    const x = $uI(this$1.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  slice__I__I__sci_WrappedString(from, until) {
    const start = ((from < 0) ? 0 : from);
    let $$x1;
    if ((until <= start)) {
      $$x1 = true
    } else {
      const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      $$x1 = (start >= $uI(this$1.length))
    };
    if ($$x1) {
      return $m_sci_WrappedString$().sci_WrappedString$__f_empty
    };
    const this$2 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    let end;
    if ((until > $uI(this$2.length))) {
      const this$3 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      end = $uI(this$3.length)
    } else {
      end = until
    };
    const this$4 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return new $c_sci_WrappedString($as_T(this$4.substring(start, end)))
  };
  length__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  toString__T() {
    return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
  };
  copyToArray__O__I__I(xs, start) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return this.copyToArray__O__I__I__I(xs, start, $uI(this$1.length))
  };
  copyToArray__O__I__I__I(xs, start, len) {
    if ($isArrayOf_C(xs, 1)) {
      const x2 = $asArrayOf_C(xs, 1);
      const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      const srcLen = $uI(this$1.length);
      const destLen = x2.u.length;
      const x = ((len < srcLen) ? len : srcLen);
      const y = ((destLen - start) | 0);
      const x$1 = ((x < y) ? x : y);
      const copied = ((x$1 > 0) ? x$1 : 0);
      $f_T__getChars__I__I__AC__I__V(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self, 0, copied, x2, start);
      return copied
    } else {
      return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
    }
  };
  appendedAll__sc_IterableOnce__sci_IndexedSeq(suffix) {
    if ((suffix instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(suffix);
      const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      const s = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      return new $c_sci_WrappedString((("" + this$1) + s))
    } else {
      return $as_sci_IndexedSeq($f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix))
    }
  };
  sameElements__sc_IterableOnce__Z(o) {
    if ((o instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(o);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
    }
  };
  className__T() {
    return "WrappedString"
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(other);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return this.appendedAll__sc_IterableOnce__sci_IndexedSeq(suffix)
  };
  slice__I__I__O(from, until) {
    return this.slice__I__I__sci_WrappedString(from, until)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
  apply__I__O(i) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
const $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  appended__O__O(elem) {
    return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix)
  };
  map__F1__O(f) {
    return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  slice__I__I__O(from, until) {
    return $f_sci_IndexedSeqOps__slice__I__I__O(this, from, until)
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  take__I__O(n) {
    return $f_sc_IndexedSeqOps__take__I__O(this, n)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  size__I() {
    return this.length__I()
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    const this$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
    return $f_sc_Iterator__indexWhere__F1__I__I(this$2, p, from)
  };
  sizeCompare__I__I(otherSize) {
    const x = this.length__I();
    return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1))
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  foreach__F1__V(f) {
    $f_sc_IterableOnceOps__foreach__F1__V(this, f)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sjsr_WrappedVarArgs$()
  };
  length__I() {
    return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sjsr_WrappedVarArgs$();
    return this$1.from__sc_IterableOnce__sjsr_WrappedVarArgs(coll)
  };
  isDefinedAt__O__Z(x) {
    const idx = $uI(x);
    return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjsr_WrappedVarArgs$()
  };
}
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
class $c_sci_HashMap extends $c_sci_AbstractMap {
  constructor(rootNode) {
    super();
    this.sci_HashMap__f_rootNode = null;
    this.sci_HashMap__f_rootNode = rootNode
  };
  mapFactory__sc_MapFactory() {
    return $m_sci_HashMap$()
  };
  knownSize__I() {
    return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
  };
  size__I() {
    return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapKeyValueTupleIterator(this.sci_HashMap__f_rootNode))
  };
  contains__O__Z(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.containsKey__O__I__I__I__Z(key, keyUnimprovedHash, keyHash, 0)
  };
  apply__O__O(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.apply__O__I__I__I__O(key, keyUnimprovedHash, keyHash, 0)
  };
  getOrElse__O__F0__O(key, default$1) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.getOrElse__O__I__I__I__F0__O(key, keyUnimprovedHash, keyHash, 0, default$1)
  };
  updated__O__O__sci_HashMap(key, value) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const newRootNode = this.sci_HashMap__f_rootNode.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0, true);
    return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
  };
  removed__O__sci_HashMap(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const newRootNode = this.sci_HashMap__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedMapNode(key, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0);
    return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
  };
  tail__sci_HashMap() {
    const key = $as_T2(this.iterator__sc_Iterator().next__O())._1__O();
    return this.removed__O__sci_HashMap(key)
  };
  foreach__F1__V(f) {
    this.sci_HashMap__f_rootNode.foreach__F1__V(f)
  };
  foreachEntry__F2__V(f) {
    this.sci_HashMap__f_rootNode.foreachEntry__F2__V(f)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(that);
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashMap__f_rootNode;
        const x$2 = x2.sci_HashMap__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Map__equals__O__Z(this, that)
    }
  };
  hashCode__I() {
    if (this.isEmpty__Z()) {
      return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
    } else {
      const hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.sci_HashMap__f_rootNode);
      const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed);
      return hash
    }
  };
  className__T() {
    return "HashMap"
  };
  drop__I__O(n) {
    return $as_sci_HashMap($f_sc_IterableOps__drop__I__O(this, n))
  };
  head__O() {
    return $as_T2(this.iterator__sc_Iterator().next__O())
  };
  tail__O() {
    return this.tail__sci_HashMap()
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_HashMap(key, value)
  };
}
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"))
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth))
}
const $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sci_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
class $c_sci_Stream$Cons extends $c_sci_Stream {
  constructor(head, tl) {
    super();
    this.sci_Stream$Cons__f_head = null;
    this.sci_Stream$Cons__f_tlVal = null;
    this.sci_Stream$Cons__f_tlGen = null;
    this.sci_Stream$Cons__f_head = head;
    this.sci_Stream$Cons__f_tlGen = tl
  };
  head__O() {
    return this.sci_Stream$Cons__f_head
  };
  isEmpty__Z() {
    return false
  };
  tailDefined__Z() {
    return (this.sci_Stream$Cons__f_tlGen === null)
  };
  tail__sci_Stream() {
    if ((!this.tailDefined__Z())) {
      if ((!this.tailDefined__Z())) {
        this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
        this.sci_Stream$Cons__f_tlGen = null
      }
    };
    return this.sci_Stream$Cons__f_tlVal
  };
  force__sci_Stream$Cons() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      these = $as_sci_Stream(these.tail__O())
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if ((these === those)) {
        return this
      };
      those = $as_sci_Stream(those.tail__O())
    };
    return this
  };
  force__sci_Stream() {
    return this.force__sci_Stream$Cons()
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
}
const $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
class $c_sci_Stream$Empty$ extends $c_sci_Stream {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
  };
  tail__sci_Stream() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty stream")
  };
  knownSize__I() {
    return 0
  };
  tailDefined__Z() {
    return false
  };
  force__sci_Stream() {
    return this
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
let $n_sci_Stream$Empty$ = (void 0);
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
}
const $ct_sci_Vector__AO__ = (function($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
});
class $c_sci_Vector extends $c_sci_AbstractSeq {
  constructor() {
    super();
    this.sci_Vector__f_prefix1 = null
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sci_Vector$()
  };
  length__I() {
    return ((this instanceof $c_sci_BigVector) ? $as_sci_BigVector(this).sci_BigVector__f_length0 : this.sci_Vector__f_prefix1.u.length)
  };
  iterator__sc_Iterator() {
    return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
  };
  filterImpl__F1__Z__sci_Vector(pred, isFlipped) {
    let i = 0;
    const len = this.sci_Vector__f_prefix1.u.length;
    while ((i !== len)) {
      if (($uZ(pred.apply__O__O(this.sci_Vector__f_prefix1.get(i))) === isFlipped)) {
        let bitmap = 0;
        let j = ((1 + i) | 0);
        while ((j < len)) {
          if (($uZ(pred.apply__O__O(this.sci_Vector__f_prefix1.get(j))) !== isFlipped)) {
            bitmap = (bitmap | (1 << j))
          };
          j = ((1 + j) | 0)
        };
        const $$x1 = i;
        const i$1 = bitmap;
        const newLen = (($$x1 + $m_jl_Integer$().bitCount__I__I(i$1)) | 0);
        if ((this instanceof $c_sci_BigVector)) {
          const b = new $c_sci_VectorBuilder();
          let k = 0;
          while ((k < i)) {
            b.addOne__O__sci_VectorBuilder(this.sci_Vector__f_prefix1.get(k));
            k = ((1 + k) | 0)
          };
          k = ((1 + i) | 0);
          while ((i !== newLen)) {
            if ((((1 << k) & bitmap) !== 0)) {
              b.addOne__O__sci_VectorBuilder(this.sci_Vector__f_prefix1.get(k));
              i = ((1 + i) | 0)
            };
            k = ((1 + k) | 0)
          };
          $as_sci_BigVector(this).foreachRest__F1__V(new $c_sjsr_AnonFunction1(((this$1, pred$1, isFlipped$1, b$1) => ((v$2) => (($uZ(pred$1.apply__O__O(v$2)) !== isFlipped$1) ? b$1.addOne__O__sci_VectorBuilder(v$2) : (void 0))))(this, pred, isFlipped, b)));
          return b.result__sci_Vector()
        } else {
          if ((newLen === 0)) {
            return $m_sci_Vector0$()
          };
          const newData = $newArrayObject($d_O.getArrayOf(), [newLen]);
          const src = this.sci_Vector__f_prefix1;
          const length = i;
          $systemArraycopy(src, 0, newData, 0, length);
          let k$2 = ((1 + i) | 0);
          while ((i !== newLen)) {
            if ((((1 << k$2) & bitmap) !== 0)) {
              newData.set(i, this.sci_Vector__f_prefix1.get(k$2));
              i = ((1 + i) | 0)
            };
            k$2 = ((1 + k$2) | 0)
          };
          return new $c_sci_Vector1(newData)
        }
      };
      i = ((1 + i) | 0)
    };
    if ((this instanceof $c_sci_BigVector)) {
      const b$2 = new $c_sci_VectorBuilder();
      b$2.initFrom__AO__V(this.sci_Vector__f_prefix1);
      $as_sci_BigVector(this).foreachRest__F1__V(new $c_sjsr_AnonFunction1(((this$2, pred$2, isFlipped$2, b$2$1) => ((v$3$2) => (($uZ(pred$2.apply__O__O(v$3$2)) !== isFlipped$2) ? b$2$1.addOne__O__sci_VectorBuilder(v$3$2) : (void 0))))(this, pred, isFlipped, b$2)));
      return b$2.result__sci_Vector()
    } else {
      return this
    }
  };
  appendedAll__sc_IterableOnce__sci_Vector(suffix) {
    const k = suffix.knownSize__I();
    return ((k === 0) ? this : this.appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k))
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const tinyAppendLimit = ((4 + this.vectorSliceCount__I()) | 0);
    if (((k > 0) && (k < tinyAppendLimit))) {
      const v = new $c_sr_ObjectRef(this);
      if ($is_sci_Iterable(suffix)) {
        const x2 = $as_sci_Iterable(suffix);
        x2.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$2, v$1) => ((x$2) => {
          v$1.sr_ObjectRef__f_elem = $as_sci_Vector(v$1.sr_ObjectRef__f_elem).appended__O__sci_Vector(x$2)
        }))(this, v)))
      } else {
        const this$3 = suffix.iterator__sc_Iterator();
        while (this$3.hasNext__Z()) {
          const arg1 = this$3.next__O();
          v.sr_ObjectRef__f_elem = $as_sci_Vector(v.sr_ObjectRef__f_elem).appended__O__sci_Vector(arg1)
        }
      };
      return $as_sci_Vector(v.sr_ObjectRef__f_elem)
    } else {
      return new $c_sci_VectorBuilder().initFrom__sci_Vector__sci_VectorBuilder(this).addAll__sc_IterableOnce__sci_VectorBuilder(suffix).result__sci_Vector()
    }
  };
  className__T() {
    return "Vector"
  };
  applyPreferredMaxLength__I() {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
  };
  ioob__I__jl_IndexOutOfBoundsException(index) {
    return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
  };
  head__O() {
    if ((this.sci_Vector__f_prefix1.u.length === 0)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "empty.head")
    } else {
      return this.sci_Vector__f_prefix1.get(0)
    }
  };
  foreach__F1__V(f) {
    const c = this.vectorSliceCount__I();
    let i = 0;
    while ((i < c)) {
      const $$x1 = $m_sci_VectorStatics$();
      const idx = i;
      const c$1 = ((c / 2) | 0);
      const a = ((idx - c$1) | 0);
      $$x1.foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
      i = ((1 + i) | 0)
    }
  };
  drop__I__O(n) {
    return $as_sci_Vector(this.slice__I__I__O(n, this.length__I()))
  };
  take__I__O(n) {
    return $as_sci_Vector(this.slice__I__I__O(0, n))
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return this.appendedAll__sc_IterableOnce__sci_Vector(suffix)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Vector$()
  };
}
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
class $c_sci_ArraySeq$ofRef {
}
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth))
}
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sci_List(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sci_List(a.tail__O());
        const temp$b = $as_sci_List(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  iterator__sc_Iterator() {
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
  };
  appended__O__O(elem) {
    return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  isDefinedAt__I__Z(x) {
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sci_List$()
  };
  $colon$colon$colon__sci_List__sci_List(prefix) {
    if (this.isEmpty__Z()) {
      return prefix
    } else if (prefix.isEmpty__Z()) {
      return this
    } else {
      const result = new $c_sci_$colon$colon(prefix.head__O(), this);
      let curr = result;
      let that = $as_sci_List(prefix.tail__O());
      while ((!that.isEmpty__Z())) {
        const temp = new $c_sci_$colon$colon(that.head__O(), this);
        curr.sci_$colon$colon__f_next = temp;
        curr = temp;
        that = $as_sci_List(that.tail__O())
      };
      return result
    }
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  prependedAll__sc_IterableOnce__sci_List(prefix) {
    if ((prefix instanceof $c_sci_List)) {
      const x2 = $as_sci_List(prefix);
      return this.$colon$colon$colon__sci_List__sci_List(x2)
    };
    if ((prefix.knownSize__I() === 0)) {
      return this
    };
    if ((prefix instanceof $c_scm_ListBuffer)) {
      const x3 = $as_scm_ListBuffer(prefix);
      if (this.isEmpty__Z()) {
        return x3.toList__sci_List()
      }
    };
    const iter = prefix.iterator__sc_Iterator();
    if (iter.hasNext__Z()) {
      const result = new $c_sci_$colon$colon(iter.next__O(), this);
      let curr = result;
      while (iter.hasNext__Z()) {
        const temp = new $c_sci_$colon$colon(iter.next__O(), this);
        curr.sci_$colon$colon__f_next = temp;
        curr = temp
      };
      return result
    } else {
      return this
    }
  };
  appendedAll__sc_IterableOnce__sci_List(suffix) {
    if ((suffix instanceof $c_sci_List)) {
      const x2 = $as_sci_List(suffix);
      return x2.$colon$colon$colon__sci_List__sci_List(this)
    } else {
      return $as_sci_List($f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix))
    }
  };
  take__I__sci_List(n) {
    if ((this.isEmpty__Z() || (n <= 0))) {
      return $m_sci_Nil$()
    } else {
      const h = new $c_sci_$colon$colon(this.head__O(), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this.tail__O());
      let i = 1;
      while (true) {
        if (rest.isEmpty__Z()) {
          return this
        };
        if ((i < n)) {
          i = ((1 + i) | 0);
          const nx = new $c_sci_$colon$colon(rest.head__O(), $m_sci_Nil$());
          t.sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $as_sci_List(rest.tail__O())
        } else {
          break
        }
      };
      return h
    }
  };
  slice__I__I__sci_List(from, until) {
    const lo = ((from > 0) ? from : 0);
    return (((until <= lo) || this.isEmpty__Z()) ? $m_sci_Nil$() : $as_sci_List($p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, lo, this)).take__I__sci_List(((until - lo) | 0)))
  };
  foreach__F1__V(f) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      f.apply__O__O(these.head__O());
      these = $as_sci_List(these.tail__O())
    }
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sci_List(these.tail__O())
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  exists__F1__Z(p) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      if ($uZ(p.apply__O__O(these.head__O()))) {
        return true
      };
      these = $as_sci_List(these.tail__O())
    };
    return false
  };
  className__T() {
    return "List"
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = $as_sci_List(o);
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  isDefinedAt__O__Z(x) {
    const x$1 = $uI(x);
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
  slice__I__I__O(from, until) {
    return this.slice__I__I__sci_List(from, until)
  };
  take__I__O(n) {
    return this.take__I__sci_List(n)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return this.appendedAll__sc_IterableOnce__sci_List(suffix)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_List$()
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
class $c_sci_VectorImpl extends $c_sci_Vector {
  slice__I__I__sci_Vector(from, until) {
    const lo = ((from > 0) ? from : 0);
    const b = this.length__I();
    const hi = ((until < b) ? until : b);
    const newlen = ((hi - lo) | 0);
    return ((newlen === this.length__I()) ? this : ((newlen <= 0) ? $m_sci_Vector0$() : this.slice0__I__I__sci_Vector(lo, hi)))
  };
  slice__I__I__O(from, until) {
    return this.slice__I__I__sci_Vector(from, until)
  };
}
class $c_scm_ArraySeq$ofChar {
}
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
class $c_scm_HashMap {
}
function $as_scm_HashMap(obj) {
  return (((obj instanceof $c_scm_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap"))
}
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)))
}
function $asArrayOf_scm_HashMap(obj, depth) {
  return (($isArrayOf_scm_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth))
}
const $ct_sci_BigVector__AO__AO__I__ = (function($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
});
class $c_sci_BigVector extends $c_sci_VectorImpl {
  constructor() {
    super();
    this.sci_BigVector__f_suffix1 = null;
    this.sci_BigVector__f_length0 = 0
  };
  foreachRest__F1__V(f) {
    const c = this.vectorSliceCount__I();
    let i = 1;
    while ((i < c)) {
      const $$x1 = $m_sci_VectorStatics$();
      const idx = i;
      const c$1 = ((c / 2) | 0);
      const a = ((idx - c$1) | 0);
      $$x1.foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
      i = ((1 + i) | 0)
    }
  };
}
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
class $c_sci_Vector1 extends $c_sci_VectorImpl {
  constructor(_data1) {
    super();
    $ct_sci_Vector__AO__(this, _data1)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
      return this.sci_Vector__f_prefix1.get(index)
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  updated__I__O__sci_Vector(index, elem) {
    if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
      const a1 = this.sci_Vector__f_prefix1;
      const a1c = $asArrayOf_O(a1.clone__O(), 1);
      a1c.set(index, elem);
      return new $c_sci_Vector1(a1c)
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  appended__O__sci_Vector(elem) {
    const len1 = this.sci_Vector__f_prefix1.u.length;
    if ((len1 < 32)) {
      return new $c_sci_Vector1($m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_Vector__f_prefix1, elem))
    } else {
      const $$x2 = this.sci_Vector__f_prefix1;
      const $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a = $newArrayObject($d_O.getArrayOf(), [1]);
      a.set(0, elem);
      return new $c_sci_Vector2($$x2, 32, $$x1, a, 33)
    }
  };
  map__F1__sci_Vector(f) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f))
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const original = this.sci_Vector__f_prefix1;
    return new $c_sci_Vector1($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, lo, hi))
  };
  tail__sci_Vector() {
    if ((this.sci_Vector__f_prefix1.u.length === 1)) {
      return $m_sci_Vector0$()
    } else {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      return new $c_sci_Vector1($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to))
    }
  };
  vectorSliceCount__I() {
    return 1
  };
  vectorSlice__I__AO(idx) {
    return this.sci_Vector__f_prefix1
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const data1b = $m_sci_VectorStatics$().append1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, suffix);
    return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.appendedAll0__sc_IterableOnce__I__sci_Vector.call(this, suffix, k))
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this.map__F1__sci_Vector(f)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
      return this.sci_Vector__f_prefix1.get(index)
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"))
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth))
}
const $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, next) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_next = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_next = next
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_next;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_next
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
  };
  tail__E() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
class $c_sci_Vector0$ extends $c_sci_BigVector {
  constructor() {
    super();
    $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
  };
  apply__I__E(index) {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  };
  updated__I__O__sci_Vector(index, elem) {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  };
  appended__O__sci_Vector(elem) {
    const a = $newArrayObject($d_O.getArrayOf(), [1]);
    a.set(0, elem);
    return new $c_sci_Vector1(a)
  };
  tail__sci_Vector() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.tail")
  };
  slice0__I__I__sci_Vector(lo, hi) {
    return this
  };
  vectorSliceCount__I() {
    return 0
  };
  vectorSlice__I__AO(idx) {
    return null
  };
  equals__O__Z(o) {
    return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    return $m_sci_Vector$().from__sc_IterableOnce__sci_Vector(suffix)
  };
  ioob__I__jl_IndexOutOfBoundsException(index) {
    return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    this.apply__I__E($uI(v1))
  };
  apply__I__O(i) {
    this.apply__I__E(i)
  };
}
const $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
let $n_sci_Vector0$ = (void 0);
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
class $c_sci_Vector2 extends $c_sci_BigVector {
  constructor(_prefix1, len1, data2, _suffix1, _length0) {
    super();
    this.sci_Vector2__f_len1 = 0;
    this.sci_Vector2__f_data2 = null;
    this.sci_Vector2__f_len1 = len1;
    this.sci_Vector2__f_data2 = data2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector2__f_len1) | 0);
      if ((io >= 0)) {
        const i2 = ((io >>> 5) | 0);
        const i1 = (31 & io);
        return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get((31 & io)))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  updated__I__O__sci_Vector(index, elem) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      if ((index >= this.sci_Vector2__f_len1)) {
        const io = ((index - this.sci_Vector2__f_len1) | 0);
        const i2 = ((io >>> 5) | 0);
        const i1 = (31 & io);
        if ((i2 < this.sci_Vector2__f_data2.u.length)) {
          const a2 = this.sci_Vector2__f_data2;
          const a2c = $asArrayOf_O(a2.clone__O(), 2);
          const a1 = a2c.get(i2);
          const a1c = $asArrayOf_O(a1.clone__O(), 1);
          a1c.set(i1, elem);
          a2c.set(i2, a1c);
          const x$2 = this.sci_Vector__f_prefix1;
          const x$3 = this.sci_Vector2__f_len1;
          const x$4 = this.sci_BigVector__f_suffix1;
          const x$5 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector2(x$2, x$3, a2c, x$4, x$5)
        } else {
          const a1$1 = this.sci_BigVector__f_suffix1;
          const a1c$1 = $asArrayOf_O(a1$1.clone__O(), 1);
          a1c$1.set(i1, elem);
          const x$7 = this.sci_Vector__f_prefix1;
          const x$8 = this.sci_Vector2__f_len1;
          const x$9 = this.sci_Vector2__f_data2;
          const x$10 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector2(x$7, x$8, x$9, a1c$1, x$10)
        }
      } else {
        const a1$2 = this.sci_Vector__f_prefix1;
        const a1c$2 = $asArrayOf_O(a1$2.clone__O(), 1);
        a1c$2.set(index, elem);
        const len1 = this.sci_Vector2__f_len1;
        const data2 = this.sci_Vector2__f_data2;
        const suffix1 = this.sci_BigVector__f_suffix1;
        const length0 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector2(a1c$2, len1, data2, suffix1, length0)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  appended__O__sci_Vector(elem) {
    if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
      const x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
      const x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector2__f_len1;
      const x$5 = this.sci_Vector2__f_data2;
      return new $c_sci_Vector2(x$3, x$4, x$5, x$1, x$2)
    } else if ((this.sci_Vector2__f_data2.u.length < 30)) {
      const x$6 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1), 2);
      const a = $newArrayObject($d_O.getArrayOf(), [1]);
      a.set(0, elem);
      const x$8 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$9 = this.sci_Vector__f_prefix1;
      const x$10 = this.sci_Vector2__f_len1;
      return new $c_sci_Vector2(x$9, x$10, x$6, a, x$8)
    } else {
      const $$x5 = this.sci_Vector__f_prefix1;
      const $$x4 = this.sci_Vector2__f_len1;
      const $$x3 = this.sci_Vector2__f_data2;
      const $$x2 = this.sci_Vector2__f_len1;
      const $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x = this.sci_BigVector__f_suffix1;
      const a$1 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [1]);
      a$1.set(0, x);
      const a$2 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$2.set(0, elem);
      return new $c_sci_Vector3($$x5, $$x4, $$x3, ((960 + $$x2) | 0), $$x1, a$1, a$2, ((1 + this.sci_BigVector__f_length0) | 0))
    }
  };
  map__F1__sci_Vector(f) {
    const x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
    const x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector2__f_data2, f), 2);
    const x$3 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
    const x$4 = this.sci_Vector2__f_len1;
    const x$5 = this.sci_BigVector__f_length0;
    return new $c_sci_Vector2(x$1, x$4, x$2, x$3, x$5)
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector2__f_data2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector2__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector2__f_len1) | 0);
      const x$3 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$4 = this.sci_Vector2__f_data2;
      const x$5 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector2(x$1, x$2, x$4, x$5, x$3)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 3
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector2__f_data2;
        break
      }
      case 2: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const suffix1b = $m_sci_VectorStatics$().append1IfSpace__AO__sc_IterableOnce__AO(this.sci_BigVector__f_suffix1, suffix);
    if ((suffix1b !== null)) {
      const x$2 = ((((this.sci_BigVector__f_length0 - this.sci_BigVector__f_suffix1.u.length) | 0) + suffix1b.u.length) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector2__f_len1;
      const x$5 = this.sci_Vector2__f_data2;
      return new $c_sci_Vector2(x$3, x$4, x$5, suffix1b, x$2)
    } else {
      return $c_sci_Vector.prototype.appendedAll0__sc_IterableOnce__I__sci_Vector.call(this, suffix, k)
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this.map__F1__sci_Vector(f)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector2__f_len1) | 0);
      if ((io >= 0)) {
        const i2 = ((io >>> 5) | 0);
        const i1 = (31 & io);
        return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get((31 & io)))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"))
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth))
}
const $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
class $c_sci_Vector3 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector3__f_len1 = 0;
    this.sci_Vector3__f_prefix2 = null;
    this.sci_Vector3__f_len12 = 0;
    this.sci_Vector3__f_data3 = null;
    this.sci_Vector3__f_suffix2 = null;
    this.sci_Vector3__f_len1 = len1;
    this.sci_Vector3__f_prefix2 = prefix2;
    this.sci_Vector3__f_len12 = len12;
    this.sci_Vector3__f_data3 = data3;
    this.sci_Vector3__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector3__f_len12) | 0);
      if ((io >= 0)) {
        const i3 = ((io >>> 10) | 0);
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))
      } else if ((index >= this.sci_Vector3__f_len1)) {
        const io$2 = ((index - this.sci_Vector3__f_len1) | 0);
        return this.sci_Vector3__f_prefix2.get(((io$2 >>> 5) | 0)).get((31 & io$2))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  updated__I__O__sci_Vector(index, elem) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      if ((index >= this.sci_Vector3__f_len12)) {
        const io = ((index - this.sci_Vector3__f_len12) | 0);
        const i3 = ((io >>> 10) | 0);
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        if ((i3 < this.sci_Vector3__f_data3.u.length)) {
          const a3 = this.sci_Vector3__f_data3;
          const a3c = $asArrayOf_O(a3.clone__O(), 3);
          const a2 = a3c.get(i3);
          const a2c = $asArrayOf_O(a2.clone__O(), 2);
          const a1 = a2c.get(i2);
          const a1c = $asArrayOf_O(a1.clone__O(), 1);
          a1c.set(i1, elem);
          a2c.set(i2, a1c);
          a3c.set(i3, a2c);
          const x$2 = this.sci_Vector__f_prefix1;
          const x$3 = this.sci_Vector3__f_len1;
          const x$4 = this.sci_Vector3__f_prefix2;
          const x$5 = this.sci_Vector3__f_len12;
          const x$6 = this.sci_Vector3__f_suffix2;
          const x$7 = this.sci_BigVector__f_suffix1;
          const x$8 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector3(x$2, x$3, x$4, x$5, a3c, x$6, x$7, x$8)
        } else if ((i2 < this.sci_Vector3__f_suffix2.u.length)) {
          const a2$1 = this.sci_Vector3__f_suffix2;
          const a2c$1 = $asArrayOf_O(a2$1.clone__O(), 2);
          const a1$1 = a2c$1.get(i2);
          const a1c$1 = $asArrayOf_O(a1$1.clone__O(), 1);
          a1c$1.set(i1, elem);
          a2c$1.set(i2, a1c$1);
          const x$10 = this.sci_Vector__f_prefix1;
          const x$11 = this.sci_Vector3__f_len1;
          const x$12 = this.sci_Vector3__f_prefix2;
          const x$13 = this.sci_Vector3__f_len12;
          const x$14 = this.sci_Vector3__f_data3;
          const x$15 = this.sci_BigVector__f_suffix1;
          const x$16 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector3(x$10, x$11, x$12, x$13, x$14, a2c$1, x$15, x$16)
        } else {
          const a1$2 = this.sci_BigVector__f_suffix1;
          const a1c$2 = $asArrayOf_O(a1$2.clone__O(), 1);
          a1c$2.set(i1, elem);
          const x$18 = this.sci_Vector__f_prefix1;
          const x$19 = this.sci_Vector3__f_len1;
          const x$20 = this.sci_Vector3__f_prefix2;
          const x$21 = this.sci_Vector3__f_len12;
          const x$22 = this.sci_Vector3__f_data3;
          const x$23 = this.sci_Vector3__f_suffix2;
          const x$24 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector3(x$18, x$19, x$20, x$21, x$22, x$23, a1c$2, x$24)
        }
      } else if ((index >= this.sci_Vector3__f_len1)) {
        const io$2 = ((index - this.sci_Vector3__f_len1) | 0);
        const a2$2 = this.sci_Vector3__f_prefix2;
        const idx2 = ((io$2 >>> 5) | 0);
        const idx1 = (31 & io$2);
        const a2c$2 = $asArrayOf_O(a2$2.clone__O(), 2);
        const a1$3 = a2c$2.get(idx2);
        const a1c$3 = $asArrayOf_O(a1$3.clone__O(), 1);
        a1c$3.set(idx1, elem);
        a2c$2.set(idx2, a1c$3);
        const x$26 = this.sci_Vector__f_prefix1;
        const x$27 = this.sci_Vector3__f_len1;
        const x$28 = this.sci_Vector3__f_len12;
        const x$29 = this.sci_Vector3__f_data3;
        const x$30 = this.sci_Vector3__f_suffix2;
        const x$31 = this.sci_BigVector__f_suffix1;
        const x$32 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$26, x$27, a2c$2, x$28, x$29, x$30, x$31, x$32)
      } else {
        const a1$4 = this.sci_Vector__f_prefix1;
        const a1c$4 = $asArrayOf_O(a1$4.clone__O(), 1);
        a1c$4.set(index, elem);
        const len1 = this.sci_Vector3__f_len1;
        const prefix2 = this.sci_Vector3__f_prefix2;
        const len12 = this.sci_Vector3__f_len12;
        const data3 = this.sci_Vector3__f_data3;
        const suffix2 = this.sci_Vector3__f_suffix2;
        const suffix1 = this.sci_BigVector__f_suffix1;
        const length0 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(a1c$4, len1, prefix2, len12, data3, suffix2, suffix1, length0)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  appended__O__sci_Vector(elem) {
    if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
      const x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
      const x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector3__f_len1;
      const x$5 = this.sci_Vector3__f_prefix2;
      const x$6 = this.sci_Vector3__f_len12;
      const x$7 = this.sci_Vector3__f_data3;
      const x$8 = this.sci_Vector3__f_suffix2;
      return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, x$1, x$2)
    } else if ((this.sci_Vector3__f_suffix2.u.length < 31)) {
      const x$9 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
      const a = $newArrayObject($d_O.getArrayOf(), [1]);
      a.set(0, elem);
      const x$11 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$12 = this.sci_Vector__f_prefix1;
      const x$13 = this.sci_Vector3__f_len1;
      const x$14 = this.sci_Vector3__f_prefix2;
      const x$15 = this.sci_Vector3__f_len12;
      const x$16 = this.sci_Vector3__f_data3;
      return new $c_sci_Vector3(x$12, x$13, x$14, x$15, x$16, x$9, a, x$11)
    } else if ((this.sci_Vector3__f_data3.u.length < 30)) {
      const x$17 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_data3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
      const x$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$1 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$1.set(0, elem);
      const x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$21 = this.sci_Vector__f_prefix1;
      const x$22 = this.sci_Vector3__f_len1;
      const x$23 = this.sci_Vector3__f_prefix2;
      const x$24 = this.sci_Vector3__f_len12;
      return new $c_sci_Vector3(x$21, x$22, x$23, x$24, x$17, x$18, a$1, x$20)
    } else {
      const $$x8 = this.sci_Vector__f_prefix1;
      const $$x7 = this.sci_Vector3__f_len1;
      const $$x6 = this.sci_Vector3__f_prefix2;
      const $$x5 = this.sci_Vector3__f_len12;
      const $$x4 = this.sci_Vector3__f_data3;
      const $$x3 = this.sci_Vector3__f_len12;
      const $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
      const x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
      const a$2 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [1]);
      a$2.set(0, x);
      const $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$3 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$3.set(0, elem);
      return new $c_sci_Vector4($$x8, $$x7, $$x6, $$x5, $$x4, ((30720 + $$x3) | 0), $$x2, a$2, $$x1, a$3, ((1 + this.sci_BigVector__f_length0) | 0))
    }
  };
  map__F1__sci_Vector(f) {
    const x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
    const x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector3__f_prefix2, f), 2);
    const x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector3__f_data3, f), 3);
    const x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector3__f_suffix2, f), 2);
    const x$5 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
    const x$6 = this.sci_Vector3__f_len1;
    const x$7 = this.sci_Vector3__f_len12;
    const x$8 = this.sci_BigVector__f_length0;
    return new $c_sci_Vector3(x$1, x$6, x$2, x$7, x$3, x$4, x$5, x$8)
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector3__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector3__f_data3);
    b.consider__I__AO__V(2, this.sci_Vector3__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector3__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector3__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector3__f_len12) | 0);
      const x$4 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$5 = this.sci_Vector3__f_prefix2;
      const x$6 = this.sci_Vector3__f_data3;
      const x$7 = this.sci_Vector3__f_suffix2;
      const x$8 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector3(x$1, x$2, x$5, x$3, x$6, x$7, x$8, x$4)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 5
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector3__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector3__f_data3;
        break
      }
      case 3: {
        return this.sci_Vector3__f_suffix2;
        break
      }
      case 4: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const suffix1b = $m_sci_VectorStatics$().append1IfSpace__AO__sc_IterableOnce__AO(this.sci_BigVector__f_suffix1, suffix);
    if ((suffix1b !== null)) {
      const x$2 = ((((this.sci_BigVector__f_length0 - this.sci_BigVector__f_suffix1.u.length) | 0) + suffix1b.u.length) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector3__f_len1;
      const x$5 = this.sci_Vector3__f_prefix2;
      const x$6 = this.sci_Vector3__f_len12;
      const x$7 = this.sci_Vector3__f_data3;
      const x$8 = this.sci_Vector3__f_suffix2;
      return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, suffix1b, x$2)
    } else {
      return $c_sci_Vector.prototype.appendedAll0__sc_IterableOnce__I__sci_Vector.call(this, suffix, k)
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this.map__F1__sci_Vector(f)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector3__f_len12) | 0);
      if ((io >= 0)) {
        const i3 = ((io >>> 10) | 0);
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))
      } else if ((index >= this.sci_Vector3__f_len1)) {
        const io$2 = ((index - this.sci_Vector3__f_len1) | 0);
        return this.sci_Vector3__f_prefix2.get(((io$2 >>> 5) | 0)).get((31 & io$2))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"))
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth))
}
const $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
class $c_sci_Vector4 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector4__f_len1 = 0;
    this.sci_Vector4__f_prefix2 = null;
    this.sci_Vector4__f_len12 = 0;
    this.sci_Vector4__f_prefix3 = null;
    this.sci_Vector4__f_len123 = 0;
    this.sci_Vector4__f_data4 = null;
    this.sci_Vector4__f_suffix3 = null;
    this.sci_Vector4__f_suffix2 = null;
    this.sci_Vector4__f_len1 = len1;
    this.sci_Vector4__f_prefix2 = prefix2;
    this.sci_Vector4__f_len12 = len12;
    this.sci_Vector4__f_prefix3 = prefix3;
    this.sci_Vector4__f_len123 = len123;
    this.sci_Vector4__f_data4 = data4;
    this.sci_Vector4__f_suffix3 = suffix3;
    this.sci_Vector4__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector4__f_len123) | 0);
      if ((io >= 0)) {
        const i4 = ((io >>> 15) | 0);
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))
      } else if ((index >= this.sci_Vector4__f_len12)) {
        const io$2 = ((index - this.sci_Vector4__f_len12) | 0);
        return this.sci_Vector4__f_prefix3.get(((io$2 >>> 10) | 0)).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector4__f_len1)) {
        const io$3 = ((index - this.sci_Vector4__f_len1) | 0);
        return this.sci_Vector4__f_prefix2.get(((io$3 >>> 5) | 0)).get((31 & io$3))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  updated__I__O__sci_Vector(index, elem) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      if ((index >= this.sci_Vector4__f_len123)) {
        const io = ((index - this.sci_Vector4__f_len123) | 0);
        const i4 = ((io >>> 15) | 0);
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        if ((i4 < this.sci_Vector4__f_data4.u.length)) {
          const a4 = this.sci_Vector4__f_data4;
          const a4c = $asArrayOf_O(a4.clone__O(), 4);
          const a3 = a4c.get(i4);
          const a3c = $asArrayOf_O(a3.clone__O(), 3);
          const a2 = a3c.get(i3);
          const a2c = $asArrayOf_O(a2.clone__O(), 2);
          const a1 = a2c.get(i2);
          const a1c = $asArrayOf_O(a1.clone__O(), 1);
          a1c.set(i1, elem);
          a2c.set(i2, a1c);
          a3c.set(i3, a2c);
          a4c.set(i4, a3c);
          const x$2 = this.sci_Vector__f_prefix1;
          const x$3 = this.sci_Vector4__f_len1;
          const x$4 = this.sci_Vector4__f_prefix2;
          const x$5 = this.sci_Vector4__f_len12;
          const x$6 = this.sci_Vector4__f_prefix3;
          const x$7 = this.sci_Vector4__f_len123;
          const x$8 = this.sci_Vector4__f_suffix3;
          const x$9 = this.sci_Vector4__f_suffix2;
          const x$10 = this.sci_BigVector__f_suffix1;
          const x$11 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(x$2, x$3, x$4, x$5, x$6, x$7, a4c, x$8, x$9, x$10, x$11)
        } else if ((i3 < this.sci_Vector4__f_suffix3.u.length)) {
          const a3$1 = this.sci_Vector4__f_suffix3;
          const a3c$1 = $asArrayOf_O(a3$1.clone__O(), 3);
          const a2$1 = a3c$1.get(i3);
          const a2c$1 = $asArrayOf_O(a2$1.clone__O(), 2);
          const a1$1 = a2c$1.get(i2);
          const a1c$1 = $asArrayOf_O(a1$1.clone__O(), 1);
          a1c$1.set(i1, elem);
          a2c$1.set(i2, a1c$1);
          a3c$1.set(i3, a2c$1);
          const x$13 = this.sci_Vector__f_prefix1;
          const x$14 = this.sci_Vector4__f_len1;
          const x$15 = this.sci_Vector4__f_prefix2;
          const x$16 = this.sci_Vector4__f_len12;
          const x$17 = this.sci_Vector4__f_prefix3;
          const x$18 = this.sci_Vector4__f_len123;
          const x$19 = this.sci_Vector4__f_data4;
          const x$20 = this.sci_Vector4__f_suffix2;
          const x$21 = this.sci_BigVector__f_suffix1;
          const x$22 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(x$13, x$14, x$15, x$16, x$17, x$18, x$19, a3c$1, x$20, x$21, x$22)
        } else if ((i2 < this.sci_Vector4__f_suffix2.u.length)) {
          const a2$2 = this.sci_Vector4__f_suffix2;
          const a2c$2 = $asArrayOf_O(a2$2.clone__O(), 2);
          const a1$2 = a2c$2.get(i2);
          const a1c$2 = $asArrayOf_O(a1$2.clone__O(), 1);
          a1c$2.set(i1, elem);
          a2c$2.set(i2, a1c$2);
          const x$24 = this.sci_Vector__f_prefix1;
          const x$25 = this.sci_Vector4__f_len1;
          const x$26 = this.sci_Vector4__f_prefix2;
          const x$27 = this.sci_Vector4__f_len12;
          const x$28 = this.sci_Vector4__f_prefix3;
          const x$29 = this.sci_Vector4__f_len123;
          const x$30 = this.sci_Vector4__f_data4;
          const x$31 = this.sci_Vector4__f_suffix3;
          const x$32 = this.sci_BigVector__f_suffix1;
          const x$33 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, a2c$2, x$32, x$33)
        } else {
          const a1$3 = this.sci_BigVector__f_suffix1;
          const a1c$3 = $asArrayOf_O(a1$3.clone__O(), 1);
          a1c$3.set(i1, elem);
          const x$35 = this.sci_Vector__f_prefix1;
          const x$36 = this.sci_Vector4__f_len1;
          const x$37 = this.sci_Vector4__f_prefix2;
          const x$38 = this.sci_Vector4__f_len12;
          const x$39 = this.sci_Vector4__f_prefix3;
          const x$40 = this.sci_Vector4__f_len123;
          const x$41 = this.sci_Vector4__f_data4;
          const x$42 = this.sci_Vector4__f_suffix3;
          const x$43 = this.sci_Vector4__f_suffix2;
          const x$44 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, a1c$3, x$44)
        }
      } else if ((index >= this.sci_Vector4__f_len12)) {
        const io$2 = ((index - this.sci_Vector4__f_len12) | 0);
        const a3$2 = this.sci_Vector4__f_prefix3;
        const idx3 = ((io$2 >>> 10) | 0);
        const idx2 = (31 & ((io$2 >>> 5) | 0));
        const idx1 = (31 & io$2);
        const a3c$2 = $asArrayOf_O(a3$2.clone__O(), 3);
        const a2$3 = a3c$2.get(idx3);
        const a2c$3 = $asArrayOf_O(a2$3.clone__O(), 2);
        const a1$4 = a2c$3.get(idx2);
        const a1c$4 = $asArrayOf_O(a1$4.clone__O(), 1);
        a1c$4.set(idx1, elem);
        a2c$3.set(idx2, a1c$4);
        a3c$2.set(idx3, a2c$3);
        const x$46 = this.sci_Vector__f_prefix1;
        const x$47 = this.sci_Vector4__f_len1;
        const x$48 = this.sci_Vector4__f_prefix2;
        const x$49 = this.sci_Vector4__f_len12;
        const x$50 = this.sci_Vector4__f_len123;
        const x$51 = this.sci_Vector4__f_data4;
        const x$52 = this.sci_Vector4__f_suffix3;
        const x$53 = this.sci_Vector4__f_suffix2;
        const x$54 = this.sci_BigVector__f_suffix1;
        const x$55 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$46, x$47, x$48, x$49, a3c$2, x$50, x$51, x$52, x$53, x$54, x$55)
      } else if ((index >= this.sci_Vector4__f_len1)) {
        const io$3 = ((index - this.sci_Vector4__f_len1) | 0);
        const a2$4 = this.sci_Vector4__f_prefix2;
        const idx2$1 = ((io$3 >>> 5) | 0);
        const idx1$1 = (31 & io$3);
        const a2c$4 = $asArrayOf_O(a2$4.clone__O(), 2);
        const a1$5 = a2c$4.get(idx2$1);
        const a1c$5 = $asArrayOf_O(a1$5.clone__O(), 1);
        a1c$5.set(idx1$1, elem);
        a2c$4.set(idx2$1, a1c$5);
        const x$57 = this.sci_Vector__f_prefix1;
        const x$58 = this.sci_Vector4__f_len1;
        const x$59 = this.sci_Vector4__f_len12;
        const x$60 = this.sci_Vector4__f_prefix3;
        const x$61 = this.sci_Vector4__f_len123;
        const x$62 = this.sci_Vector4__f_data4;
        const x$63 = this.sci_Vector4__f_suffix3;
        const x$64 = this.sci_Vector4__f_suffix2;
        const x$65 = this.sci_BigVector__f_suffix1;
        const x$66 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$57, x$58, a2c$4, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66)
      } else {
        const a1$6 = this.sci_Vector__f_prefix1;
        const a1c$6 = $asArrayOf_O(a1$6.clone__O(), 1);
        a1c$6.set(index, elem);
        const len1 = this.sci_Vector4__f_len1;
        const prefix2 = this.sci_Vector4__f_prefix2;
        const len12 = this.sci_Vector4__f_len12;
        const prefix3 = this.sci_Vector4__f_prefix3;
        const len123 = this.sci_Vector4__f_len123;
        const data4 = this.sci_Vector4__f_data4;
        const suffix3 = this.sci_Vector4__f_suffix3;
        const suffix2 = this.sci_Vector4__f_suffix2;
        const suffix1 = this.sci_BigVector__f_suffix1;
        const length0 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(a1c$6, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, suffix1, length0)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  appended__O__sci_Vector(elem) {
    if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
      const x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
      const x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector4__f_len1;
      const x$5 = this.sci_Vector4__f_prefix2;
      const x$6 = this.sci_Vector4__f_len12;
      const x$7 = this.sci_Vector4__f_prefix3;
      const x$8 = this.sci_Vector4__f_len123;
      const x$9 = this.sci_Vector4__f_data4;
      const x$10 = this.sci_Vector4__f_suffix3;
      const x$11 = this.sci_Vector4__f_suffix2;
      return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$1, x$2)
    } else if ((this.sci_Vector4__f_suffix2.u.length < 31)) {
      const x$12 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1), 2);
      const a = $newArrayObject($d_O.getArrayOf(), [1]);
      a.set(0, elem);
      const x$14 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$15 = this.sci_Vector__f_prefix1;
      const x$16 = this.sci_Vector4__f_len1;
      const x$17 = this.sci_Vector4__f_prefix2;
      const x$18 = this.sci_Vector4__f_len12;
      const x$19 = this.sci_Vector4__f_prefix3;
      const x$20 = this.sci_Vector4__f_len123;
      const x$21 = this.sci_Vector4__f_data4;
      const x$22 = this.sci_Vector4__f_suffix3;
      return new $c_sci_Vector4(x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$12, a, x$14)
    } else if ((this.sci_Vector4__f_suffix3.u.length < 31)) {
      const x$23 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
      const x$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$1 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$1.set(0, elem);
      const x$26 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$27 = this.sci_Vector__f_prefix1;
      const x$28 = this.sci_Vector4__f_len1;
      const x$29 = this.sci_Vector4__f_prefix2;
      const x$30 = this.sci_Vector4__f_len12;
      const x$31 = this.sci_Vector4__f_prefix3;
      const x$32 = this.sci_Vector4__f_len123;
      const x$33 = this.sci_Vector4__f_data4;
      return new $c_sci_Vector4(x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$23, x$24, a$1, x$26)
    } else if ((this.sci_Vector4__f_data4.u.length < 30)) {
      const x$34 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_data4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
      const x$35 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$2 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$2.set(0, elem);
      const x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$39 = this.sci_Vector__f_prefix1;
      const x$40 = this.sci_Vector4__f_len1;
      const x$41 = this.sci_Vector4__f_prefix2;
      const x$42 = this.sci_Vector4__f_len12;
      const x$43 = this.sci_Vector4__f_prefix3;
      const x$44 = this.sci_Vector4__f_len123;
      return new $c_sci_Vector4(x$39, x$40, x$41, x$42, x$43, x$44, x$34, x$35, x$36, a$2, x$38)
    } else {
      const $$x11 = this.sci_Vector__f_prefix1;
      const $$x10 = this.sci_Vector4__f_len1;
      const $$x9 = this.sci_Vector4__f_prefix2;
      const $$x8 = this.sci_Vector4__f_len12;
      const $$x7 = this.sci_Vector4__f_prefix3;
      const $$x6 = this.sci_Vector4__f_len123;
      const $$x5 = this.sci_Vector4__f_data4;
      const $$x4 = this.sci_Vector4__f_len123;
      const $$x3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
      const x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
      const a$3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [1]);
      a$3.set(0, x);
      const $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$4 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$4.set(0, elem);
      return new $c_sci_Vector5($$x11, $$x10, $$x9, $$x8, $$x7, $$x6, $$x5, ((983040 + $$x4) | 0), $$x3, a$3, $$x2, $$x1, a$4, ((1 + this.sci_BigVector__f_length0) | 0))
    }
  };
  map__F1__sci_Vector(f) {
    const x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
    const x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector4__f_prefix2, f), 2);
    const x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector4__f_prefix3, f), 3);
    const x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector4__f_data4, f), 4);
    const x$5 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector4__f_suffix3, f), 3);
    const x$6 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector4__f_suffix2, f), 2);
    const x$7 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
    const x$8 = this.sci_Vector4__f_len1;
    const x$9 = this.sci_Vector4__f_len12;
    const x$10 = this.sci_Vector4__f_len123;
    const x$11 = this.sci_BigVector__f_length0;
    return new $c_sci_Vector4(x$1, x$8, x$2, x$9, x$3, x$10, x$4, x$5, x$6, x$7, x$11)
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector4__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector4__f_prefix3);
    b.consider__I__AO__V(4, this.sci_Vector4__f_data4);
    b.consider__I__AO__V(3, this.sci_Vector4__f_suffix3);
    b.consider__I__AO__V(2, this.sci_Vector4__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector4__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector4__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector4__f_len12) | 0);
      const x$4 = (((-1) + this.sci_Vector4__f_len123) | 0);
      const x$5 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$6 = this.sci_Vector4__f_prefix2;
      const x$7 = this.sci_Vector4__f_prefix3;
      const x$8 = this.sci_Vector4__f_data4;
      const x$9 = this.sci_Vector4__f_suffix3;
      const x$10 = this.sci_Vector4__f_suffix2;
      const x$11 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector4(x$1, x$2, x$6, x$3, x$7, x$4, x$8, x$9, x$10, x$11, x$5)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 7
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector4__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector4__f_prefix3;
        break
      }
      case 3: {
        return this.sci_Vector4__f_data4;
        break
      }
      case 4: {
        return this.sci_Vector4__f_suffix3;
        break
      }
      case 5: {
        return this.sci_Vector4__f_suffix2;
        break
      }
      case 6: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const suffix1b = $m_sci_VectorStatics$().append1IfSpace__AO__sc_IterableOnce__AO(this.sci_BigVector__f_suffix1, suffix);
    if ((suffix1b !== null)) {
      const x$2 = ((((this.sci_BigVector__f_length0 - this.sci_BigVector__f_suffix1.u.length) | 0) + suffix1b.u.length) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector4__f_len1;
      const x$5 = this.sci_Vector4__f_prefix2;
      const x$6 = this.sci_Vector4__f_len12;
      const x$7 = this.sci_Vector4__f_prefix3;
      const x$8 = this.sci_Vector4__f_len123;
      const x$9 = this.sci_Vector4__f_data4;
      const x$10 = this.sci_Vector4__f_suffix3;
      const x$11 = this.sci_Vector4__f_suffix2;
      return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, suffix1b, x$2)
    } else {
      return $c_sci_Vector.prototype.appendedAll0__sc_IterableOnce__I__sci_Vector.call(this, suffix, k)
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this.map__F1__sci_Vector(f)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector4__f_len123) | 0);
      if ((io >= 0)) {
        const i4 = ((io >>> 15) | 0);
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))
      } else if ((index >= this.sci_Vector4__f_len12)) {
        const io$2 = ((index - this.sci_Vector4__f_len12) | 0);
        return this.sci_Vector4__f_prefix3.get(((io$2 >>> 10) | 0)).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector4__f_len1)) {
        const io$3 = ((index - this.sci_Vector4__f_len1) | 0);
        return this.sci_Vector4__f_prefix2.get(((io$3 >>> 5) | 0)).get((31 & io$3))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"))
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth))
}
const $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
class $c_sci_Vector5 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector5__f_len1 = 0;
    this.sci_Vector5__f_prefix2 = null;
    this.sci_Vector5__f_len12 = 0;
    this.sci_Vector5__f_prefix3 = null;
    this.sci_Vector5__f_len123 = 0;
    this.sci_Vector5__f_prefix4 = null;
    this.sci_Vector5__f_len1234 = 0;
    this.sci_Vector5__f_data5 = null;
    this.sci_Vector5__f_suffix4 = null;
    this.sci_Vector5__f_suffix3 = null;
    this.sci_Vector5__f_suffix2 = null;
    this.sci_Vector5__f_len1 = len1;
    this.sci_Vector5__f_prefix2 = prefix2;
    this.sci_Vector5__f_len12 = len12;
    this.sci_Vector5__f_prefix3 = prefix3;
    this.sci_Vector5__f_len123 = len123;
    this.sci_Vector5__f_prefix4 = prefix4;
    this.sci_Vector5__f_len1234 = len1234;
    this.sci_Vector5__f_data5 = data5;
    this.sci_Vector5__f_suffix4 = suffix4;
    this.sci_Vector5__f_suffix3 = suffix3;
    this.sci_Vector5__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector5__f_len1234) | 0);
      if ((io >= 0)) {
        const i5 = ((io >>> 20) | 0);
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))))
      } else if ((index >= this.sci_Vector5__f_len123)) {
        const io$2 = ((index - this.sci_Vector5__f_len123) | 0);
        return this.sci_Vector5__f_prefix4.get(((io$2 >>> 15) | 0)).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector5__f_len12)) {
        const io$3 = ((index - this.sci_Vector5__f_len12) | 0);
        return this.sci_Vector5__f_prefix3.get(((io$3 >>> 10) | 0)).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector5__f_len1)) {
        const io$4 = ((index - this.sci_Vector5__f_len1) | 0);
        return this.sci_Vector5__f_prefix2.get(((io$4 >>> 5) | 0)).get((31 & io$4))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  updated__I__O__sci_Vector(index, elem) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      if ((index >= this.sci_Vector5__f_len1234)) {
        const io = ((index - this.sci_Vector5__f_len1234) | 0);
        const i5 = ((io >>> 20) | 0);
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        if ((i5 < this.sci_Vector5__f_data5.u.length)) {
          const a5 = this.sci_Vector5__f_data5;
          const a5c = $asArrayOf_O(a5.clone__O(), 5);
          const a4 = a5c.get(i5);
          const a4c = $asArrayOf_O(a4.clone__O(), 4);
          const a3 = a4c.get(i4);
          const a3c = $asArrayOf_O(a3.clone__O(), 3);
          const a2 = a3c.get(i3);
          const a2c = $asArrayOf_O(a2.clone__O(), 2);
          const a1 = a2c.get(i2);
          const a1c = $asArrayOf_O(a1.clone__O(), 1);
          a1c.set(i1, elem);
          a2c.set(i2, a1c);
          a3c.set(i3, a2c);
          a4c.set(i4, a3c);
          a5c.set(i5, a4c);
          const x$2 = this.sci_Vector__f_prefix1;
          const x$3 = this.sci_Vector5__f_len1;
          const x$4 = this.sci_Vector5__f_prefix2;
          const x$5 = this.sci_Vector5__f_len12;
          const x$6 = this.sci_Vector5__f_prefix3;
          const x$7 = this.sci_Vector5__f_len123;
          const x$8 = this.sci_Vector5__f_prefix4;
          const x$9 = this.sci_Vector5__f_len1234;
          const x$10 = this.sci_Vector5__f_suffix4;
          const x$11 = this.sci_Vector5__f_suffix3;
          const x$12 = this.sci_Vector5__f_suffix2;
          const x$13 = this.sci_BigVector__f_suffix1;
          const x$14 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, a5c, x$10, x$11, x$12, x$13, x$14)
        } else if ((i4 < this.sci_Vector5__f_suffix4.u.length)) {
          const a4$1 = this.sci_Vector5__f_suffix4;
          const a4c$1 = $asArrayOf_O(a4$1.clone__O(), 4);
          const a3$1 = a4c$1.get(i4);
          const a3c$1 = $asArrayOf_O(a3$1.clone__O(), 3);
          const a2$1 = a3c$1.get(i3);
          const a2c$1 = $asArrayOf_O(a2$1.clone__O(), 2);
          const a1$1 = a2c$1.get(i2);
          const a1c$1 = $asArrayOf_O(a1$1.clone__O(), 1);
          a1c$1.set(i1, elem);
          a2c$1.set(i2, a1c$1);
          a3c$1.set(i3, a2c$1);
          a4c$1.set(i4, a3c$1);
          const x$16 = this.sci_Vector__f_prefix1;
          const x$17 = this.sci_Vector5__f_len1;
          const x$18 = this.sci_Vector5__f_prefix2;
          const x$19 = this.sci_Vector5__f_len12;
          const x$20 = this.sci_Vector5__f_prefix3;
          const x$21 = this.sci_Vector5__f_len123;
          const x$22 = this.sci_Vector5__f_prefix4;
          const x$23 = this.sci_Vector5__f_len1234;
          const x$24 = this.sci_Vector5__f_data5;
          const x$25 = this.sci_Vector5__f_suffix3;
          const x$26 = this.sci_Vector5__f_suffix2;
          const x$27 = this.sci_BigVector__f_suffix1;
          const x$28 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$23, x$24, a4c$1, x$25, x$26, x$27, x$28)
        } else if ((i3 < this.sci_Vector5__f_suffix3.u.length)) {
          const a3$2 = this.sci_Vector5__f_suffix3;
          const a3c$2 = $asArrayOf_O(a3$2.clone__O(), 3);
          const a2$2 = a3c$2.get(i3);
          const a2c$2 = $asArrayOf_O(a2$2.clone__O(), 2);
          const a1$2 = a2c$2.get(i2);
          const a1c$2 = $asArrayOf_O(a1$2.clone__O(), 1);
          a1c$2.set(i1, elem);
          a2c$2.set(i2, a1c$2);
          a3c$2.set(i3, a2c$2);
          const x$30 = this.sci_Vector__f_prefix1;
          const x$31 = this.sci_Vector5__f_len1;
          const x$32 = this.sci_Vector5__f_prefix2;
          const x$33 = this.sci_Vector5__f_len12;
          const x$34 = this.sci_Vector5__f_prefix3;
          const x$35 = this.sci_Vector5__f_len123;
          const x$36 = this.sci_Vector5__f_prefix4;
          const x$37 = this.sci_Vector5__f_len1234;
          const x$38 = this.sci_Vector5__f_data5;
          const x$39 = this.sci_Vector5__f_suffix4;
          const x$40 = this.sci_Vector5__f_suffix2;
          const x$41 = this.sci_BigVector__f_suffix1;
          const x$42 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, a3c$2, x$40, x$41, x$42)
        } else if ((i2 < this.sci_Vector5__f_suffix2.u.length)) {
          const a2$3 = this.sci_Vector5__f_suffix2;
          const a2c$3 = $asArrayOf_O(a2$3.clone__O(), 2);
          const a1$3 = a2c$3.get(i2);
          const a1c$3 = $asArrayOf_O(a1$3.clone__O(), 1);
          a1c$3.set(i1, elem);
          a2c$3.set(i2, a1c$3);
          const x$44 = this.sci_Vector__f_prefix1;
          const x$45 = this.sci_Vector5__f_len1;
          const x$46 = this.sci_Vector5__f_prefix2;
          const x$47 = this.sci_Vector5__f_len12;
          const x$48 = this.sci_Vector5__f_prefix3;
          const x$49 = this.sci_Vector5__f_len123;
          const x$50 = this.sci_Vector5__f_prefix4;
          const x$51 = this.sci_Vector5__f_len1234;
          const x$52 = this.sci_Vector5__f_data5;
          const x$53 = this.sci_Vector5__f_suffix4;
          const x$54 = this.sci_Vector5__f_suffix3;
          const x$55 = this.sci_BigVector__f_suffix1;
          const x$56 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$52, x$53, x$54, a2c$3, x$55, x$56)
        } else {
          const a1$4 = this.sci_BigVector__f_suffix1;
          const a1c$4 = $asArrayOf_O(a1$4.clone__O(), 1);
          a1c$4.set(i1, elem);
          const x$58 = this.sci_Vector__f_prefix1;
          const x$59 = this.sci_Vector5__f_len1;
          const x$60 = this.sci_Vector5__f_prefix2;
          const x$61 = this.sci_Vector5__f_len12;
          const x$62 = this.sci_Vector5__f_prefix3;
          const x$63 = this.sci_Vector5__f_len123;
          const x$64 = this.sci_Vector5__f_prefix4;
          const x$65 = this.sci_Vector5__f_len1234;
          const x$66 = this.sci_Vector5__f_data5;
          const x$67 = this.sci_Vector5__f_suffix4;
          const x$68 = this.sci_Vector5__f_suffix3;
          const x$69 = this.sci_Vector5__f_suffix2;
          const x$70 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, a1c$4, x$70)
        }
      } else if ((index >= this.sci_Vector5__f_len123)) {
        const io$2 = ((index - this.sci_Vector5__f_len123) | 0);
        const a4$2 = this.sci_Vector5__f_prefix4;
        const idx4 = ((io$2 >>> 15) | 0);
        const idx3 = (31 & ((io$2 >>> 10) | 0));
        const idx2 = (31 & ((io$2 >>> 5) | 0));
        const idx1 = (31 & io$2);
        const a4c$2 = $asArrayOf_O(a4$2.clone__O(), 4);
        const a3$3 = a4c$2.get(idx4);
        const a3c$3 = $asArrayOf_O(a3$3.clone__O(), 3);
        const a2$4 = a3c$3.get(idx3);
        const a2c$4 = $asArrayOf_O(a2$4.clone__O(), 2);
        const a1$5 = a2c$4.get(idx2);
        const a1c$5 = $asArrayOf_O(a1$5.clone__O(), 1);
        a1c$5.set(idx1, elem);
        a2c$4.set(idx2, a1c$5);
        a3c$3.set(idx3, a2c$4);
        a4c$2.set(idx4, a3c$3);
        const x$72 = this.sci_Vector__f_prefix1;
        const x$73 = this.sci_Vector5__f_len1;
        const x$74 = this.sci_Vector5__f_prefix2;
        const x$75 = this.sci_Vector5__f_len12;
        const x$76 = this.sci_Vector5__f_prefix3;
        const x$77 = this.sci_Vector5__f_len123;
        const x$78 = this.sci_Vector5__f_len1234;
        const x$79 = this.sci_Vector5__f_data5;
        const x$80 = this.sci_Vector5__f_suffix4;
        const x$81 = this.sci_Vector5__f_suffix3;
        const x$82 = this.sci_Vector5__f_suffix2;
        const x$83 = this.sci_BigVector__f_suffix1;
        const x$84 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$72, x$73, x$74, x$75, x$76, x$77, a4c$2, x$78, x$79, x$80, x$81, x$82, x$83, x$84)
      } else if ((index >= this.sci_Vector5__f_len12)) {
        const io$3 = ((index - this.sci_Vector5__f_len12) | 0);
        const a3$4 = this.sci_Vector5__f_prefix3;
        const idx3$1 = ((io$3 >>> 10) | 0);
        const idx2$1 = (31 & ((io$3 >>> 5) | 0));
        const idx1$1 = (31 & io$3);
        const a3c$4 = $asArrayOf_O(a3$4.clone__O(), 3);
        const a2$5 = a3c$4.get(idx3$1);
        const a2c$5 = $asArrayOf_O(a2$5.clone__O(), 2);
        const a1$6 = a2c$5.get(idx2$1);
        const a1c$6 = $asArrayOf_O(a1$6.clone__O(), 1);
        a1c$6.set(idx1$1, elem);
        a2c$5.set(idx2$1, a1c$6);
        a3c$4.set(idx3$1, a2c$5);
        const x$86 = this.sci_Vector__f_prefix1;
        const x$87 = this.sci_Vector5__f_len1;
        const x$88 = this.sci_Vector5__f_prefix2;
        const x$89 = this.sci_Vector5__f_len12;
        const x$90 = this.sci_Vector5__f_len123;
        const x$91 = this.sci_Vector5__f_prefix4;
        const x$92 = this.sci_Vector5__f_len1234;
        const x$93 = this.sci_Vector5__f_data5;
        const x$94 = this.sci_Vector5__f_suffix4;
        const x$95 = this.sci_Vector5__f_suffix3;
        const x$96 = this.sci_Vector5__f_suffix2;
        const x$97 = this.sci_BigVector__f_suffix1;
        const x$98 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$86, x$87, x$88, x$89, a3c$4, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98)
      } else if ((index >= this.sci_Vector5__f_len1)) {
        const io$4 = ((index - this.sci_Vector5__f_len1) | 0);
        const a2$6 = this.sci_Vector5__f_prefix2;
        const idx2$2 = ((io$4 >>> 5) | 0);
        const idx1$2 = (31 & io$4);
        const a2c$6 = $asArrayOf_O(a2$6.clone__O(), 2);
        const a1$7 = a2c$6.get(idx2$2);
        const a1c$7 = $asArrayOf_O(a1$7.clone__O(), 1);
        a1c$7.set(idx1$2, elem);
        a2c$6.set(idx2$2, a1c$7);
        const x$100 = this.sci_Vector__f_prefix1;
        const x$101 = this.sci_Vector5__f_len1;
        const x$102 = this.sci_Vector5__f_len12;
        const x$103 = this.sci_Vector5__f_prefix3;
        const x$104 = this.sci_Vector5__f_len123;
        const x$105 = this.sci_Vector5__f_prefix4;
        const x$106 = this.sci_Vector5__f_len1234;
        const x$107 = this.sci_Vector5__f_data5;
        const x$108 = this.sci_Vector5__f_suffix4;
        const x$109 = this.sci_Vector5__f_suffix3;
        const x$110 = this.sci_Vector5__f_suffix2;
        const x$111 = this.sci_BigVector__f_suffix1;
        const x$112 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$100, x$101, a2c$6, x$102, x$103, x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, x$112)
      } else {
        const a1$8 = this.sci_Vector__f_prefix1;
        const a1c$8 = $asArrayOf_O(a1$8.clone__O(), 1);
        a1c$8.set(index, elem);
        const len1 = this.sci_Vector5__f_len1;
        const prefix2 = this.sci_Vector5__f_prefix2;
        const len12 = this.sci_Vector5__f_len12;
        const prefix3 = this.sci_Vector5__f_prefix3;
        const len123 = this.sci_Vector5__f_len123;
        const prefix4 = this.sci_Vector5__f_prefix4;
        const len1234 = this.sci_Vector5__f_len1234;
        const data5 = this.sci_Vector5__f_data5;
        const suffix4 = this.sci_Vector5__f_suffix4;
        const suffix3 = this.sci_Vector5__f_suffix3;
        const suffix2 = this.sci_Vector5__f_suffix2;
        const suffix1 = this.sci_BigVector__f_suffix1;
        const length0 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(a1c$8, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, suffix1, length0)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  appended__O__sci_Vector(elem) {
    if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
      const x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
      const x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector5__f_len1;
      const x$5 = this.sci_Vector5__f_prefix2;
      const x$6 = this.sci_Vector5__f_len12;
      const x$7 = this.sci_Vector5__f_prefix3;
      const x$8 = this.sci_Vector5__f_len123;
      const x$9 = this.sci_Vector5__f_prefix4;
      const x$10 = this.sci_Vector5__f_len1234;
      const x$11 = this.sci_Vector5__f_data5;
      const x$12 = this.sci_Vector5__f_suffix4;
      const x$13 = this.sci_Vector5__f_suffix3;
      const x$14 = this.sci_Vector5__f_suffix2;
      return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$1, x$2)
    } else if ((this.sci_Vector5__f_suffix2.u.length < 31)) {
      const x$15 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1), 2);
      const a = $newArrayObject($d_O.getArrayOf(), [1]);
      a.set(0, elem);
      const x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$18 = this.sci_Vector__f_prefix1;
      const x$19 = this.sci_Vector5__f_len1;
      const x$20 = this.sci_Vector5__f_prefix2;
      const x$21 = this.sci_Vector5__f_len12;
      const x$22 = this.sci_Vector5__f_prefix3;
      const x$23 = this.sci_Vector5__f_len123;
      const x$24 = this.sci_Vector5__f_prefix4;
      const x$25 = this.sci_Vector5__f_len1234;
      const x$26 = this.sci_Vector5__f_data5;
      const x$27 = this.sci_Vector5__f_suffix4;
      const x$28 = this.sci_Vector5__f_suffix3;
      return new $c_sci_Vector5(x$18, x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$15, a, x$17)
    } else if ((this.sci_Vector5__f_suffix3.u.length < 31)) {
      const x$29 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
      const x$30 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$1 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$1.set(0, elem);
      const x$32 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$33 = this.sci_Vector__f_prefix1;
      const x$34 = this.sci_Vector5__f_len1;
      const x$35 = this.sci_Vector5__f_prefix2;
      const x$36 = this.sci_Vector5__f_len12;
      const x$37 = this.sci_Vector5__f_prefix3;
      const x$38 = this.sci_Vector5__f_len123;
      const x$39 = this.sci_Vector5__f_prefix4;
      const x$40 = this.sci_Vector5__f_len1234;
      const x$41 = this.sci_Vector5__f_data5;
      const x$42 = this.sci_Vector5__f_suffix4;
      return new $c_sci_Vector5(x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$29, x$30, a$1, x$32)
    } else if ((this.sci_Vector5__f_suffix4.u.length < 31)) {
      const x$43 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
      const x$44 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$2 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$2.set(0, elem);
      const x$47 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$48 = this.sci_Vector__f_prefix1;
      const x$49 = this.sci_Vector5__f_len1;
      const x$50 = this.sci_Vector5__f_prefix2;
      const x$51 = this.sci_Vector5__f_len12;
      const x$52 = this.sci_Vector5__f_prefix3;
      const x$53 = this.sci_Vector5__f_len123;
      const x$54 = this.sci_Vector5__f_prefix4;
      const x$55 = this.sci_Vector5__f_len1234;
      const x$56 = this.sci_Vector5__f_data5;
      return new $c_sci_Vector5(x$48, x$49, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$43, x$44, x$45, a$2, x$47)
    } else if ((this.sci_Vector5__f_data5.u.length < 30)) {
      const x$57 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_data5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
      const x$58 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
      const x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x$60 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$3 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$3.set(0, elem);
      const x$62 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$63 = this.sci_Vector__f_prefix1;
      const x$64 = this.sci_Vector5__f_len1;
      const x$65 = this.sci_Vector5__f_prefix2;
      const x$66 = this.sci_Vector5__f_len12;
      const x$67 = this.sci_Vector5__f_prefix3;
      const x$68 = this.sci_Vector5__f_len123;
      const x$69 = this.sci_Vector5__f_prefix4;
      const x$70 = this.sci_Vector5__f_len1234;
      return new $c_sci_Vector5(x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$70, x$57, x$58, x$59, x$60, a$3, x$62)
    } else {
      const $$x14 = this.sci_Vector__f_prefix1;
      const $$x13 = this.sci_Vector5__f_len1;
      const $$x12 = this.sci_Vector5__f_prefix2;
      const $$x11 = this.sci_Vector5__f_len12;
      const $$x10 = this.sci_Vector5__f_prefix3;
      const $$x9 = this.sci_Vector5__f_len123;
      const $$x8 = this.sci_Vector5__f_prefix4;
      const $$x7 = this.sci_Vector5__f_len1234;
      const $$x6 = this.sci_Vector5__f_data5;
      const $$x5 = this.sci_Vector5__f_len1234;
      const $$x4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
      const x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
      const a$4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [1]);
      a$4.set(0, x);
      const $$x3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
      const $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$5 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$5.set(0, elem);
      return new $c_sci_Vector6($$x14, $$x13, $$x12, $$x11, $$x10, $$x9, $$x8, $$x7, $$x6, ((31457280 + $$x5) | 0), $$x4, a$4, $$x3, $$x2, $$x1, a$5, ((1 + this.sci_BigVector__f_length0) | 0))
    }
  };
  map__F1__sci_Vector(f) {
    const x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
    const x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector5__f_prefix2, f), 2);
    const x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector5__f_prefix3, f), 3);
    const x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector5__f_prefix4, f), 4);
    const x$5 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector5__f_data5, f), 5);
    const x$6 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector5__f_suffix4, f), 4);
    const x$7 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector5__f_suffix3, f), 3);
    const x$8 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector5__f_suffix2, f), 2);
    const x$9 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
    const x$10 = this.sci_Vector5__f_len1;
    const x$11 = this.sci_Vector5__f_len12;
    const x$12 = this.sci_Vector5__f_len123;
    const x$13 = this.sci_Vector5__f_len1234;
    const x$14 = this.sci_BigVector__f_length0;
    return new $c_sci_Vector5(x$1, x$10, x$2, x$11, x$3, x$12, x$4, x$13, x$5, x$6, x$7, x$8, x$9, x$14)
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector5__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector5__f_prefix3);
    b.consider__I__AO__V(4, this.sci_Vector5__f_prefix4);
    b.consider__I__AO__V(5, this.sci_Vector5__f_data5);
    b.consider__I__AO__V(4, this.sci_Vector5__f_suffix4);
    b.consider__I__AO__V(3, this.sci_Vector5__f_suffix3);
    b.consider__I__AO__V(2, this.sci_Vector5__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector5__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector5__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector5__f_len12) | 0);
      const x$4 = (((-1) + this.sci_Vector5__f_len123) | 0);
      const x$5 = (((-1) + this.sci_Vector5__f_len1234) | 0);
      const x$6 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$7 = this.sci_Vector5__f_prefix2;
      const x$8 = this.sci_Vector5__f_prefix3;
      const x$9 = this.sci_Vector5__f_prefix4;
      const x$10 = this.sci_Vector5__f_data5;
      const x$11 = this.sci_Vector5__f_suffix4;
      const x$12 = this.sci_Vector5__f_suffix3;
      const x$13 = this.sci_Vector5__f_suffix2;
      const x$14 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector5(x$1, x$2, x$7, x$3, x$8, x$4, x$9, x$5, x$10, x$11, x$12, x$13, x$14, x$6)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 9
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector5__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector5__f_prefix3;
        break
      }
      case 3: {
        return this.sci_Vector5__f_prefix4;
        break
      }
      case 4: {
        return this.sci_Vector5__f_data5;
        break
      }
      case 5: {
        return this.sci_Vector5__f_suffix4;
        break
      }
      case 6: {
        return this.sci_Vector5__f_suffix3;
        break
      }
      case 7: {
        return this.sci_Vector5__f_suffix2;
        break
      }
      case 8: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const suffix1b = $m_sci_VectorStatics$().append1IfSpace__AO__sc_IterableOnce__AO(this.sci_BigVector__f_suffix1, suffix);
    if ((suffix1b !== null)) {
      const x$2 = ((((this.sci_BigVector__f_length0 - this.sci_BigVector__f_suffix1.u.length) | 0) + suffix1b.u.length) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector5__f_len1;
      const x$5 = this.sci_Vector5__f_prefix2;
      const x$6 = this.sci_Vector5__f_len12;
      const x$7 = this.sci_Vector5__f_prefix3;
      const x$8 = this.sci_Vector5__f_len123;
      const x$9 = this.sci_Vector5__f_prefix4;
      const x$10 = this.sci_Vector5__f_len1234;
      const x$11 = this.sci_Vector5__f_data5;
      const x$12 = this.sci_Vector5__f_suffix4;
      const x$13 = this.sci_Vector5__f_suffix3;
      const x$14 = this.sci_Vector5__f_suffix2;
      return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, suffix1b, x$2)
    } else {
      return $c_sci_Vector.prototype.appendedAll0__sc_IterableOnce__I__sci_Vector.call(this, suffix, k)
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this.map__F1__sci_Vector(f)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector5__f_len1234) | 0);
      if ((io >= 0)) {
        const i5 = ((io >>> 20) | 0);
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))))
      } else if ((index >= this.sci_Vector5__f_len123)) {
        const io$2 = ((index - this.sci_Vector5__f_len123) | 0);
        return this.sci_Vector5__f_prefix4.get(((io$2 >>> 15) | 0)).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector5__f_len12)) {
        const io$3 = ((index - this.sci_Vector5__f_len12) | 0);
        return this.sci_Vector5__f_prefix3.get(((io$3 >>> 10) | 0)).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector5__f_len1)) {
        const io$4 = ((index - this.sci_Vector5__f_len1) | 0);
        return this.sci_Vector5__f_prefix2.get(((io$4 >>> 5) | 0)).get((31 & io$4))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"))
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth))
}
const $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
class $c_sci_Vector6 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector6__f_len1 = 0;
    this.sci_Vector6__f_prefix2 = null;
    this.sci_Vector6__f_len12 = 0;
    this.sci_Vector6__f_prefix3 = null;
    this.sci_Vector6__f_len123 = 0;
    this.sci_Vector6__f_prefix4 = null;
    this.sci_Vector6__f_len1234 = 0;
    this.sci_Vector6__f_prefix5 = null;
    this.sci_Vector6__f_len12345 = 0;
    this.sci_Vector6__f_data6 = null;
    this.sci_Vector6__f_suffix5 = null;
    this.sci_Vector6__f_suffix4 = null;
    this.sci_Vector6__f_suffix3 = null;
    this.sci_Vector6__f_suffix2 = null;
    this.sci_Vector6__f_len1 = len1;
    this.sci_Vector6__f_prefix2 = prefix2;
    this.sci_Vector6__f_len12 = len12;
    this.sci_Vector6__f_prefix3 = prefix3;
    this.sci_Vector6__f_len123 = len123;
    this.sci_Vector6__f_prefix4 = prefix4;
    this.sci_Vector6__f_len1234 = len1234;
    this.sci_Vector6__f_prefix5 = prefix5;
    this.sci_Vector6__f_len12345 = len12345;
    this.sci_Vector6__f_data6 = data6;
    this.sci_Vector6__f_suffix5 = suffix5;
    this.sci_Vector6__f_suffix4 = suffix4;
    this.sci_Vector6__f_suffix3 = suffix3;
    this.sci_Vector6__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector6__f_len12345) | 0);
      if ((io >= 0)) {
        const i6 = ((io >>> 25) | 0);
        const i5 = (31 & ((io >>> 20) | 0));
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.get(i6).get(i5).get(i4).get(i3).get(i2).get(i1) : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))))
      } else if ((index >= this.sci_Vector6__f_len1234)) {
        const io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
        return this.sci_Vector6__f_prefix5.get(((io$2 >>> 20) | 0)).get((31 & ((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector6__f_len123)) {
        const io$3 = ((index - this.sci_Vector6__f_len123) | 0);
        return this.sci_Vector6__f_prefix4.get(((io$3 >>> 15) | 0)).get((31 & ((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector6__f_len12)) {
        const io$4 = ((index - this.sci_Vector6__f_len12) | 0);
        return this.sci_Vector6__f_prefix3.get(((io$4 >>> 10) | 0)).get((31 & ((io$4 >>> 5) | 0))).get((31 & io$4))
      } else if ((index >= this.sci_Vector6__f_len1)) {
        const io$5 = ((index - this.sci_Vector6__f_len1) | 0);
        return this.sci_Vector6__f_prefix2.get(((io$5 >>> 5) | 0)).get((31 & io$5))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  updated__I__O__sci_Vector(index, elem) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      if ((index >= this.sci_Vector6__f_len12345)) {
        const io = ((index - this.sci_Vector6__f_len12345) | 0);
        const i6 = ((io >>> 25) | 0);
        const i5 = (31 & ((io >>> 20) | 0));
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        if ((i6 < this.sci_Vector6__f_data6.u.length)) {
          const a6 = this.sci_Vector6__f_data6;
          const a6c = $asArrayOf_O(a6.clone__O(), 6);
          const a5 = a6c.get(i6);
          const a5c = $asArrayOf_O(a5.clone__O(), 5);
          const a4 = a5c.get(i5);
          const a4c = $asArrayOf_O(a4.clone__O(), 4);
          const a3 = a4c.get(i4);
          const a3c = $asArrayOf_O(a3.clone__O(), 3);
          const a2 = a3c.get(i3);
          const a2c = $asArrayOf_O(a2.clone__O(), 2);
          const a1 = a2c.get(i2);
          const a1c = $asArrayOf_O(a1.clone__O(), 1);
          a1c.set(i1, elem);
          a2c.set(i2, a1c);
          a3c.set(i3, a2c);
          a4c.set(i4, a3c);
          a5c.set(i5, a4c);
          a6c.set(i6, a5c);
          const x$2 = this.sci_Vector__f_prefix1;
          const x$3 = this.sci_Vector6__f_len1;
          const x$4 = this.sci_Vector6__f_prefix2;
          const x$5 = this.sci_Vector6__f_len12;
          const x$6 = this.sci_Vector6__f_prefix3;
          const x$7 = this.sci_Vector6__f_len123;
          const x$8 = this.sci_Vector6__f_prefix4;
          const x$9 = this.sci_Vector6__f_len1234;
          const x$10 = this.sci_Vector6__f_prefix5;
          const x$11 = this.sci_Vector6__f_len12345;
          const x$12 = this.sci_Vector6__f_suffix5;
          const x$13 = this.sci_Vector6__f_suffix4;
          const x$14 = this.sci_Vector6__f_suffix3;
          const x$15 = this.sci_Vector6__f_suffix2;
          const x$16 = this.sci_BigVector__f_suffix1;
          const x$17 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, a6c, x$12, x$13, x$14, x$15, x$16, x$17)
        } else if ((i5 < this.sci_Vector6__f_suffix5.u.length)) {
          const a5$1 = this.sci_Vector6__f_suffix5;
          const a5c$1 = $asArrayOf_O(a5$1.clone__O(), 5);
          const a4$1 = a5c$1.get(i5);
          const a4c$1 = $asArrayOf_O(a4$1.clone__O(), 4);
          const a3$1 = a4c$1.get(i4);
          const a3c$1 = $asArrayOf_O(a3$1.clone__O(), 3);
          const a2$1 = a3c$1.get(i3);
          const a2c$1 = $asArrayOf_O(a2$1.clone__O(), 2);
          const a1$1 = a2c$1.get(i2);
          const a1c$1 = $asArrayOf_O(a1$1.clone__O(), 1);
          a1c$1.set(i1, elem);
          a2c$1.set(i2, a1c$1);
          a3c$1.set(i3, a2c$1);
          a4c$1.set(i4, a3c$1);
          a5c$1.set(i5, a4c$1);
          const x$19 = this.sci_Vector__f_prefix1;
          const x$20 = this.sci_Vector6__f_len1;
          const x$21 = this.sci_Vector6__f_prefix2;
          const x$22 = this.sci_Vector6__f_len12;
          const x$23 = this.sci_Vector6__f_prefix3;
          const x$24 = this.sci_Vector6__f_len123;
          const x$25 = this.sci_Vector6__f_prefix4;
          const x$26 = this.sci_Vector6__f_len1234;
          const x$27 = this.sci_Vector6__f_prefix5;
          const x$28 = this.sci_Vector6__f_len12345;
          const x$29 = this.sci_Vector6__f_data6;
          const x$30 = this.sci_Vector6__f_suffix4;
          const x$31 = this.sci_Vector6__f_suffix3;
          const x$32 = this.sci_Vector6__f_suffix2;
          const x$33 = this.sci_BigVector__f_suffix1;
          const x$34 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, a5c$1, x$30, x$31, x$32, x$33, x$34)
        } else if ((i4 < this.sci_Vector6__f_suffix4.u.length)) {
          const a4$2 = this.sci_Vector6__f_suffix4;
          const a4c$2 = $asArrayOf_O(a4$2.clone__O(), 4);
          const a3$2 = a4c$2.get(i4);
          const a3c$2 = $asArrayOf_O(a3$2.clone__O(), 3);
          const a2$2 = a3c$2.get(i3);
          const a2c$2 = $asArrayOf_O(a2$2.clone__O(), 2);
          const a1$2 = a2c$2.get(i2);
          const a1c$2 = $asArrayOf_O(a1$2.clone__O(), 1);
          a1c$2.set(i1, elem);
          a2c$2.set(i2, a1c$2);
          a3c$2.set(i3, a2c$2);
          a4c$2.set(i4, a3c$2);
          const x$36 = this.sci_Vector__f_prefix1;
          const x$37 = this.sci_Vector6__f_len1;
          const x$38 = this.sci_Vector6__f_prefix2;
          const x$39 = this.sci_Vector6__f_len12;
          const x$40 = this.sci_Vector6__f_prefix3;
          const x$41 = this.sci_Vector6__f_len123;
          const x$42 = this.sci_Vector6__f_prefix4;
          const x$43 = this.sci_Vector6__f_len1234;
          const x$44 = this.sci_Vector6__f_prefix5;
          const x$45 = this.sci_Vector6__f_len12345;
          const x$46 = this.sci_Vector6__f_data6;
          const x$47 = this.sci_Vector6__f_suffix5;
          const x$48 = this.sci_Vector6__f_suffix3;
          const x$49 = this.sci_Vector6__f_suffix2;
          const x$50 = this.sci_BigVector__f_suffix1;
          const x$51 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, a4c$2, x$48, x$49, x$50, x$51)
        } else if ((i3 < this.sci_Vector6__f_suffix3.u.length)) {
          const a3$3 = this.sci_Vector6__f_suffix3;
          const a3c$3 = $asArrayOf_O(a3$3.clone__O(), 3);
          const a2$3 = a3c$3.get(i3);
          const a2c$3 = $asArrayOf_O(a2$3.clone__O(), 2);
          const a1$3 = a2c$3.get(i2);
          const a1c$3 = $asArrayOf_O(a1$3.clone__O(), 1);
          a1c$3.set(i1, elem);
          a2c$3.set(i2, a1c$3);
          a3c$3.set(i3, a2c$3);
          const x$53 = this.sci_Vector__f_prefix1;
          const x$54 = this.sci_Vector6__f_len1;
          const x$55 = this.sci_Vector6__f_prefix2;
          const x$56 = this.sci_Vector6__f_len12;
          const x$57 = this.sci_Vector6__f_prefix3;
          const x$58 = this.sci_Vector6__f_len123;
          const x$59 = this.sci_Vector6__f_prefix4;
          const x$60 = this.sci_Vector6__f_len1234;
          const x$61 = this.sci_Vector6__f_prefix5;
          const x$62 = this.sci_Vector6__f_len12345;
          const x$63 = this.sci_Vector6__f_data6;
          const x$64 = this.sci_Vector6__f_suffix5;
          const x$65 = this.sci_Vector6__f_suffix4;
          const x$66 = this.sci_Vector6__f_suffix2;
          const x$67 = this.sci_BigVector__f_suffix1;
          const x$68 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, a3c$3, x$66, x$67, x$68)
        } else if ((i2 < this.sci_Vector6__f_suffix2.u.length)) {
          const a2$4 = this.sci_Vector6__f_suffix2;
          const a2c$4 = $asArrayOf_O(a2$4.clone__O(), 2);
          const a1$4 = a2c$4.get(i2);
          const a1c$4 = $asArrayOf_O(a1$4.clone__O(), 1);
          a1c$4.set(i1, elem);
          a2c$4.set(i2, a1c$4);
          const x$70 = this.sci_Vector__f_prefix1;
          const x$71 = this.sci_Vector6__f_len1;
          const x$72 = this.sci_Vector6__f_prefix2;
          const x$73 = this.sci_Vector6__f_len12;
          const x$74 = this.sci_Vector6__f_prefix3;
          const x$75 = this.sci_Vector6__f_len123;
          const x$76 = this.sci_Vector6__f_prefix4;
          const x$77 = this.sci_Vector6__f_len1234;
          const x$78 = this.sci_Vector6__f_prefix5;
          const x$79 = this.sci_Vector6__f_len12345;
          const x$80 = this.sci_Vector6__f_data6;
          const x$81 = this.sci_Vector6__f_suffix5;
          const x$82 = this.sci_Vector6__f_suffix4;
          const x$83 = this.sci_Vector6__f_suffix3;
          const x$84 = this.sci_BigVector__f_suffix1;
          const x$85 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, a2c$4, x$84, x$85)
        } else {
          const a1$5 = this.sci_BigVector__f_suffix1;
          const a1c$5 = $asArrayOf_O(a1$5.clone__O(), 1);
          a1c$5.set(i1, elem);
          const x$87 = this.sci_Vector__f_prefix1;
          const x$88 = this.sci_Vector6__f_len1;
          const x$89 = this.sci_Vector6__f_prefix2;
          const x$90 = this.sci_Vector6__f_len12;
          const x$91 = this.sci_Vector6__f_prefix3;
          const x$92 = this.sci_Vector6__f_len123;
          const x$93 = this.sci_Vector6__f_prefix4;
          const x$94 = this.sci_Vector6__f_len1234;
          const x$95 = this.sci_Vector6__f_prefix5;
          const x$96 = this.sci_Vector6__f_len12345;
          const x$97 = this.sci_Vector6__f_data6;
          const x$98 = this.sci_Vector6__f_suffix5;
          const x$99 = this.sci_Vector6__f_suffix4;
          const x$100 = this.sci_Vector6__f_suffix3;
          const x$101 = this.sci_Vector6__f_suffix2;
          const x$102 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$87, x$88, x$89, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, a1c$5, x$102)
        }
      } else if ((index >= this.sci_Vector6__f_len1234)) {
        const io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
        const a5$2 = this.sci_Vector6__f_prefix5;
        const idx5 = ((io$2 >>> 20) | 0);
        const idx4 = (31 & ((io$2 >>> 15) | 0));
        const idx3 = (31 & ((io$2 >>> 10) | 0));
        const idx2 = (31 & ((io$2 >>> 5) | 0));
        const idx1 = (31 & io$2);
        const a5c$2 = $asArrayOf_O(a5$2.clone__O(), 5);
        const a4$3 = a5c$2.get(idx5);
        const a4c$3 = $asArrayOf_O(a4$3.clone__O(), 4);
        const a3$4 = a4c$3.get(idx4);
        const a3c$4 = $asArrayOf_O(a3$4.clone__O(), 3);
        const a2$5 = a3c$4.get(idx3);
        const a2c$5 = $asArrayOf_O(a2$5.clone__O(), 2);
        const a1$6 = a2c$5.get(idx2);
        const a1c$6 = $asArrayOf_O(a1$6.clone__O(), 1);
        a1c$6.set(idx1, elem);
        a2c$5.set(idx2, a1c$6);
        a3c$4.set(idx3, a2c$5);
        a4c$3.set(idx4, a3c$4);
        a5c$2.set(idx5, a4c$3);
        const x$104 = this.sci_Vector__f_prefix1;
        const x$105 = this.sci_Vector6__f_len1;
        const x$106 = this.sci_Vector6__f_prefix2;
        const x$107 = this.sci_Vector6__f_len12;
        const x$108 = this.sci_Vector6__f_prefix3;
        const x$109 = this.sci_Vector6__f_len123;
        const x$110 = this.sci_Vector6__f_prefix4;
        const x$111 = this.sci_Vector6__f_len1234;
        const x$112 = this.sci_Vector6__f_len12345;
        const x$113 = this.sci_Vector6__f_data6;
        const x$114 = this.sci_Vector6__f_suffix5;
        const x$115 = this.sci_Vector6__f_suffix4;
        const x$116 = this.sci_Vector6__f_suffix3;
        const x$117 = this.sci_Vector6__f_suffix2;
        const x$118 = this.sci_BigVector__f_suffix1;
        const x$119 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, a5c$2, x$112, x$113, x$114, x$115, x$116, x$117, x$118, x$119)
      } else if ((index >= this.sci_Vector6__f_len123)) {
        const io$3 = ((index - this.sci_Vector6__f_len123) | 0);
        const a4$4 = this.sci_Vector6__f_prefix4;
        const idx4$1 = ((io$3 >>> 15) | 0);
        const idx3$1 = (31 & ((io$3 >>> 10) | 0));
        const idx2$1 = (31 & ((io$3 >>> 5) | 0));
        const idx1$1 = (31 & io$3);
        const a4c$4 = $asArrayOf_O(a4$4.clone__O(), 4);
        const a3$5 = a4c$4.get(idx4$1);
        const a3c$5 = $asArrayOf_O(a3$5.clone__O(), 3);
        const a2$6 = a3c$5.get(idx3$1);
        const a2c$6 = $asArrayOf_O(a2$6.clone__O(), 2);
        const a1$7 = a2c$6.get(idx2$1);
        const a1c$7 = $asArrayOf_O(a1$7.clone__O(), 1);
        a1c$7.set(idx1$1, elem);
        a2c$6.set(idx2$1, a1c$7);
        a3c$5.set(idx3$1, a2c$6);
        a4c$4.set(idx4$1, a3c$5);
        const x$121 = this.sci_Vector__f_prefix1;
        const x$122 = this.sci_Vector6__f_len1;
        const x$123 = this.sci_Vector6__f_prefix2;
        const x$124 = this.sci_Vector6__f_len12;
        const x$125 = this.sci_Vector6__f_prefix3;
        const x$126 = this.sci_Vector6__f_len123;
        const x$127 = this.sci_Vector6__f_len1234;
        const x$128 = this.sci_Vector6__f_prefix5;
        const x$129 = this.sci_Vector6__f_len12345;
        const x$130 = this.sci_Vector6__f_data6;
        const x$131 = this.sci_Vector6__f_suffix5;
        const x$132 = this.sci_Vector6__f_suffix4;
        const x$133 = this.sci_Vector6__f_suffix3;
        const x$134 = this.sci_Vector6__f_suffix2;
        const x$135 = this.sci_BigVector__f_suffix1;
        const x$136 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$121, x$122, x$123, x$124, x$125, x$126, a4c$4, x$127, x$128, x$129, x$130, x$131, x$132, x$133, x$134, x$135, x$136)
      } else if ((index >= this.sci_Vector6__f_len12)) {
        const io$4 = ((index - this.sci_Vector6__f_len12) | 0);
        const a3$6 = this.sci_Vector6__f_prefix3;
        const idx3$2 = ((io$4 >>> 10) | 0);
        const idx2$2 = (31 & ((io$4 >>> 5) | 0));
        const idx1$2 = (31 & io$4);
        const a3c$6 = $asArrayOf_O(a3$6.clone__O(), 3);
        const a2$7 = a3c$6.get(idx3$2);
        const a2c$7 = $asArrayOf_O(a2$7.clone__O(), 2);
        const a1$8 = a2c$7.get(idx2$2);
        const a1c$8 = $asArrayOf_O(a1$8.clone__O(), 1);
        a1c$8.set(idx1$2, elem);
        a2c$7.set(idx2$2, a1c$8);
        a3c$6.set(idx3$2, a2c$7);
        const x$138 = this.sci_Vector__f_prefix1;
        const x$139 = this.sci_Vector6__f_len1;
        const x$140 = this.sci_Vector6__f_prefix2;
        const x$141 = this.sci_Vector6__f_len12;
        const x$142 = this.sci_Vector6__f_len123;
        const x$143 = this.sci_Vector6__f_prefix4;
        const x$144 = this.sci_Vector6__f_len1234;
        const x$145 = this.sci_Vector6__f_prefix5;
        const x$146 = this.sci_Vector6__f_len12345;
        const x$147 = this.sci_Vector6__f_data6;
        const x$148 = this.sci_Vector6__f_suffix5;
        const x$149 = this.sci_Vector6__f_suffix4;
        const x$150 = this.sci_Vector6__f_suffix3;
        const x$151 = this.sci_Vector6__f_suffix2;
        const x$152 = this.sci_BigVector__f_suffix1;
        const x$153 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$138, x$139, x$140, x$141, a3c$6, x$142, x$143, x$144, x$145, x$146, x$147, x$148, x$149, x$150, x$151, x$152, x$153)
      } else if ((index >= this.sci_Vector6__f_len1)) {
        const io$5 = ((index - this.sci_Vector6__f_len1) | 0);
        const a2$8 = this.sci_Vector6__f_prefix2;
        const idx2$3 = ((io$5 >>> 5) | 0);
        const idx1$3 = (31 & io$5);
        const a2c$8 = $asArrayOf_O(a2$8.clone__O(), 2);
        const a1$9 = a2c$8.get(idx2$3);
        const a1c$9 = $asArrayOf_O(a1$9.clone__O(), 1);
        a1c$9.set(idx1$3, elem);
        a2c$8.set(idx2$3, a1c$9);
        const x$155 = this.sci_Vector__f_prefix1;
        const x$156 = this.sci_Vector6__f_len1;
        const x$157 = this.sci_Vector6__f_len12;
        const x$158 = this.sci_Vector6__f_prefix3;
        const x$159 = this.sci_Vector6__f_len123;
        const x$160 = this.sci_Vector6__f_prefix4;
        const x$161 = this.sci_Vector6__f_len1234;
        const x$162 = this.sci_Vector6__f_prefix5;
        const x$163 = this.sci_Vector6__f_len12345;
        const x$164 = this.sci_Vector6__f_data6;
        const x$165 = this.sci_Vector6__f_suffix5;
        const x$166 = this.sci_Vector6__f_suffix4;
        const x$167 = this.sci_Vector6__f_suffix3;
        const x$168 = this.sci_Vector6__f_suffix2;
        const x$169 = this.sci_BigVector__f_suffix1;
        const x$170 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$155, x$156, a2c$8, x$157, x$158, x$159, x$160, x$161, x$162, x$163, x$164, x$165, x$166, x$167, x$168, x$169, x$170)
      } else {
        const a1$10 = this.sci_Vector__f_prefix1;
        const a1c$10 = $asArrayOf_O(a1$10.clone__O(), 1);
        a1c$10.set(index, elem);
        const len1 = this.sci_Vector6__f_len1;
        const prefix2 = this.sci_Vector6__f_prefix2;
        const len12 = this.sci_Vector6__f_len12;
        const prefix3 = this.sci_Vector6__f_prefix3;
        const len123 = this.sci_Vector6__f_len123;
        const prefix4 = this.sci_Vector6__f_prefix4;
        const len1234 = this.sci_Vector6__f_len1234;
        const prefix5 = this.sci_Vector6__f_prefix5;
        const len12345 = this.sci_Vector6__f_len12345;
        const data6 = this.sci_Vector6__f_data6;
        const suffix5 = this.sci_Vector6__f_suffix5;
        const suffix4 = this.sci_Vector6__f_suffix4;
        const suffix3 = this.sci_Vector6__f_suffix3;
        const suffix2 = this.sci_Vector6__f_suffix2;
        const suffix1 = this.sci_BigVector__f_suffix1;
        const length0 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(a1c$10, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, suffix1, length0)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  appended__O__sci_Vector(elem) {
    if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
      const x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
      const x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector6__f_len1;
      const x$5 = this.sci_Vector6__f_prefix2;
      const x$6 = this.sci_Vector6__f_len12;
      const x$7 = this.sci_Vector6__f_prefix3;
      const x$8 = this.sci_Vector6__f_len123;
      const x$9 = this.sci_Vector6__f_prefix4;
      const x$10 = this.sci_Vector6__f_len1234;
      const x$11 = this.sci_Vector6__f_prefix5;
      const x$12 = this.sci_Vector6__f_len12345;
      const x$13 = this.sci_Vector6__f_data6;
      const x$14 = this.sci_Vector6__f_suffix5;
      const x$15 = this.sci_Vector6__f_suffix4;
      const x$16 = this.sci_Vector6__f_suffix3;
      const x$17 = this.sci_Vector6__f_suffix2;
      return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$1, x$2)
    } else if ((this.sci_Vector6__f_suffix2.u.length < 31)) {
      const x$18 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1), 2);
      const a = $newArrayObject($d_O.getArrayOf(), [1]);
      a.set(0, elem);
      const x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$21 = this.sci_Vector__f_prefix1;
      const x$22 = this.sci_Vector6__f_len1;
      const x$23 = this.sci_Vector6__f_prefix2;
      const x$24 = this.sci_Vector6__f_len12;
      const x$25 = this.sci_Vector6__f_prefix3;
      const x$26 = this.sci_Vector6__f_len123;
      const x$27 = this.sci_Vector6__f_prefix4;
      const x$28 = this.sci_Vector6__f_len1234;
      const x$29 = this.sci_Vector6__f_prefix5;
      const x$30 = this.sci_Vector6__f_len12345;
      const x$31 = this.sci_Vector6__f_data6;
      const x$32 = this.sci_Vector6__f_suffix5;
      const x$33 = this.sci_Vector6__f_suffix4;
      const x$34 = this.sci_Vector6__f_suffix3;
      return new $c_sci_Vector6(x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$34, x$18, a, x$20)
    } else if ((this.sci_Vector6__f_suffix3.u.length < 31)) {
      const x$35 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
      const x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$1 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$1.set(0, elem);
      const x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$39 = this.sci_Vector__f_prefix1;
      const x$40 = this.sci_Vector6__f_len1;
      const x$41 = this.sci_Vector6__f_prefix2;
      const x$42 = this.sci_Vector6__f_len12;
      const x$43 = this.sci_Vector6__f_prefix3;
      const x$44 = this.sci_Vector6__f_len123;
      const x$45 = this.sci_Vector6__f_prefix4;
      const x$46 = this.sci_Vector6__f_len1234;
      const x$47 = this.sci_Vector6__f_prefix5;
      const x$48 = this.sci_Vector6__f_len12345;
      const x$49 = this.sci_Vector6__f_data6;
      const x$50 = this.sci_Vector6__f_suffix5;
      const x$51 = this.sci_Vector6__f_suffix4;
      return new $c_sci_Vector6(x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$35, x$36, a$1, x$38)
    } else if ((this.sci_Vector6__f_suffix4.u.length < 31)) {
      const x$52 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
      const x$53 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$2 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$2.set(0, elem);
      const x$56 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$57 = this.sci_Vector__f_prefix1;
      const x$58 = this.sci_Vector6__f_len1;
      const x$59 = this.sci_Vector6__f_prefix2;
      const x$60 = this.sci_Vector6__f_len12;
      const x$61 = this.sci_Vector6__f_prefix3;
      const x$62 = this.sci_Vector6__f_len123;
      const x$63 = this.sci_Vector6__f_prefix4;
      const x$64 = this.sci_Vector6__f_len1234;
      const x$65 = this.sci_Vector6__f_prefix5;
      const x$66 = this.sci_Vector6__f_len12345;
      const x$67 = this.sci_Vector6__f_data6;
      const x$68 = this.sci_Vector6__f_suffix5;
      return new $c_sci_Vector6(x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$52, x$53, x$54, a$2, x$56)
    } else if ((this.sci_Vector6__f_suffix5.u.length < 31)) {
      const x$69 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
      const x$70 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
      const x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x$72 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$3 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$3.set(0, elem);
      const x$74 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$75 = this.sci_Vector__f_prefix1;
      const x$76 = this.sci_Vector6__f_len1;
      const x$77 = this.sci_Vector6__f_prefix2;
      const x$78 = this.sci_Vector6__f_len12;
      const x$79 = this.sci_Vector6__f_prefix3;
      const x$80 = this.sci_Vector6__f_len123;
      const x$81 = this.sci_Vector6__f_prefix4;
      const x$82 = this.sci_Vector6__f_len1234;
      const x$83 = this.sci_Vector6__f_prefix5;
      const x$84 = this.sci_Vector6__f_len12345;
      const x$85 = this.sci_Vector6__f_data6;
      return new $c_sci_Vector6(x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, x$84, x$85, x$69, x$70, x$71, x$72, a$3, x$74)
    } else if ((this.sci_Vector6__f_data6.u.length < 62)) {
      const x$86 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_data6, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))))), 6);
      const x$87 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
      const x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
      const x$89 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
      const x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
      const a$4 = $newArrayObject($d_O.getArrayOf(), [1]);
      a$4.set(0, elem);
      const x$92 = ((1 + this.sci_BigVector__f_length0) | 0);
      const x$93 = this.sci_Vector__f_prefix1;
      const x$94 = this.sci_Vector6__f_len1;
      const x$95 = this.sci_Vector6__f_prefix2;
      const x$96 = this.sci_Vector6__f_len12;
      const x$97 = this.sci_Vector6__f_prefix3;
      const x$98 = this.sci_Vector6__f_len123;
      const x$99 = this.sci_Vector6__f_prefix4;
      const x$100 = this.sci_Vector6__f_len1234;
      const x$101 = this.sci_Vector6__f_prefix5;
      const x$102 = this.sci_Vector6__f_len12345;
      return new $c_sci_Vector6(x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, x$102, x$86, x$87, x$88, x$89, x$90, a$4, x$92)
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  };
  map__F1__sci_Vector(f) {
    const x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
    const x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector6__f_prefix2, f), 2);
    const x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector6__f_prefix3, f), 3);
    const x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector6__f_prefix4, f), 4);
    const x$5 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector6__f_prefix5, f), 5);
    const x$6 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(6, this.sci_Vector6__f_data6, f), 6);
    const x$7 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector6__f_suffix5, f), 5);
    const x$8 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector6__f_suffix4, f), 4);
    const x$9 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector6__f_suffix3, f), 3);
    const x$10 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector6__f_suffix2, f), 2);
    const x$11 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
    const x$12 = this.sci_Vector6__f_len1;
    const x$13 = this.sci_Vector6__f_len12;
    const x$14 = this.sci_Vector6__f_len123;
    const x$15 = this.sci_Vector6__f_len1234;
    const x$16 = this.sci_Vector6__f_len12345;
    const x$17 = this.sci_BigVector__f_length0;
    return new $c_sci_Vector6(x$1, x$12, x$2, x$13, x$3, x$14, x$4, x$15, x$5, x$16, x$6, x$7, x$8, x$9, x$10, x$11, x$17)
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector6__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector6__f_prefix3);
    b.consider__I__AO__V(4, this.sci_Vector6__f_prefix4);
    b.consider__I__AO__V(5, this.sci_Vector6__f_prefix5);
    b.consider__I__AO__V(6, this.sci_Vector6__f_data6);
    b.consider__I__AO__V(5, this.sci_Vector6__f_suffix5);
    b.consider__I__AO__V(4, this.sci_Vector6__f_suffix4);
    b.consider__I__AO__V(3, this.sci_Vector6__f_suffix3);
    b.consider__I__AO__V(2, this.sci_Vector6__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector6__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector6__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector6__f_len12) | 0);
      const x$4 = (((-1) + this.sci_Vector6__f_len123) | 0);
      const x$5 = (((-1) + this.sci_Vector6__f_len1234) | 0);
      const x$6 = (((-1) + this.sci_Vector6__f_len12345) | 0);
      const x$7 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$8 = this.sci_Vector6__f_prefix2;
      const x$9 = this.sci_Vector6__f_prefix3;
      const x$10 = this.sci_Vector6__f_prefix4;
      const x$11 = this.sci_Vector6__f_prefix5;
      const x$12 = this.sci_Vector6__f_data6;
      const x$13 = this.sci_Vector6__f_suffix5;
      const x$14 = this.sci_Vector6__f_suffix4;
      const x$15 = this.sci_Vector6__f_suffix3;
      const x$16 = this.sci_Vector6__f_suffix2;
      const x$17 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector6(x$1, x$2, x$8, x$3, x$9, x$4, x$10, x$5, x$11, x$6, x$12, x$13, x$14, x$15, x$16, x$17, x$7)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 11
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector6__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector6__f_prefix3;
        break
      }
      case 3: {
        return this.sci_Vector6__f_prefix4;
        break
      }
      case 4: {
        return this.sci_Vector6__f_prefix5;
        break
      }
      case 5: {
        return this.sci_Vector6__f_data6;
        break
      }
      case 6: {
        return this.sci_Vector6__f_suffix5;
        break
      }
      case 7: {
        return this.sci_Vector6__f_suffix4;
        break
      }
      case 8: {
        return this.sci_Vector6__f_suffix3;
        break
      }
      case 9: {
        return this.sci_Vector6__f_suffix2;
        break
      }
      case 10: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  appendedAll0__sc_IterableOnce__I__sci_Vector(suffix, k) {
    const suffix1b = $m_sci_VectorStatics$().append1IfSpace__AO__sc_IterableOnce__AO(this.sci_BigVector__f_suffix1, suffix);
    if ((suffix1b !== null)) {
      const x$2 = ((((this.sci_BigVector__f_length0 - this.sci_BigVector__f_suffix1.u.length) | 0) + suffix1b.u.length) | 0);
      const x$3 = this.sci_Vector__f_prefix1;
      const x$4 = this.sci_Vector6__f_len1;
      const x$5 = this.sci_Vector6__f_prefix2;
      const x$6 = this.sci_Vector6__f_len12;
      const x$7 = this.sci_Vector6__f_prefix3;
      const x$8 = this.sci_Vector6__f_len123;
      const x$9 = this.sci_Vector6__f_prefix4;
      const x$10 = this.sci_Vector6__f_len1234;
      const x$11 = this.sci_Vector6__f_prefix5;
      const x$12 = this.sci_Vector6__f_len12345;
      const x$13 = this.sci_Vector6__f_data6;
      const x$14 = this.sci_Vector6__f_suffix5;
      const x$15 = this.sci_Vector6__f_suffix4;
      const x$16 = this.sci_Vector6__f_suffix3;
      const x$17 = this.sci_Vector6__f_suffix2;
      return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, suffix1b, x$2)
    } else {
      return $c_sci_Vector.prototype.appendedAll0__sc_IterableOnce__I__sci_Vector.call(this, suffix, k)
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  map__F1__O(f) {
    return this.map__F1__sci_Vector(f)
  };
  appended__O__O(elem) {
    return this.appended__O__sci_Vector(elem)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector6__f_len12345) | 0);
      if ((io >= 0)) {
        const i6 = ((io >>> 25) | 0);
        const i5 = (31 & ((io >>> 20) | 0));
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.get(i6).get(i5).get(i4).get(i3).get(i2).get(i1) : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))))
      } else if ((index >= this.sci_Vector6__f_len1234)) {
        const io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
        return this.sci_Vector6__f_prefix5.get(((io$2 >>> 20) | 0)).get((31 & ((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector6__f_len123)) {
        const io$3 = ((index - this.sci_Vector6__f_len123) | 0);
        return this.sci_Vector6__f_prefix4.get(((io$3 >>> 15) | 0)).get((31 & ((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector6__f_len12)) {
        const io$4 = ((index - this.sci_Vector6__f_len12) | 0);
        return this.sci_Vector6__f_prefix3.get(((io$4 >>> 10) | 0)).get((31 & ((io$4 >>> 5) | 0))).get((31 & io$4))
      } else if ((index >= this.sci_Vector6__f_len1)) {
        const io$5 = ((index - this.sci_Vector6__f_len1) | 0);
        return this.sci_Vector6__f_prefix2.get(((io$5 >>> 5) | 0)).get((31 & io$5))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"))
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth))
}
const $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(0))
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  addOne__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  appendAll__sc_IterableOnce__scm_StringBuilder(xs) {
    if ((xs instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(xs);
      const this$3 = this.scm_StringBuilder__f_underlying;
      $m_sci_WrappedString$();
      const str = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
      const x3 = $as_scm_ArraySeq$ofChar(xs);
      this.scm_StringBuilder__f_underlying.append__AC__jl_StringBuilder(x3.array__AC())
    } else if ((xs instanceof $c_scm_StringBuilder)) {
      const x4 = $as_scm_StringBuilder(xs);
      const this$4 = this.scm_StringBuilder__f_underlying;
      const s = x4.scm_StringBuilder__f_underlying;
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s)
    } else {
      const ks = xs.knownSize__I();
      if ((ks !== 0)) {
        const b = this.scm_StringBuilder__f_underlying;
        if ((ks > 0)) {
          b.length__I()
        };
        const it = xs.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          const c = $uC(it.next__O());
          const str$1 = $as_T(String.fromCharCode(c));
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
        }
      }
    };
    return this
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_IndexedSeq$()
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__C__scm_StringBuilder($uC(elem))
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
function $as_scm_StringBuilder(obj) {
  return (((obj instanceof $c_scm_StringBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.StringBuilder"))
}
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_StringBuilder)))
}
function $asArrayOf_scm_StringBuilder(obj, depth) {
  return (($isArrayOf_scm_StringBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth))
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $p_scm_ListBuffer__copyElems__V = (function($thiz) {
  const this$2 = new $c_scm_ListBuffer();
  const buf = this$2.addAll__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
});
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_first = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_first = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  appended__O__O(elem) {
    return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix)
  };
  iterator__sc_Iterator() {
    return this.scm_ListBuffer__f_first.iterator__sc_Iterator()
  };
  iterableFactory__sc_SeqFactory() {
    return $m_scm_ListBuffer$()
  };
  apply__I__O(i) {
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  knownSize__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_first
  };
  addOne__O__scm_ListBuffer(elem) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  addAll__sc_IterableOnce__scm_ListBuffer(xs) {
    const it = xs.iterator__sc_Iterator();
    if (it.hasNext__Z()) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      const last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1
      } else {
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
      };
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      while (it.hasNext__Z()) {
        const last1$2 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1$2;
        this.scm_ListBuffer__f_last0 = last1$2;
        this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0)
      }
    };
    return this
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ListBuffer(elem)
  };
  result__O() {
    return this.toList__sci_List()
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ListBuffer$()
  };
}
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_ArrayBuffer__AO__I__ = (function($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, $newArrayObject($d_O.getArrayOf(), [16]), 0);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  appended__O__O(elem) {
    return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix)
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_scm_ArrayBufferView(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_ArrayBuffer__f_size0;
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  ensureSize__I__V(n) {
    this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
  };
  apply__I__O(n) {
    const hi = ((1 + n) | 0);
    if ((n < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    return this.scm_ArrayBuffer__f_array.get(n)
  };
  update__I__O__V(index, elem) {
    const hi = ((1 + index) | 0);
    if ((index < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    this.scm_ArrayBuffer__f_array.set(index, elem)
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  iterableFactory__sc_SeqFactory() {
    return $m_scm_ArrayBuffer$()
  };
  addOne__O__scm_ArrayBuffer(elem) {
    const i = this.scm_ArrayBuffer__f_size0;
    this.ensureSize__I__V(((1 + this.scm_ArrayBuffer__f_size0) | 0));
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    this.update__I__O__V(i, elem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuffer(elems) {
    if ((elems instanceof $c_scm_ArrayBuffer)) {
      const x2 = $as_scm_ArrayBuffer(elems);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, x2.scm_ArrayBuffer__f_size0);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0)
    } else {
      $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
    };
    return this
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ArrayBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuffer(elem)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArrayBuffer$()
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[0]
  };
  lengthCompare__I__I(len) {
    const x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  appended__O__O(elem) {
    return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
  };
  appendedAll__sc_IterableOnce__O(suffix) {
    return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sjs_js_WrappedArray$()
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  knownSize__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  className__T() {
    return "WrappedArray"
  };
  result__O() {
    return this
  };
  addOne__O__scm_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjs_js_WrappedArray$()
  };
}
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
GameListener = (function() {
  return new $c_Lcom_kos_wormpad_game_GameListener()
});
MainApp = $m_Lcom_kos_pathtrain_MainApp$();
$s_Lcom_kos_pathtrain_MainApp__main__AT__V($makeNativeArrayWrapper($d_T.getArrayOf(), []));
}).call(this);
//# sourceMappingURL=pathtrain-fastopt.js.map
