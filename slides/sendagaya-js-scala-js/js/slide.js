ScalaJS.impls.slide_URLUtil$class__hashValue__Lslide_URLUtil__T__Lscala_Option = (function($$this, hash$2) {
  var x1 = hash$2;
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(x1, "#")) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(x1, 1))
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.impls.slide_URLUtil$class__$init$__Lslide_URLUtil__V = (function($$this) {
  /*<skip>*/
});

/** @constructor */
ScalaJS.c.slide_AsInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.slide_AsInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.slide_AsInt$.prototype.constructor = ScalaJS.c.slide_AsInt$;
ScalaJS.c.slide_AsInt$.prototype.unapply__T__Lscala_Option = (function(s) {
  try {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.bI(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toInt__I()))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_NumberFormatException($jsexc$)) {
      var e = $jsexc$;
      return ScalaJS.modules.scala_None()
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.slide_AsInt$.prototype.unapply__T__ = (function(s) {
  return this.unapply__T__Lscala_Option(s)
});
/** @constructor */
ScalaJS.inheritable.slide_AsInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_AsInt$.prototype = ScalaJS.c.slide_AsInt$.prototype;
ScalaJS.is.slide_AsInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_AsInt$)))
});
ScalaJS.as.slide_AsInt$ = (function(obj) {
  if ((ScalaJS.is.slide_AsInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.AsInt")
  }
});
ScalaJS.isArrayOf.slide_AsInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_AsInt$)))
});
ScalaJS.asArrayOf.slide_AsInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_AsInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.AsInt;", depth)
  }
});
ScalaJS.data.slide_AsInt$ = new ScalaJS.ClassTypeData({
  slide_AsInt$: 0
}, false, "slide.AsInt$", ScalaJS.data.java_lang_Object, {
  slide_AsInt$: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_AsInt$.prototype.$classData = ScalaJS.data.slide_AsInt$;
ScalaJS.moduleInstances.slide_AsInt = undefined;
ScalaJS.modules.slide_AsInt = (function() {
  if ((!ScalaJS.moduleInstances.slide_AsInt)) {
    ScalaJS.moduleInstances.slide_AsInt = new ScalaJS.c.slide_AsInt$().init___()
  };
  return ScalaJS.moduleInstances.slide_AsInt
});

/** @constructor */
ScalaJS.c.slide_KeyCode$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.LEFT$1 = 0;
  this.UP$1 = 0;
  this.RIGHT$1 = 0;
  this.DOWN$1 = 0;
  this.ESC$1 = 0
});
ScalaJS.c.slide_KeyCode$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.slide_KeyCode$.prototype.constructor = ScalaJS.c.slide_KeyCode$;
ScalaJS.c.slide_KeyCode$.prototype.LEFT__I = (function() {
  return this.LEFT$1
});
ScalaJS.c.slide_KeyCode$.prototype.UP__I = (function() {
  return this.UP$1
});
ScalaJS.c.slide_KeyCode$.prototype.RIGHT__I = (function() {
  return this.RIGHT$1
});
ScalaJS.c.slide_KeyCode$.prototype.DOWN__I = (function() {
  return this.DOWN$1
});
ScalaJS.c.slide_KeyCode$.prototype.ESC__I = (function() {
  return this.ESC$1
});
ScalaJS.c.slide_KeyCode$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.slide_KeyCode = this;
  this.LEFT$1 = 37;
  this.UP$1 = 38;
  this.RIGHT$1 = 39;
  this.DOWN$1 = 40;
  this.ESC$1 = 27;
  return this
});
ScalaJS.c.slide_KeyCode$.prototype.ESC__ = (function() {
  return ScalaJS.bI(this.ESC__I())
});
ScalaJS.c.slide_KeyCode$.prototype.DOWN__ = (function() {
  return ScalaJS.bI(this.DOWN__I())
});
ScalaJS.c.slide_KeyCode$.prototype.RIGHT__ = (function() {
  return ScalaJS.bI(this.RIGHT__I())
});
ScalaJS.c.slide_KeyCode$.prototype.UP__ = (function() {
  return ScalaJS.bI(this.UP__I())
});
ScalaJS.c.slide_KeyCode$.prototype.LEFT__ = (function() {
  return ScalaJS.bI(this.LEFT__I())
});
/** @constructor */
ScalaJS.inheritable.slide_KeyCode$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_KeyCode$.prototype = ScalaJS.c.slide_KeyCode$.prototype;
ScalaJS.is.slide_KeyCode$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_KeyCode$)))
});
ScalaJS.as.slide_KeyCode$ = (function(obj) {
  if ((ScalaJS.is.slide_KeyCode$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.KeyCode")
  }
});
ScalaJS.isArrayOf.slide_KeyCode$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_KeyCode$)))
});
ScalaJS.asArrayOf.slide_KeyCode$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_KeyCode$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.KeyCode;", depth)
  }
});
ScalaJS.data.slide_KeyCode$ = new ScalaJS.ClassTypeData({
  slide_KeyCode$: 0
}, false, "slide.KeyCode$", ScalaJS.data.java_lang_Object, {
  slide_KeyCode$: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_KeyCode$.prototype.$classData = ScalaJS.data.slide_KeyCode$;
ScalaJS.moduleInstances.slide_KeyCode = undefined;
ScalaJS.modules.slide_KeyCode = (function() {
  if ((!ScalaJS.moduleInstances.slide_KeyCode)) {
    ScalaJS.moduleInstances.slide_KeyCode = new ScalaJS.c.slide_KeyCode$().init___()
  };
  return ScalaJS.moduleInstances.slide_KeyCode
});

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.currentPageNum$1 = 0
});
ScalaJS.c.slide_ScalaJSSlide$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.slide_ScalaJSSlide$.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$;
ScalaJS.c.slide_ScalaJSSlide$.prototype.slide$ScalaJSSlide$$Next$1$lzycompute__p1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$ = (function(x$1) {
  if ((x$1.elem$1 === null)) {
    x$1.elem$1 = new ScalaJS.c.slide_ScalaJSSlide$Next$2$().init___Lscala_runtime_VolatileObjectRef(x$1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.slide_ScalaJSSlide$Next$2$(x$1.elem$1)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.slide$ScalaJSSlide$$Prev$1$lzycompute__p1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$ = (function(x$1) {
  if ((x$1.elem$1 === null)) {
    x$1.elem$1 = new ScalaJS.c.slide_ScalaJSSlide$Prev$2$().init___Lscala_runtime_VolatileObjectRef(x$1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.slide_ScalaJSSlide$Prev$2$(x$1.elem$1)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.hashValue__T__Lscala_Option = (function(hash) {
  return ScalaJS.impls.slide_URLUtil$class__hashValue__Lslide_URLUtil__T__Lscala_Option(this, hash)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.currentPageNum__I = (function() {
  return this.currentPageNum$1
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.currentPageNum$und$eq__I__V = (function(x$1) {
  this.currentPageNum$1 = x$1
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.render__I__V = (function(pageNum) {
  ScalaJS.protect(ScalaJS.g["jQuery"])("div.section")["hide"]();
  ScalaJS.protect(ScalaJS.g["jQuery"])(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["div.section:nth-child(", ")"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(pageNum)]))))["show"]();
  ScalaJS.g["location"]["hash"] = new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["#", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(pageNum)])));
  this.currentPageNum$und$eq__I__V(pageNum)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.moveToTopPage__V = (function() {
  this.render__I__V(1)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.moveToNextPage__V = (function() {
  this.render__I__V(ScalaJS.uI(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [(this.currentPageNum__I() + 1), (ScalaJS.protect(ScalaJS.g["jQuery"])("div.section")["length"] | 0)])))).min__Lscala_math_Ordering__O(ScalaJS.modules.scala_math_Ordering$Int())))
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.moveToPreviousPage__V = (function() {
  this.render__I__V(ScalaJS.uI(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [(this.currentPageNum__I() - 1), 1])))).max__Lscala_math_Ordering__O(ScalaJS.modules.scala_math_Ordering$Int())))
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.move__Lorg_scalajs_jquery_JQueryEventObject__V = (function(e) {
  var Next$module = new ScalaJS.c.scala_runtime_VolatileObjectRef().init___O(null);
  var Prev$module = new ScalaJS.c.scala_runtime_VolatileObjectRef().init___O(null);
  var directions = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.bI(ScalaJS.modules.slide_KeyCode().LEFT__I())), this.slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$(Prev$module)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.bI(ScalaJS.modules.slide_KeyCode().UP__I())), this.slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$(Prev$module)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.bI(ScalaJS.modules.slide_KeyCode().RIGHT__I())), this.slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$(Next$module)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.bI(ScalaJS.modules.slide_KeyCode().DOWN__I())), this.slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$(Next$module))]), 1))));
  var keyCodeAsInt = (e["which"] | 0);
  var x1 = keyCodeAsInt;
  matchEnd4: {
    if ((ScalaJS.modules.slide_KeyCode().ESC__I() === x1)) {
      this.moveToTopPage__V();
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    directions.get__O__Lscala_Option(ScalaJS.bI(x1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(Next$module$1, Prev$module$1) {
      return (function(x0$1) {
        var x1 = x0$1;
        matchEnd5: {
          if (ScalaJS.anyRefEqEq(ScalaJS.modules.slide_ScalaJSSlide().slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$(Next$module$1), x1)) {
            ScalaJS.modules.slide_ScalaJSSlide().moveToNextPage__V();
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd5
          };
          if (ScalaJS.anyRefEqEq(ScalaJS.modules.slide_ScalaJSSlide().slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$(Prev$module$1), x1)) {
            ScalaJS.modules.slide_ScalaJSSlide().moveToPreviousPage__V();
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd5
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1)
        };
        return ScalaJS.bV(undefined)
      })
    })(Next$module, Prev$module)));
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd4
  }
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.main__V = (function() {
  ScalaJS.protect(ScalaJS.g["jQuery"])(ScalaJS.g["document"])["ready"]((function() {
    return (function() {
      ScalaJS.modules.slide_ScalaJSSlide().currentPageNum$und$eq__I__V(ScalaJS.uI(ScalaJS.modules.slide_ScalaJSSlide().hashValue__T__Lscala_Option(ScalaJS.g["location"]["hash"]).withFilter__Lscala_Function1__Lscala_Option$WithFilter(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2().init___Lslide_ScalaJSSlide$$anonfun$main$1(this)).map__Lscala_Function1__Lscala_Option(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3().init___Lslide_ScalaJSSlide$$anonfun$main$1(this)).getOrElse__Lscala_Function0__O(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1().init___Lslide_ScalaJSSlide$$anonfun$main$1(this))));
      ScalaJS.protect(ScalaJS.g["jQuery"])("div.section")["hide"]();
      ScalaJS.modules.slide_ScalaJSSlide().render__I__V(ScalaJS.modules.slide_ScalaJSSlide().currentPageNum__I());
      ScalaJS.protect(ScalaJS.g["jQuery"])(ScalaJS.g["document"])["bind"]("keydown", (function($this) {
        return (function(arg1) {
          return $this.apply__O__O(arg1)
        })
      })(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4().init___Lslide_ScalaJSSlide$$anonfun$main$1(this)));
      ScalaJS.protect(ScalaJS.g["jQuery"])("div.section")["each"]((function($this) {
        return (function(arg1, arg2) {
          return $this.apply__O__O__O(arg1, arg2)
        })
      })(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5().init___Lslide_ScalaJSSlide$$anonfun$main$1(this)));
      ScalaJS.protect(ScalaJS.g["jQuery"])("img.slide-prev")["click"]((function($this) {
        return (function(arg1) {
          return $this.apply__O__O(arg1)
        })
      })(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6().init___Lslide_ScalaJSSlide$$anonfun$main$1(this)));
      return ScalaJS.protect(ScalaJS.g["jQuery"])("img.slide-next")["click"]((function($this) {
        return (function(arg1) {
          return $this.apply__O__O(arg1)
        })
      })(new ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7().init___Lslide_ScalaJSSlide$$anonfun$main$1(this)))
    })
  })())
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.$$js$exported$meth$main__O = (function() {
  this.main__V()
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$ = (function(Next$module$1) {
  if ((Next$module$1.elem$1 === null)) {
    return this.slide$ScalaJSSlide$$Next$1$lzycompute__p1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$(Next$module$1)
  } else {
    return ScalaJS.as.slide_ScalaJSSlide$Next$2$(Next$module$1.elem$1)
  }
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$ = (function(Prev$module$1) {
  if ((Prev$module$1.elem$1 === null)) {
    return this.slide$ScalaJSSlide$$Prev$1$lzycompute__p1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$(Prev$module$1)
  } else {
    return ScalaJS.as.slide_ScalaJSSlide$Prev$2$(Prev$module$1.elem$1)
  }
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.slide_ScalaJSSlide = this;
  ScalaJS.impls.slide_URLUtil$class__$init$__Lslide_URLUtil__V(this);
  this.currentPageNum$1 = 1;
  return this
});
ScalaJS.c.slide_ScalaJSSlide$.prototype["main"] = (function() {
  return this.$$js$exported$meth$main__O()
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.hashValue__T__ = (function(hash) {
  return this.hashValue__T__Lscala_Option(hash)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__ = (function(Prev$module$1) {
  return this.slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$(Prev$module$1)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__ = (function(Next$module$1) {
  return this.slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$(Next$module$1)
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.main__ = (function() {
  return ScalaJS.bV(this.main__V())
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.move__Lorg_scalajs_jquery_JQueryEventObject__ = (function(e) {
  return ScalaJS.bV(this.move__Lorg_scalajs_jquery_JQueryEventObject__V(e))
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.moveToPreviousPage__ = (function() {
  return ScalaJS.bV(this.moveToPreviousPage__V())
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.moveToNextPage__ = (function() {
  return ScalaJS.bV(this.moveToNextPage__V())
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.moveToTopPage__ = (function() {
  return ScalaJS.bV(this.moveToTopPage__V())
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.render__I__ = (function(pageNum) {
  return ScalaJS.bV(this.render__I__V(pageNum))
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.currentPageNum$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.currentPageNum$und$eq__I__V(x$1))
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.currentPageNum__ = (function() {
  return ScalaJS.bI(this.currentPageNum__I())
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$.prototype = ScalaJS.c.slide_ScalaJSSlide$.prototype;
ScalaJS.is.slide_ScalaJSSlide$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$)))
});
ScalaJS.as.slide_ScalaJSSlide$ = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$ = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$: 0
}, false, "slide.ScalaJSSlide$", ScalaJS.data.java_lang_Object, {
  slide_ScalaJSSlide$: 1,
  slide_URLUtil: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$;
ScalaJS.moduleInstances.slide_ScalaJSSlide = undefined;
ScalaJS.modules.slide_ScalaJSSlide = (function() {
  if ((!ScalaJS.moduleInstances.slide_ScalaJSSlide)) {
    ScalaJS.moduleInstances.slide_ScalaJSSlide = new ScalaJS.c.slide_ScalaJSSlide$().init___()
  };
  return ScalaJS.moduleInstances.slide_ScalaJSSlide
});
ScalaJS.e["ScalaJSSlide"] = ScalaJS.modules.slide_ScalaJSSlide;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$Direction$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$Direction$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.slide_ScalaJSSlide$Direction$1.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$Direction$1;
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$Direction$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$Direction$1.prototype = ScalaJS.c.slide_ScalaJSSlide$Direction$1.prototype;
ScalaJS.is.slide_ScalaJSSlide$Direction$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$Direction$1)))
});
ScalaJS.as.slide_ScalaJSSlide$Direction$1 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$Direction$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$Direction$1")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$Direction$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$Direction$1)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$Direction$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$Direction$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$Direction$1;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$Direction$1 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$Direction$1: 0
}, false, "slide.ScalaJSSlide$Direction$1", ScalaJS.data.java_lang_Object, {
  slide_ScalaJSSlide$Direction$1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$Direction$1.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$Direction$1;

ScalaJS.is.slide_URLUtil = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_URLUtil)))
});
ScalaJS.as.slide_URLUtil = (function(obj) {
  if ((ScalaJS.is.slide_URLUtil(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.URLUtil")
  }
});
ScalaJS.isArrayOf.slide_URLUtil = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_URLUtil)))
});
ScalaJS.asArrayOf.slide_URLUtil = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_URLUtil(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.URLUtil;", depth)
  }
});
ScalaJS.data.slide_URLUtil = new ScalaJS.ClassTypeData({
  slide_URLUtil: 0
}, true, "slide.URLUtil", undefined, {
  slide_URLUtil: 1,
  java_lang_Object: 1
});

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype.apply__T__Z = (function(check$ifrefutable$1) {
  var x1 = check$ifrefutable$1;
  var o7 = ScalaJS.modules.slide_AsInt().unapply__T__Lscala_Option(x1);
  if ((!o7.isEmpty__Z())) {
    return true
  };
  return false
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__T__Z(ScalaJS.as.java_lang_String(v1)))
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype.apply__T__ = (function(check$ifrefutable$1) {
  return ScalaJS.bZ(this.apply__T__Z(check$ifrefutable$1))
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$2;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype.apply__T__I = (function(x$1) {
  var x1 = x$1;
  var o7 = ScalaJS.modules.slide_AsInt().unapply__T__Lscala_Option(x1);
  if ((!o7.isEmpty__Z())) {
    var i = ScalaJS.uI(o7.get__O());
    return i
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bI(this.apply__T__I(ScalaJS.as.java_lang_String(v1)))
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype.apply__T__ = (function(x$1) {
  return ScalaJS.bI(this.apply__T__I(x$1))
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3", ScalaJS.data.scala_runtime_AbstractFunction1, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$3;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype.apply__Lorg_scalajs_jquery_JQueryEventObject__V = (function(e) {
  ScalaJS.modules.slide_ScalaJSSlide().move__Lorg_scalajs_jquery_JQueryEventObject__V(e)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype.apply__O__O = (function(v1) {
  this.apply__Lorg_scalajs_jquery_JQueryEventObject__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype.apply__Lorg_scalajs_jquery_JQueryEventObject__ = (function(e) {
  return ScalaJS.bV(this.apply__Lorg_scalajs_jquery_JQueryEventObject__V(e))
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4", ScalaJS.data.scala_runtime_AbstractFunction1, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$4;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype.apply__Lscala_scalajs_js_Any__Lorg_scalajs_dom_Element__Lorg_scalajs_jquery_JQuery = (function(index, elem) {
  var footer = ScalaJS.protect(ScalaJS.g["jQuery"])("<div>")["addClass"]("footer");
  var prev = ScalaJS.protect(ScalaJS.g["jQuery"])("<img>")["addClass"]("slide-prev")["attr"]("src", "./img/left.png");
  var next = ScalaJS.protect(ScalaJS.g["jQuery"])("<img>")["addClass"]("slide-next")["attr"]("src", "./img/right.png");
  return footer["append"](prev)["append"](next)["appendTo"](elem)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lscala_scalajs_js_Any__Lorg_scalajs_dom_Element__Lorg_scalajs_jquery_JQuery(v1, v2)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction2.prototype.init___.call(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype.apply__Lscala_scalajs_js_Any__Lorg_scalajs_dom_Element__ = (function(index, elem) {
  return this.apply__Lscala_scalajs_js_Any__Lorg_scalajs_dom_Element__Lorg_scalajs_jquery_JQuery(index, elem)
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5", ScalaJS.data.scala_runtime_AbstractFunction2, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$5;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype.apply__Lorg_scalajs_jquery_JQueryEventObject__V = (function(x$2) {
  ScalaJS.modules.slide_ScalaJSSlide().moveToPreviousPage__V()
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype.apply__O__O = (function(v1) {
  this.apply__Lorg_scalajs_jquery_JQueryEventObject__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype.apply__Lorg_scalajs_jquery_JQueryEventObject__ = (function(x$2) {
  return ScalaJS.bV(this.apply__Lorg_scalajs_jquery_JQueryEventObject__V(x$2))
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6", ScalaJS.data.scala_runtime_AbstractFunction1, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$6;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype.apply__Lorg_scalajs_jquery_JQueryEventObject__V = (function(x$3) {
  ScalaJS.modules.slide_ScalaJSSlide().moveToNextPage__V()
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype.apply__O__O = (function(v1) {
  this.apply__Lorg_scalajs_jquery_JQueryEventObject__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype.apply__Lorg_scalajs_jquery_JQueryEventObject__ = (function(x$3) {
  return ScalaJS.bV(this.apply__Lorg_scalajs_jquery_JQueryEventObject__V(x$3))
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7", ScalaJS.data.scala_runtime_AbstractFunction1, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$7;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$Next$2$ = (function() {
  ScalaJS.c.slide_ScalaJSSlide$Direction$1.call(this);
  this.Next$module$1$2 = null
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype = new ScalaJS.inheritable.slide_ScalaJSSlide$Direction$1();
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$Next$2$;
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productPrefix__T = (function() {
  return "Next"
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.slide_ScalaJSSlide$Next$2$(x$1)
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.hashCode__I = (function() {
  return 2424595
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.toString__T = (function() {
  return "Next"
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.slide_ScalaJSSlide().slide$ScalaJSSlide$$Next$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Next$2$(this.Next$module$1$2)
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.init___Lscala_runtime_VolatileObjectRef = (function(Next$module$1) {
  this.Next$module$1$2 = Next$module$1;
  ScalaJS.c.slide_ScalaJSSlide$Direction$1.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$Next$2$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$Next$2$.prototype = ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype;
ScalaJS.is.slide_ScalaJSSlide$Next$2$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$Next$2$)))
});
ScalaJS.as.slide_ScalaJSSlide$Next$2$ = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$Next$2$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$Next$2")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$Next$2$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$Next$2$)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$Next$2$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$Next$2$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$Next$2;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$Next$2$ = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$Next$2$: 0
}, false, "slide.ScalaJSSlide$Next$2$", ScalaJS.data.slide_ScalaJSSlide$Direction$1, {
  slide_ScalaJSSlide$Next$2$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  slide_ScalaJSSlide$Direction$1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$Next$2$.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$Next$2$;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$Prev$2$ = (function() {
  ScalaJS.c.slide_ScalaJSSlide$Direction$1.call(this);
  this.Prev$module$1$2 = null
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype = new ScalaJS.inheritable.slide_ScalaJSSlide$Direction$1();
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$Prev$2$;
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productPrefix__T = (function() {
  return "Prev"
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.slide_ScalaJSSlide$Prev$2$(x$1)
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.hashCode__I = (function() {
  return 2496083
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.toString__T = (function() {
  return "Prev"
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.slide_ScalaJSSlide().slide$ScalaJSSlide$$Prev$1__Lscala_runtime_VolatileObjectRef__Lslide_ScalaJSSlide$Prev$2$(this.Prev$module$1$2)
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.init___Lscala_runtime_VolatileObjectRef = (function(Prev$module$1) {
  this.Prev$module$1$2 = Prev$module$1;
  ScalaJS.c.slide_ScalaJSSlide$Direction$1.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$Prev$2$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$Prev$2$.prototype = ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype;
ScalaJS.is.slide_ScalaJSSlide$Prev$2$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$Prev$2$)))
});
ScalaJS.as.slide_ScalaJSSlide$Prev$2$ = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$Prev$2$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$Prev$2")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$Prev$2$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$Prev$2$)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$Prev$2$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$Prev$2$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$Prev$2;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$Prev$2$ = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$Prev$2$: 0
}, false, "slide.ScalaJSSlide$Prev$2$", ScalaJS.data.slide_ScalaJSSlide$Direction$1, {
  slide_ScalaJSSlide$Prev$2$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  slide_ScalaJSSlide$Direction$1: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$Prev$2$.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$Prev$2$;

/** @constructor */
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0$mcI$sp.call(this)
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0$mcI$sp();
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype.constructor = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1;
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype.apply__I = (function() {
  return this.apply$mcI$sp__I()
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype.apply$mcI$sp__I = (function() {
  return 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype.apply__O = (function() {
  return ScalaJS.bI(this.apply__I())
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype.init___Lslide_ScalaJSSlide$$anonfun$main$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0$mcI$sp.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype = ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype;
ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1)))
});
ScalaJS.as.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lslide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1: 0
}, false, "slide.ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction0$mcI$sp, {
  slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0$mcI$sp: 1,
  scala_Function0$mcI$sp: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1.prototype.$classData = ScalaJS.data.slide_ScalaJSSlide$$anonfun$main$1$$anonfun$apply$1;

//@ sourceMappingURL=slide.js.map
